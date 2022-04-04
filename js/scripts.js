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

// UI Logic

let placesVisited = new PlacesVisited();

function displayPlaceDetails(placesVisitedToDisplay) {
  let placeList = $("ul#places");
  let htmlForPlaceInfo = "";
  Object.keys(placesVisitedToDisplay.places).forEach(function (key) {
    const place = placesVisitedToDisplay.findPlace(key);
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.name + "</li>";
  });
  placeList.html(htmlForPlaceInfo);
}

function showPlace(placeId) {
  const place = placesVisited.findPlace(placeId);
  $("#show-places").show();
  $(".city").html(place.name);
  $(".country").html(place.location);
  $(".date").html(place.timeOfYear);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append(
    "<button class='deleteButton' id=" + place.id + ">Delete</button>"
  );
}

function attachPlaceListeners() {
  $("ul#places").on("click", "li", function () {
    showPlace(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function () {
    placesVisited.deletePlace(this.id);
    $("#show-places").hide();
    displayPlaceDetails(placesVisited);
  });
}

$(document).ready(function () {
  attachPlaceListeners();
  $("form#new-place").submit(function (event) {
    event.preventDefault();
    const inputtedCity = $("input#new-city").val();
    const inputtedCountry = $("input#new-country").val();
    const inputtedDate = $("input#new-date").val();
    let newPlace = new Place(inputtedCity, inputtedCountry, inputtedDate);
    placesVisited.addPlace(newPlace);
    displayPlaceDetails(placesVisited);
  });
});
