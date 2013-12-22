//textoutput.js

function displayClasses()
{
	display = document.getElementById("programTxtBox");
	display.value += "Choose your class";
	
	for(var i in allCharacters)
	{
		display.value += "\n";
		display.value += allCharacters[i].theName;
	}
}

function displayStart()
{
	display.value = "";
	currentLocation = allFirstWorldLocations[0];
	display.value += currentLocation.getDescription();
	display.value += "\n\n";
	//enableAnswerInput();
}