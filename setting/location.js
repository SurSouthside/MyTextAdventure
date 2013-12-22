//locationManager.js

var allFirstWorldLocations = [];

function initFirstWorld()
{
	var Location = function(id, x, y, description, actions, n, s, e, w){
	this.theID = id;
	this.theXCoor = x;
	this.theYCoor = y;
	this.theDescription = description;
	this.theActions = actions;
	this.canMoveNorth = n;
	this.canMoveSouth = s;
	this.canMoveEast = e;
	this.canMoveWest = w
};

Location.prototype.getID = function() {
	return this.theID;
}

Location.prototype.getXCoor = function() {
	return this.theXCoor;
}

Location.prototype.getYCoor = function() {
	return this.theYCoor;
}

Location.prototype.getDescription = function() {
	return this.theDescription;
}

Location.prototype.getActions= function() {
	return this.theActions;
}

var crossroads = new Location(0, 0, 0, "You stand at a crossroads", [],
true, true, true, true);

allFirstWorldLocations.push(crossroads);

var crossroadNorth = new Location(1, 0, 1, "The road continues north", [],
true, true, true, true);

allFirstWorldLocations.push(crossroadNorth);

var crossroadSouth = new Location(2, 0, -1, "The road continues south", [],
true, true, true, true);

allFirstWorldLocations.push(crossroadSouth);

var crossroadEast = new Location(3, 1, 0, "The road continues east", [],
true, true, true, true);

allFirstWorldLocations.push(crossroadEast);

var crossroadWest = new Location(4, -1, 0, "The road continues west", [],
true, true, true, true);

allFirstWorldLocations.push(crossroadWest);
}

function loadLocation()
{
	
}