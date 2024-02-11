// function onLocationFound(e) {
//   var radius = e.accuracy / 1.2;

//   // L.marker(e.latlng).addTo(map).bindPopup("You are here").openPopup();

//   L.circle(e.latlng, radius).addTo(map);
// }

// const marker = new maplibregl.Marker()
//   .setLngLat([-82.4195745, 28.0767053])
//   .addTo(map);

function onLocationError(e) {
  alert(e.message);
}
let lat, long;
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  lat = latitude;
  long = longitude;
  console.log(lat, long);
  const map = new maplibregl.Map({
    container: "map",
    style:
      "https://api.maptiler.com/maps/streets/style.json?key=XHYvWuwAyYhECnNLOF8Y",
    center: [long, lat],
    zoom: 15,
  });

  const route = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [28.064292, -82.413807],
        [28.066517, -82.413167],
        [28.067926, -82.411776],
        [28.06792, -82.410473],
        [28.0723, -82.40991],
        [28.075023, -82.409953],
        [28.077039, -82.409994],
        [28.080391, -82.412428],
        [28.078266, -82.414147],
        [28.076153, -82.414147],
        [28.072141, -82.414037],
        [28.067995, -82.413269],
        [28.059181698, -82.412936864],
        [28.05917754, -82.413493201],
        [28.065656, -82.411269],
        [28.065666, -82.409483],
        [28.065016, -82.408163],
        [28.060756017, -82.408817775],
        [28.058653, -82.408796],
        [28.0573, -82.409642],
        [28.057199, -82.411012],
        [28.058807, -82.408647],
        [28.061151, -82.408648],
        [28.064776, -82.408054],
        [28.065761, -82.409933],
        [28.065789917, -82.412017064],
      ],
    },
  };

  map.addSource("route", {
    type: "geojson",
    data: route,
  });

  map.addLayer({
    id: "route",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#888",
      "line-width": 6,
    },
  });

  new maplibregl.Marker().setLngLat([long, lat]).addTo(map);
}
navigator.geolocation.getCurrentPosition(success);
