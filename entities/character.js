//characters.js

var allCharacters = [];

function initCharacters()
{



var Character = function(name, hp, mp, atk, def, spd) {
	this.theName = name;
	this.theHP = hp;
	this.theMP = mp;
	this.theAtk = atk;
	this.theDef = def;
	this.theSpd = spd;
};

//Standard getters
Character.prototype.getName = function() {
	return this.theName;
};

Character.prototype.getHP = function() {
	return this.theHP;
};

Character.prototype.getMP = function() {
	return this.theMP;
};

Character.prototype.getAtk = function() {
	return this.theAtk;
};

Character.prototype.getDef = function() {
	return this.theDef;
};

Character.prototype.getSpd = function() {
	return this.theSpd;
};

//Standard setters
Character.prototype.setName = function(name) {
	this.theName = name;
};

Character.prototype.setHP = function(hp) {
	this.theHP = hp;
};

Character.prototype.setMP = function(mp) {
	this.theMP = mp;
};

Character.prototype.setAtk = function(atk) {
	this.theAtk = atk;
};

Character.prototype.setDef = function(def) {
	this.theDef = def;
};

Character.prototype.setSpd = function(spd) {
	this.theSpd = spd;
};

var samurai = new Character("samurai", 
	Math.floor(35 +(Math.random()* 15) + 15), 
	Math.floor(3 +(Math.random()* 2) + 3), 
	Math.floor(11 +(Math.random()* 4) + 4), 
	Math.floor(12 +(Math.random()* 6) + 9), 
	Math.floor(7 +(Math.random()* 6) + 7));
 allCharacters.push(samurai);	

var ninja = new Character("ninja", 
	Math.floor(25 +(Math.random()* 12) + 11), 
	Math.floor(6 +(Math.random()* 8) + 4), 
	Math.floor(7 +(Math.random()* 5) + 3), 
	Math.floor(5 +(Math.random()* 2) + 5), 
	Math.floor(10 +(Math.random()* 8) + 5));
 allCharacters.push(ninja);

var miko = new Character("miko", 
	Math.floor(18 +(Math.random()* 17) + 12), 
	Math.floor(15 +(Math.random()* 10) + 5), 
	Math.floor(4 +(Math.random()* 5) + 3), 
	Math.floor(6 +(Math.random()* 2) + 8), 
	Math.floor(5 +(Math.random()* 3) + 2));
allCharacters.push(miko);

var kunoichi = new Character("kunoichi", 
	Math.floor(22 +(Math.random()* 11) + 12), 
	Math.floor(12 +(Math.random()* 8) + 4), 
	Math.floor(5 +(Math.random()* 3) + 3), 
	Math.floor(2 +(Math.random()* 2) + 6), 
	Math.floor(10 +(Math.random()* 9) + 5));
allCharacters.push(kunoichi);

}

function selectClass(theClass)
{
	parseClass(theClass); 
}

//TODO: Optimize this
function loadCharacter(theClass)
{
	for(var k = 0; k < allCharacters.length; k++)
		{
			if(theClass == allCharacters[k].theName)
			{
				playerCharacter = allCharacters[k];
				break;
			}
		}
}