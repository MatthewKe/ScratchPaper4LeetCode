var isProgrammaticChange = false;
(function () {
    console.log("inject.js injected");
    var editor;
    window.addEventListener("message", ev => {
        if (ev.data.message == "fetchContext") {
            editor = window.monaco?.editor.getModels()[0];
            var iframe = document.getElementById("debugPageIframe");
            iframe.contentWindow.postMessage({message: "context", context: editor.getValue()}, "*");
            editor.onDidChangeContent(e => {
                console.log("change happened");
                if (isProgrammaticChange) {
                    isProgrammaticChange = false;
                } else {
                    context = editor.getValue();
                    var solutionClassRegex = /class Solution \{[\s\S]*?\n\}/;
                    var match = context.match(solutionClassRegex);
                    var solutionClassCode = match ? match[0] : null;
                    iframe.contentWindow.postMessage({
                        message: "leetcodeEditorChange",
                        context: solutionClassCode
                    }, "*");
                }
            });
        } else if (ev.data && ev.data.message === "debugEditorChange") {
            console.log("receive message debugEditorChange");
            isProgrammaticChange = true;
            var originalCode = editor.getValue();
            var newSolutionCode = ev.data.context;
            var replacedCode = originalCode.replace(/class Solution \{[\s\S]*?\n\}/, newSolutionCode);
            console.log("now replaceCode");
            editor.setValue(replacedCode);
        }
    });
    window.dispatchEvent(new Event("injectJsInitialized"));
    console.log("inject.js Initialized");
})();

