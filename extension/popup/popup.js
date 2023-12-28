const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function() {
            chrome.tabs.create({ url: 'frontend/debugpage.html' });
    };
}

// chrome.runtime.sendMessage({message: "fetch_data"}, function(response) {
//     if(response && response.data){
//         // 在这里处理从content.js获取的数据
//         console.log("从页面获取的数据: ", response.data);
//     }
// });

