// Business Logic for Places ---------
function Places() {
  this.destinations = {};
  this.currentId = 0;
}

//User Logic

function showMiami() {
  document.getElementById("contact-details").removeAttribute("class");
  document.getElementById("location").innerText = miami.location
  document.getElementById("season").innerText = miami.season
  document.getElementById("landmarks").innerText = miami.landmarks
}
function showTokyo() {
  document.getElementById("contact-details").removeAttribute("class");
  document.getElementById("location").innerText = tokyo.location
  document.getElementById("season").innerText = tokyo.season
  document.getElementById("landmarks").innerText = tokyo.landmarks
}
function showCleveland() {
  document.getElementById("contact-details").removeAttribute("class");
  document.getElementById("location").innerText = cleveland.location
  document.getElementById("season").innerText = cleveland.season
  document.getElementById("landmarks").innerText = cleveland.landmarks
}

//Business Logic for ID

Places.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

Places.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Places.prototype.findDestination = function(id) {
  if (this.destinations[id] !== undefined) {
    return this.destinations[id];
  }
  return false;
};

Places.prototype.deleteDestination = function(id) {
  if (this.destinations[id] === undefined) {
    return false;
  }
  delete this.destinations[id];
  return true;
};

// Business Logic for Destinations ---------
function Destination(location, season, landmarks) {
  this.location = location;
  this.season = season;
  this.landmarks = landmarks;
}

let places = new Places();
let miami = new Destination("Miami", "Spring", "The Beach")
let tokyo = new Destination("Tokyo", "Spring", "Skytree")
let cleveland = new Destination("Cleveland", "Summer", "Rock and Roll Hall of Fame")
places.addDestination(tokyo);
places.addDestination(cleveland);
places.addDestination(miami);