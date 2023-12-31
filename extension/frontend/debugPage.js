require.config({paths: {'vs': '../lib/min/vs'}});
require(['vs/editor/editor.main'], function () {

    var context = null;

    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: '/**\nfailed to fetch context\n*/',
        language: 'java',
        glyphMargin: true // 启用装订线边距
    });


    editor.onDidChangeModelContent(e => {
        console.log("change happened");
    });


    window.addEventListener("message", ev => {
        if (ev.data.message === "debugPageInitializedWithContext") {
            console.log("debugPage.js receive message debugPageInitializedWithContext");
            window.parent.postMessage({message: "fetchContext"}, "*");
        }
        if (ev.data.message === "context") {
            console.log("debugPage.js receive message context");
            context = ev.data.context;
            editor.setValue(context);
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

    console.log("Monaco Editor initialized");

});