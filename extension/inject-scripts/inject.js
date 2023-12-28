(function () {
    console.log("inject.js injected");
    var editor;
    window.addEventListener("message", ev => {
        if (ev.data.message !== "fetchContext") {
            return;
        }
        editor = window.monaco?.editor.getModels()[0];
        var iframe = document.getElementById("debugPageIframe");
        iframe.contentWindow.postMessage({message: "context", context: editor.getValue()}, "*");

    });
    window.dispatchEvent(new Event("injectJsInitialized"));
    console.log("inject.js Initialized");
})();
