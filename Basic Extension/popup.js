/*
$(function(){
	
	var nameInput = document.getElementById('name');
	var greet = document.getElementById('greet');
	
	// Replaces
	$('#name').keyup(function(){
		$('$greet').text('Hello ' + $('#name').val());
	})
})
*/


function init() {
	
	//alert("G'day.");
	
	var nameInput = document.getElementById('name');
	var greet = document.getElementById('greet');

	var displayName = function () {
		greet.textContent = 'Hello ' + nameInput.value + '!';
	}
	
	nameInput.addEventListener('keyup', displayName);
}

window.onload = init;