require.config({paths: {'vs': '../lib/min/vs'}});
require(['vs/editor/editor.main'], function () {

    var context = null;
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

    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: '/**\nfailed to fetch context\n*/',
        language: 'java'
    });

    window.parent.postMessage({message: "debugPageInitialized"}, "*");

    console.log("Monaco Editor initialized");

});