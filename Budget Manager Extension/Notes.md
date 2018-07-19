#Budget Manager:

- Must be browser action
- Accept spending
- Display total spending
- Limit/notify if reached
- Option to reset total Limit

Notifications do not seen to work for some reason. An alert was used instead, though it is probably a good idea to give permission to 'chrome.tabs' in order to put the alert on the main webpage (instead of extension).

##Notes:
- Uses Chrome storage API.

- The options menu is a page you can open by right-clicking the icon.

- Create an 'options' html page which opens on right-click > options:
'''json
"options_page":"options.html",
'''

- Create an 'event' script:
'''json
"background":{
	"scripts":["eventPage.js"],
	"persistent":false
}
'''
	- Note: that persistent=false is an event page and persistent=true is a packground page.

- It is probably a good idea to modularise our javascript via includes.