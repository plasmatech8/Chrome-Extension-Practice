/*
	Recieves "showPageAction" from content.js (activates the extension)
	
	
*/

// Listens for messages from content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if (request.todo == "showPageAction") {
		
		// Activates the icon on this tab
		chrome.tabs.query({ active:true, currentWindow:true }, function(tabs){
			chrome.pageAction.show(tabs[0].id);
		});
	}

});



