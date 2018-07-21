var menuItem = {
	"id":"speak",
	"title": "Speak",
	"contexts":["selection"]
};

// Create Context Menu item
chrome.contextMenus.create(menuItem);

// When a context item is clicked
chrome.contextMenus.onClicked.addListener(function(clickData){
	// If the item is speek,
	if (clickData.menuItemId == "speak" && clickData.selectionText) {
		// Speach API
		chrome.tts.speak(clickData.selectionText, {'rate':0.8});
	}
});

