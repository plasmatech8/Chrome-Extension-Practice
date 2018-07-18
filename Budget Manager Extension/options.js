
function init() {
	
	var showLimit = document.getElementById('showLimit');
	var showTotal = document.getElementById('showTotal');
	var limit = document.getElementById('limit');
	var saveLimitBtn = document.getElementById('saveLimit');
	var resetTotalBtn = document.getElementById('resetTotal');
	var exitBtn = document.getElementById('exit');
	
	// Set html indicators
	chrome.storage.sync.get(['total', 'limit'], function(budget){
		if (budget.total) 
			showTotal.innerText = budget.total;
		if (budget.limit)
			showLimit.innerText = budget.limit;
	});
	
	// Events
	saveLimitBtn.addEventListener('click', function () {
		// If an amount is entered,
		if (limit.value) {
			// Set the stored object
		chrome.storage.sync.set({'limit': parseInt( limit.value )}, function(){/*close(); //close the tab*/});
			// Update Limit Indicator
			showLimit.innerHTML = limit.value;
		}
	});
	
	resetTotalBtn.addEventListener('click', function () {
		// Set total to 0
		chrome.storage.sync.set({'total': 0});
		// Update Total Indicator
		showTotal.innerHTML = 0;
	});
	
	exitBtn.addEventListener('click', function () {
		close(); // close the tab
	});
}

window.onload = init;