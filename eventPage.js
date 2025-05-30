var menuItem = {
    "id": "quickspeak",
    "title": "Quick Speak",
    "contexts": ["selection"]
}

// Create the context menu item
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create(menuItem);
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((clickData, tab) => {
    if (clickData.menuItemId === "quickspeak" && clickData.selectionText) {
        chrome.tts.speak(clickData.selectionText, { rate: 0.7 });
    }
});