// Business Logic for Places Visted

function PlacesVisited() {
  this.places = {};
  this.currentId = 0;
}

PlacesVisited.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

PlacesVisited.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

PlacesVisited.prototype.findPlace = function (id) {
  if (this.places[id] != undefined) {
    return this.places[id];
  }
  return false;
};

PlacesVisited.prototype.deletePlace = function (id) {
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true;
};

// Business Logic for Place

function Place(name, location, timeOfYear) {
  this.name = name;
  this.location = location;
  this.timeOfYear = timeOfYear;
}

let placesvisited = new PlacesVisited();
let place = new Place("Rome", "Italy", "Summer");
placesvisited.addPlace(place);
