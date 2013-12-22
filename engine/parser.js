//parser.js

var validSamurai = /samurai/;
var validNinja = /ninja/;
var validMiko = /miko/;
var validKunoichi = /kunoichi/;

function parseClass(theClass)
{
	if(validSamurai.test(theClass))
	{
		//Load character where name equals class
		loadCharacter(theClass);
	}
	else if(validNinja.test(theClass))
	{
		//Load character where name equals class
		loadCharacter(theClass);
	}
	else if(validMiko.test(theClass))
	{
		//Load character where name equals class
		loadCharacter(theClass);
	}
	else if(validKunoichi.test(theClass))
	{
		//Load character where name equals class
		loadCharacter(theClass);
	}
	
}