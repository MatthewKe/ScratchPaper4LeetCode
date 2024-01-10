require.config({paths: {'vs': '../lib/min/vs'}});
require(['vs/editor/editor.main'], function () {

    var context = 'public class Main {\n' +
        '    public static void main(String[] args) {\n' +
        '        Solution solution = new Solution();\n' +
        '        solution.constructMaximumBinaryTree(new int[]{1, 2, 3});\n' +
        '        System.out.println("hello world");\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'class Solution {\n' +
        '    public TreeNode constructMaximumBinaryTree(int[] nums) {\n' +
        '        return construct(nums, 0, nums.length - 1);\n' +
        '    }\n' +
        '\n' +
        '    public TreeNode construct(int[] nums, int left, int right) {\n' +
        '        if (left > right) {\n' +
        '            return null;\n' +
        '        }\n' +
        '        int best = left;\n' +
        '        for (int i = left + 1; i <= right; ++i) {\n' +
        '            if (nums[i] > nums[best]) {\n' +
        '                best = i;\n' +
        '            }\n' +
        '        }\n' +
        '        TreeNode node = new TreeNode(nums[best]);\n' +
        '        node.left = construct(nums, left, best - 1);\n' +
        '        node.right = construct(nums, best + 1, right);\n' +
        '        return node;\n' +
        '    }\n' +
        '}';
    var value = '/**\nfailed to fetch context\n*/';
    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: 'public class Main {\n' +
            '    public static void main(String[] args) {\n' +
            '        Solution solution = new Solution();\n' +
            '        solution.constructMaximumBinaryTree(new int[]{1, 2, 3});\n' +
            '        System.out.println("hello world");\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            'class Solution {\n' +
            '    public TreeNode constructMaximumBinaryTree(int[] nums) {\n' +
            '        return construct(nums, 0, nums.length - 1);\n' +
            '    }\n' +
            '\n' +
            '    public TreeNode construct(int[] nums, int left, int right) {\n' +
            '        if (left > right) {\n' +
            '            return null;\n' +
            '        }\n' +
            '        int best = left;\n' +
            '        for (int i = left + 1; i <= right; ++i) {\n' +
            '            if (nums[i] > nums[best]) {\n' +
            '                best = i;\n' +
            '            }\n' +
            '        }\n' +
            '        TreeNode node = new TreeNode(nums[best]);\n' +
            '        node.left = construct(nums, left, best - 1);\n' +
            '        node.right = construct(nums, best + 1, right);\n' +
            '        return node;\n' +
            '    }\n' +
            '}',
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
        }
    });

    let comments = 'public class Main {\n' +
        '    public static void main(String[] args) {\n' +
        '        // please enter your test code here\n' +
        '        System.out.println("hello world");\n' +
        '    }\n' +
        '}\n' +
        '\n'

    window.addEventListener("message", ev => {
        if (ev.data.message === "debugPageInitializedWithContext") {
            console.log("debugPage.js receive message debugPageInitializedWithContext");
            window.parent.postMessage({message: "fetchContext"}, "*");
        } else if (ev.data.message === "context") {
            console.log("debugPage.js receive message context");
            context = ev.data.context;
            context = comments + context;
            editor.setValue(context);
        } else if (ev.data.message === "leetcodeEditorChange") {
            isProgrammaticChange = true;
            var originalCode = editor.getValue();
            var newSolutionCode = ev.data.context;
            var replacedCode = originalCode.replace(/class Solution \{[\s\S]*?\n\}/, newSolutionCode);
            editor.setValue(replacedCode);
        }
        if (ev.data.message === "languageType") {
            console.log("已传送");
            console.log('是' + ev.data.type);
            document.getElementById('language').innerText = ev.data.type;
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


    var decorations = [];
    var breakpointsLines = [];
    var lineToHighlight = -1;

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
            decorateEditor();
        }
    });

    function decorateEditor() {
        var newDecorations = [];
        breakpointsLines.forEach(i => {
            var newDecoration = {
                range: new monaco.Range(i, 1, i, 1),
                options: {isWholeLine: true, glyphMarginClassName: 'myGlyphMarginClass'}
            };
            newDecorations.push(newDecoration);
        })
        if (lineToHighlight > 0) {
            newDecorations.push({
                range: new monaco.Range(lineToHighlight, 1, lineToHighlight, 1),
                options: {
                    isWholeLine: true,
                    className: '.lineHighLight'
                }
            });
        }

        decorations = editor.deltaDecorations(decorations, newDecorations);
    }


    window.parent.postMessage({message: "debugPageInitialized"}, "*");

    console.log("Monaco Editor initialized");

    const ip = "http://localhost:8080";

    let isDragging = false;
    let dragStartY;
    let preUp = 340;
    let preDown = 150;
    let newUp, newDown;

    document.getElementById("run").onclick = () => {
        //发送消息至content.js
        let outputArea = document.getElementById('output');
        let editArea = document.getElementById('editor');
        window.parent.postMessage({message: "lengthenTheArea"}, "*");

        editArea.style.height = '340px';
        console.log(editor);
        editor.layout();
        document.getElementById('dragLine').style.height = '5px';
        document.getElementById('dragLine').style.top = '200px';
        outputArea.style.height = '150px';

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
            .then(result => {
                console.log(result)
                // 输出结果，显示输出结果区域
                outputArea.innerText = result.message;
            }) // 处理结果
            .catch(error => console.log('error', error)); //
    }

    //拖拽条
    let dragLine = document.getElementById('dragLine');
    dragLine.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        dragStartY = e.clientY;
        console.log(newUp)
        console.log(newDown)
        if (newUp != undefined && newDown != undefined) {
            console.log("有效")
            preUp = newUp
            preDown = newDown
        }
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();

        let length = e.clientY - dragStartY;

        let outputArea = document.getElementById('output');
        let editArea = document.getElementById('editor');
        newUp = (preUp + length);
        newDown = (preDown - length);

        editArea.style.height = newUp + 'px';
        editor.layout();
        outputArea.style.height = newDown + 'px';
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });


    document.getElementById("debug").onclick = () => {

        window.parent.postMessage({message: "initTreeHtml"}, "*");

        let outputArea = document.getElementById('output');
        outputArea.innerText = "程序运行中……";

        document.getElementById("run").style.display = 'none';
        document.getElementById("debug").style.display = 'none';

        document.getElementById("step").style.display = 'inline';
        document.getElementById("next").style.display = 'inline';
        document.getElementById("stepUp").style.display = 'inline';
        document.getElementById("cont").style.display = 'inline';
        document.getElementById("exit").style.display = 'inline';

        //发送消息至content.js
        let editArea = document.getElementById('editor');
        window.parent.postMessage({message: "lengthenTheArea"}, "*");

        editArea.style.height = '340px';
        console.log(editor);
        editor.layout();
        document.getElementById('dragLine').style.height = '5px';
        document.getElementById('dragLine').style.top = '200px';
        outputArea.style.height = '150px';

        let jsonData = {
            context: context,
            breakpointsLines: breakpointsLines
        };

        let requestOptions = {
            method: 'POST', // 请求方法
            headers: {
                'Content-Type': 'application/json' // 指定内容类型为 JSON
            },
            body: JSON.stringify(jsonData), // 将 JSON 对象转换为字符串
            redirect: 'follow' // 自动重定向
        };
        fetch(ip + '/debugCode', requestOptions)
            .then(response => response.json())
            .then(result => {
                debugStep(result);
            })
            .catch(error => console.log('error', error));
    }

    document.getElementById("step").onclick = () => {
        document.getElementById("step").disabled = 'true';
        document.getElementById("next").disabled = 'true';
        document.getElementById("stepUp").disabled = 'true';
        document.getElementById("cont").disabled = 'true';

        fetch(ip + '/step')
            .then(response => response.json())
            .then(result => {
                debugStep(result);
                document.getElementById("step").removeAttribute("disabled")
                document.getElementById("next").removeAttribute("disabled")
                document.getElementById("stepUp").removeAttribute("disabled")
                document.getElementById("cont").removeAttribute("disabled")
            })
            .catch(error => console.log('error', error));
    };

    document.getElementById("next").onclick = () => {
        document.getElementById("step").disabled = 'true';
        document.getElementById("next").disabled = 'true';
        document.getElementById("stepUp").disabled = 'true';
        document.getElementById("cont").disabled = 'true';
        fetch(ip + '/next')
            .then(response => response.json())
            .then(result => {
                debugStep(result);
                document.getElementById("step").removeAttribute("disabled")
                document.getElementById("next").removeAttribute("disabled")
                document.getElementById("stepUp").removeAttribute("disabled")
                document.getElementById("cont").removeAttribute("disabled")
            })
            .catch(error => console.log('error', error));
    };

    document.getElementById("stepUp").onclick = () => {
        document.getElementById("step").disabled = 'true';
        document.getElementById("next").disabled = 'true';
        document.getElementById("stepUp").disabled = 'true';
        document.getElementById("cont").disabled = 'true';
        fetch(ip + '/stepUp')
            .then(response => response.json())
            .then(result => {
                debugStep(result);
                document.getElementById("step").removeAttribute("disabled")
                document.getElementById("next").removeAttribute("disabled")
                document.getElementById("stepUp").removeAttribute("disabled")
                document.getElementById("cont").removeAttribute("disabled")
            })
            .catch(error => console.log('error', error));
    };

    document.getElementById("cont").onclick = () => {
        document.getElementById("step").disabled = 'true';
        document.getElementById("next").disabled = 'true';
        document.getElementById("stepUp").disabled = 'true';
        document.getElementById("cont").disabled = 'true';
        fetch(ip + '/cont')
            .then(response => response.json())
            .then(result => {
                debugStep(result);
                document.getElementById("step").removeAttribute("disabled")
                document.getElementById("next").removeAttribute("disabled")
                document.getElementById("stepUp").removeAttribute("disabled")
                document.getElementById("cont").removeAttribute("disabled")
            })
            .catch(error => console.log('error', error));
    };

    document.getElementById("exit").onclick = () => {
        document.getElementById("run").style.display = 'inline';
        document.getElementById("debug").style.display = 'inline';

        document.getElementById("step").style.display = 'none';
        document.getElementById("next").style.display = 'none';
        document.getElementById("stepUp").style.display = 'none';
        document.getElementById("cont").style.display = 'none';
        document.getElementById("exit").style.display = 'none';

        //window.parent.postMessage({ message: "shortenTheArea" }, "*");
        //editor.layout();

        fetch(ip + '/exit')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                lineToHighlight = result.debugInfo.currentLine;
                decorateEditor();
            })
            .catch(error => console.log('error', error));
    };

    function debugStep(result) {
        console.log(result);

        window.parent.postMessage({
            message: "treeDatas",
            context: result.treeDatas,
            targetTreeNodes: result.debugInfo.targetTreeNodes
        }, "*");

        let outputArea = document.getElementById('output');
        let content = "";
        if (result.debugInfo.message != null) {
            if (result.debugInfo.message.includes("应用程序已退出")) {
                document.getElementById("run").style.display = 'inline';
                document.getElementById("debug").style.display = 'inline';

                document.getElementById("step").style.display = 'none';
                document.getElementById("next").style.display = 'none';
                document.getElementById("stepUp").style.display = 'none';
                document.getElementById("cont").style.display = 'none';
                document.getElementById("exit").style.display = 'none';
            }
            if (result.debugInfo.message.startsWith('\r')) {
                content = result.debugInfo.message.substring(2);
            } else {
                content = result.debugInfo.message;
            }
        }
        if (result.debugInfo.variables != null) {
            console.log(result.debugInfo.variables[0])
            for (i = 0; i < result.debugInfo.variables.length; i++) {
                console.log(result.debugInfo.variables[i])
                let variable = JSON.stringify(result.debugInfo.variables[i]);
                const regex = /"([^"]+)":"([^"]+)"/;
                const match = variable.match(regex);

                if (match) {
                    variable = `${match[1]} : ${match[2]}`;
                }
                
                content = content + '\n' + variable
            }
        }
        outputArea.innerText = content
        //这里要写应用程序已退出的内容
        lineToHighlight = result.debugInfo.currentLine;
        decorateEditor();
    }

    document.getElementById("closeButton1").onclick = () => {
        window.parent.postMessage({message: "closeIframe1"}, "*");
    };
})