# Page Font Style Extension:

A page-action extension.
- Works only on specific pages.
- Other pages = inactive/greyed out

## Outline:
1) content.js is activates only on certain pages (as per the manifest)
2) content.js sends message to eventPage.js to activate the extension (popup.html AND icon).
3) eventPage.js activates the extension via page action.
4) We can now open popup.html via page action.
5) We can enter input fields to send messages to content.js to change the webpage.


## Content Scripts:
- Files that un in the contents of the webpage.
- Can change the DOM
- Cannot use most of the chrome APIs
- Isolated
- Access to DOM
- No access to its variables and functions

contentScript.js 	-> 		Msg(show extension)		-> 		eventPage.js  
contentScript.js	 <- 	Msg(change:red)			<- 		popup.js  

The content script will send a message to the eventPage to highlight the icon.


## Notes:

1)  
We specify the URLs in which the content script will run:
```javascript
"content_scripts":[
		{
			"matches":["https://www.youtube.com/*"],
			"js":["content.js", "jquery-3.1.0.min.js"]
		}
	]
```
The content script will send a message to eventPage.js.

2)  
eventPage.js is a event script used to activate the extension, when a message is sent from the activation of content.js.
```javascript
"background":{
		"scripts":["eventPage.js"],
		"persistent": false
	},
```
3)  
When request to activate the extension occurs on eventPage.js:
```javascript
chrome.tabs.query({ active:true, currentWindow:true }, function(tabs){
		chrome.pageAction.show(tabs[0].id);
	});
```
This activates the icon and allows the popup to appear (running via page action).

4)  
Now the page action extension is activated:
```javascript
"page_action":{
		"default_icon":"icon16.png",
		"default_popup": "popup.html",
		"default_title": "PageFontStyle"
	}
```
Note: that page_action =/= browser_action

5)  
Messages can now be sent from popup.js to content.js.