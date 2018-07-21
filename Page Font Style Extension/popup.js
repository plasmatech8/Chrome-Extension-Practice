/*
	Sends message "changeColor" to content.js
	
	
*/

function init() {

	var fontColorField = document.getElementById('fontColor');
	var changeBtn = document.getElementById('buttonChange');
	
	var fontColor = fontColorField.value;
	
	// Color Input Field
	var colorInputFunc = function(){
		fontColor = fontColorField.value;
	}
	fontColorField.addEventListener("change", colorInputFunc);
	fontColorField.addEventListener("paste", colorInputFunc);
	fontColorField.addEventListener("keyup", colorInputFunc);
	
	// Submit Button
	var colorSubmitFunc = function(){
		
		// Send change-color data to content.js
		chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
			
			chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: fontColor})
		});
	}
	changeBtn.addEventListener("click", colorSubmitFunc);
}

window.onload = init;