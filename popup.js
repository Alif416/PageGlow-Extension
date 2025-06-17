function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const button = document.getElementById("changeColorBtn");
const message = document.getElementById("message");

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];

  // Check if it's a restricted page
  if (tab.url.startsWith("chrome://") || tab.url.startsWith("chrome-extension://")) {
    message.textContent = "Cannot change the color of this page. Please open a regular website.";
  } else {
    // Show the button
    button.style.display = "block";

    button.addEventListener("click", () => {
      const color = getRandomColor();

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      }, () => {
        chrome.tabs.sendMessage(tab.id, { action: "changeColor", color: color }, (response) => {
          if (chrome.runtime.lastError) {
            message.textContent = "⚠️ " + chrome.runtime.lastError.message;
          } else {
            message.textContent = " Background color changed!";
          }
        });
      });
    });
  }
});
