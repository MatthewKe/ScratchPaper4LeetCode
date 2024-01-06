require.config({paths: {'vs': '../lib/min/vs'}});
require(['vs/editor/editor.main'], function () {

    var context = null;

    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: '/**\nfailed to fetch context\n*/',
        language: 'java',
        glyphMargin: true // 启用装订线边距
    });
    var isProgrammaticChange = false;
    editor.onDidChangeModelContent(e => {
        console.log("change happened");
        if (isProgrammaticChange) {
            isProgrammaticChange = false
        } else {
            context = editor.getValue();
            var solutionClassRegex = /class Solution \{[\s\S]*?\n\}/;
            var match = context.match(solutionClassRegex);
            var solutionClassCode = match ? match[0] : null;
            window.parent.postMessage({message: "debugEditorChange", context: solutionClassCode}, "*");
            console.log(solutionClassCode);
        }
    });
    
    window.addEventListener("message", ev => {
        if (ev.data.message === "debugPageInitializedWithContext") {
            console.log("debugPage.js receive message debugPageInitializedWithContext");
            window.parent.postMessage({message: "fetchContext"}, "*");
        } else if (ev.data.message === "context") {
            console.log("debugPage.js receive message context");
            context = ev.data.context;
            editor.setValue(context);
        } else if (ev.data.message === "leetcodeEditorChange") {
            isProgrammaticChange = true;
            var originalCode = editor.getValue();
            var newSolutionCode = ev.data.context;
            var replacedCode = originalCode.replace(/class Solution \{[\s\S]*?\n\}/, newSolutionCode);
            editor.setValue(replacedCode);
        }
    })

    var observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                var breakpoints = document.getElementsByClassName("cgmr codicon myGlyphMarginClass");
                for (let i = 0; i < breakpoints.length; i++) {
                    breakpoints[i].style.height = "10px";
                    breakpoints[i].style.width = "10px";
                }
            }
        });
    });
    observer.observe(document.body, {childList: true, subtree: true});


    var decorations = []; // 当前的装饰数组
    var breakpointsLines = [];

    editor.onMouseDown(e => {
        if (
            e.target.type === monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN ||
            e.target.type === monaco.editor.MouseTargetType.GUTTER_LINE_NUMBERS
        ) {
            const lineNumber = e.target.position.lineNumber;
            if (breakpointsLines.includes(lineNumber)) {
                breakpointsLines.splice(breakpointsLines.indexOf(lineNumber), 1);
            } else {
                breakpointsLines.push(lineNumber);
            }
            console.log(lineNumber)
            console.log(breakpointsLines);
            var newDecorations = [];
            breakpointsLines.forEach(i => {
                var newDecoration = {
                    range: new monaco.Range(i, 1, i, 1),
                    options: {isWholeLine: true, glyphMarginClassName: 'myGlyphMarginClass'}
                };
                newDecorations.push(newDecoration);
            })
            console.log(newDecorations);

            decorations = editor.deltaDecorations(decorations, newDecorations);

        }
    });


    window.parent.postMessage({message: "debugPageInitialized"}, "*");

    var debugButton = document.getElementById("Debug Button 1");
    debugButton.onclick = sendMessageToBackend;

    console.log("Monaco Editor initialized");

    const ip = "http://localhost:8080";

    function sendMessageToBackend() {
        console.log("sendCodeToBackend");
        let jsonData = {
            context: context,
            breakpointsLines: []
        };
        let requestOptions = {
            method: 'POST', // 请求方法
            headers: {
                'Content-Type': 'application/json' // 指定内容类型为 JSON
            },
            body: JSON.stringify(jsonData), // 将 JSON 对象转换为字符串
            redirect: 'follow' // 自动重定向
        };
        fetch(ip + '/runCode', requestOptions)
            .then(response => response.json()) // 转换响应为 JSON
            .then(result => console.log(result)) // 处理结果
            .catch(error => console.log('error', error)); //
    }


});