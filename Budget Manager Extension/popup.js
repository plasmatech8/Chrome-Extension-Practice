
function init() {
		
	var total = document.getElementById('total');
	var limit = document.getElementById('limit');
	var amount = document.getElementById('amount');
	var spendBtn = document.getElementById('spendAmount');

	// Initialisation
	chrome.storage.sync.get(['total', 'limit'], function(budget){
		// Can use get 'total' or ['total', 'limit']
		if (budget.total) 
			total.innerText = budget.total;
		if (budget.limit)
			limit.innerText = budget.limit;
	});
	
	// Events	
	spendBtn.addEventListener('click', function () {

		// Get the object stored under the name 'total'
		chrome.storage.sync.get(['total','limit'], function(budget){
			
			var newTotal = 0;
			
			// If total exists,
			if (budget.total) {
				newTotal += parseInt( budget.total );
			}
			
			// If an amount is entered,
			if (amount.value) {
				newTotal += parseInt( amount.value );
			}
			
			// Set the stored variables
			chrome.storage.sync.set({'total': newTotal}, function(){ 
				
				// function to create notification
				if (amount && newTotal >= budget.limit) {
					
					// Notification
					var notifOptions = {
						type: 'basic', 
						iconUrl:'icon48.png',
						title: 'Limit Reached!',
						message: 'Uh oh! You have reached your budget limit.'
					}	
					chrome.notifications.create('limitNotif', notifOptions);
					
					// Alert
					//alert('Uh oh! You have reached your budget limit.');
				}
			});
			
			// Update html fields
			total.innerText = newTotal;
			amount.value = '';
			
			
			
		});
	});
}

window.onload = init;