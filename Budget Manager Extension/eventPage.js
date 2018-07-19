
// Passed values into event
var contextMenuItem = {
	"id":"spendMoney",
	"title":"Spend Money",
	"contexts":["selection"] // Which object-right-click  this is supposed to appear on
}

// Create menu item
chrome.contextMenus.create(contextMenuItem)

// Add functionality to menu item
chrome.contextMenus.onClicked.addListener(function(clickData){
	
	function isInt(value){
		return !isNaN(value) &&  parseInt(Number(value)) == value &&  !isNaN(parseInt(value, 10));
	}
		
	// If we are spending money and selectionText exists,
	if (clickData.menuItemId === "spendMoney" && clickData.selectionText) {
		
		// If the selectiontext is an integer,
		if (isInt(clickData.selectionText)) {
			chrome.storage.sync.get(['total', 'limit'], function(budget){
				
				// Get total spent
				var newTotal = 0;
				if (budget.total){}
					newTotal += parseInt(budget.total)
				newTotal += parseInt(clickData.selectionText)
				
				// Set total spent and alert user
				chrome.storage.sync.set({'total': newTotal}, function(){
					if (newTotal >= budget.limit) {
						alert('Uh oh! You have reached your budget limit.');
					}
				})
			});
		}	
	}
})