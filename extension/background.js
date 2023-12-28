chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "ScratchPaper",
        title: "ScratchPaper",
        contexts: ["all"]
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (tab.status === "complete" && info.menuItemId === "ScratchPaper") {
        chrome.tabs.sendMessage(tab.id, {action: "popDebugger"});
    }
});
