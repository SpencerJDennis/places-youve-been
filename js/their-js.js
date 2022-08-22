// Business Logic for Place Tracker
function PlaceTracker() {
  this.Places = {};
  this.currentID = 0;
}

PlaceTracker.prototype.addPlace = function(place) {
place.id = this.assignID();
this.Places[place.id] = place;
};

PlaceTracker.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
// Business Logic for Places
function Place(location, landmarks, time) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
};

Place.prototype.PlaceEntry = function() {
  return "I went to" + this.location + "and saw" + this.landmarks + "during" + this.time + ".";
};

//let placetracker = new PlaceTracker();
let destination = new Place("brazil", "bigjesus", "september");
PlaceTracker.addPlace(destination);
PlaceTracker.Place;