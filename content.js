function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "changeColor") {
    changeBackgroundColor(request.color);
    sendResponse({status: "done"});
  }
});
