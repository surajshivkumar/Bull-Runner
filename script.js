function onLocationFound(e) {
  var radius = e.accuracy / 2;

  L.marker(e.latlng).addTo(map).bindPopup("You are here").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
  alert(e.message);
}
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  console.log("Latitude is " + latitude + "°");
  console.log("Longitude is " + longitude + "°");
  lat = latitude;
  long = longitude;
}
var lat, long;

navigator.geolocation.getCurrentPosition(success);

let map = L.map("map").setView([28.0640681, -82.4144367], 17);
L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.on("locationfound", onLocationFound);
map.on("locationerror", onLocationError);

map.locate({ setView: true, maxZoom: 16 });
