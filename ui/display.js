//display.js

function initUI()
{
	$('#programTxtBox').css({visibility: "visible"}); 
	$('#programInputBox').css({visibility: "visible"});
	$('#btnEnter').css({visibility: "visible"});
	$('#btnStart').css({visibility: "hidden"});
	displayClasses();
}

function initStatsTable()
{
	document.getElementById("currHP").innerHTML = playerCharacter.getHP();
	document.getElementById("currMP").innerHTML = playerCharacter.getMP();
	document.getElementById("currAtk").innerHTML = playerCharacter.getAtk();
	document.getElementById("currDef").innerHTML = playerCharacter.getDef();
	document.getElementById("currSpd").innerHTML = playerCharacter.getSpd();
	$('#statsTable').css({visibility: "visible"}); 
	startTheGame();
}

function startTheGame()
{
	displayStart();
}