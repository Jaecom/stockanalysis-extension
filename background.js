// Listener for tab updates
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status === "complete" && tab.url.startsWith("https://stockanalysis.com/stocks/screener/")) {
		chrome.scripting.executeScript({
			target: { tabId },
			files: ["scripts/content.js", "scripts/highlight.js"],
		});
	}
});
