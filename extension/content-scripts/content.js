function injectScriptToAccessMonaco() {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('inject-scripts/inject.js');
    (document.head || document.documentElement).appendChild(script);
    // script.onload = function () {
    //     this.remove();
    // };
    console.log("injectScriptToAccessMonaco ends");
}

var injectInitialized = false;
var debugPageInitialized = false;
var iframe;

function triggerFetchMonacoContext() {
    if (injectInitialized && debugPageInitialized) {
        iframe.contentWindow.postMessage({message: "debugPageInitializedWithContext"}, "*");
        console.log("sendMessage debugPageInitializedWithContext");
    }
}

window.addEventListener("message", function (event) {
    if (event.data && event.data.message === "debugPageInitialized") {
        debugPageInitialized = true;
        triggerFetchMonacoContext();
    }
});
window.addEventListener("injectJsInitialized", function () {
    console.log("receive event injectJsInitialized");
    injectInitialized = true;
    triggerFetchMonacoContext();
})

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action !== "popDebugger") {
        return false;
    }
    console.log("popDebugger begins");
    injectScriptToAccessMonaco();
// 创建 iframe
    iframe = document.createElement('iframe');
    iframe.id = 'debugPageIframe';
    iframe.style.width = '600px';
    iframe.style.height = '400px';
    iframe.style.position = 'fixed';
    iframe.style.top = '10px';
    iframe.style.left = '10px';
    iframe.style.zIndex = '1000';
    iframe.src = chrome.runtime.getURL('frontend/debugPage.html');
    iframe.style.boxShadow = '0px 0px 10px 2px rgba(0, 0, 0, 0.5)'; // 阴影效果
// 创建覆盖层
    let dragCover = document.createElement('div');
    dragCover.style.position = 'fixed';
    dragCover.style.top = '10px';
    dragCover.style.left = '10px';
    dragCover.style.width = '580px'; // 给关闭框留出位置
    dragCover.style.height = '30px'; // 与拖动区的大小一致
    dragCover.style.zIndex = '1001'; // 确保比 iframe 高，以出现在前方
    dragCover.style.cursor = 'move'; // 使鼠标悬停时能够变换样式

// 添加 iframe 和覆盖层到页面
    document.body.appendChild(iframe);
    document.body.appendChild(dragCover);
    let isDragging = false;
    let dragStartX, dragStartY;

// 鼠标按下事件绑定到覆盖层
    dragCover.addEventListener('mousedown', (e) => {
        // console.log("mousedown")
        e.preventDefault();
        isDragging = true;
        dragStartX = e.clientX - parseInt(iframe.style.left, 10);
        dragStartY = e.clientY - parseInt(iframe.style.top, 10);
        dragCover.style.cursor = 'move'; // 改变鼠标指针样式
        iframe.style.pointerEvents = 'none'; // 禁用 iframe 的鼠标事件
    });

// 鼠标移动事件
    document.addEventListener('mousemove', (e) => {
        // console.log("mousemove")
        if (!isDragging) return;
        e.preventDefault();
        let newX = e.clientX - dragStartX;
        let newY = e.clientY - dragStartY;
        iframe.style.left = newX + 'px';
        iframe.style.top = newY + 'px';
        dragCover.style.left = (newX - 5) + 'px';
        dragCover.style.top = (newY - 5) + 'px';
    });

// 鼠标释放事件
    document.addEventListener('mouseup', () => {
        // console.log("mouseup")
        isDragging = false;
        dragCover.style.cursor = 'default'; // 恢复鼠标指针样式
        iframe.style.pointerEvents = 'auto'; // 恢复 iframe 的鼠标事件
    });
});

console.log("content.js loaded");
