```javascript
Describe PlacesVisited()

Description: "Create object that contains place objects";
Code: placesVisited;
Expected Output: PlacesVisited {places: {...}}



Describe Place(name, location, timeOfYear)

Description: "It will return the defined properties of the place";
Code: place;
Expected Output: Place {name: "Rome", location: "Italy", timeOfYear: "Summer"}

Description: "It will add the place to the PlacesVisited";
Code: PlacesVisited.place.Rome;
Expected Output: Place {name: "Rome", location: "Italy", timeOfYear: "Summer"}



Describe PlacesVisited()

Description: "It will add unique ID's to each place";
Code: place;
Expected Output: Place {name: "Rome", location: "Italy", timeOfYear: "Summer", id: 1}
```
