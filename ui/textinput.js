//textinput.js



function decideAction(btn)
{
	inputBox = document.getElementById("programInputBox");
	if(isClassSelection)
	{
		var theClass = inputBox.value;
		theClass = theClass.toLowerCase();
		selectClass(theClass);
		inputBox.value = "";
		isClassSelection = false;
		initStatsTable(); 
	}
	
}

/*
function enableAnswerInput()
{
	$("inputBox").removeAttr('readonly');
}
*/