//build a places object
// build each place object inside of it

// Business Logic for Places ---------
function places() {
  this.destinations = {};
  this.currentId = 0;
}
function showMiami() {
  console.log("show miami ran");
}
function showTokyo() {
  console.log("show tokyo ran")
}
function showCleveland() {
  console.log("show cleveland ran")
}

let miami = new Destination("Miami", "Spring", "The Beach")
let tokyo = new Destination("Tokyo", "Spring", "Skytree")
let cleveland = new Destination("Cleveland", "Summer", "Rock and Roll Hall of Fame")
places.addDestination(miami);
places.addDestination(tokyo);
places.addDestination(cleveland);

places.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

places.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

places.prototype.findDestination = function(id) {
  if (this.destinations[id] !== undefined) {
    return this.destinations[id];
  }
  return false;
};

places.prototype.deleteDestination = function(id) {
  if (this.destinations[id] === undefined) {
    return false;
  }
  delete this.destinations[id];
  return true;
};

// Business Logic for Contacts ---------
function Destination(location, season, landmarks) {
  this.location = location;
  this.season = season;
  this.landmarks = landmarks;
}

/*
Destination.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}; */