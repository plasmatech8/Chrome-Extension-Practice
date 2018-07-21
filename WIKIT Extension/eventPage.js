var menuItem = {
	"id":"wikit",
	"title": "Wikit",
	"contexts":["selection"]
};

// Create Context Menu item
chrome.contextMenus.create(menuItem);

// We want to append our word to the URI of wikipedia, so clean the input.
function fixedEncodeURI(str){
	return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
}


// When a context item is clicked
chrome.contextMenus.onClicked.addListener(function(clickData){
	
	
	// If the item is wikit and text is selected,
	if (clickData.menuItemId == "wikit" && clickData.selectionText) {
		
		var wikiURL = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
		
		var createData = {
			"url": wikiURL,
			"type": "popup",
			"top": 5,
			"left": 5,
			"width": parseInt(screen.availWidth / 2),
			"height": parseInt(screen.availHeight / 2)
		}
		
		// Create a new window for wikipedia
		chrome.windows.create(createData, function(){});
		
	}
	
});



