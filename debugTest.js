require.config({paths: {'vs': 'extension/lib/min/vs'}});
require(['vs/editor/editor.main'], function () {


    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: '/**\nfailed to fetch context\n*/',
        language: 'java',
        lineNumbers: 'on', // 启用行号
        glyphMargin: true, // 启用装订线边距
    });

    // var lineToHighlight = 1;
    // var highlightDecoration = {
    //     range: new monaco.Range(lineToHighlight, 1, lineToHighlight, 1),
    //     options: {
    //         isWholeLine: true,
    //         className: 'lineHighlight'
    //     }
    // };
    // var decorations = editor.deltaDecorations([], [highlightDecoration]);

    var errorLine = 2;
    var errorDecoration = {
        range: new monaco.Range(errorLine, 1, errorLine, 1),
        options: {
            isWholeLine: true,
            glyphMarginClassName: 'errorGlyph',
            glyphMarginHoverMessage: {value: 'Error message here'}
        }
    };
    var decorations = editor.deltaDecorations([], [errorDecoration]);

    console.log(editor.getModel().getAllDecorations());

});