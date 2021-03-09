// Hitta tabellen
const eTable = document.querySelector('table');

// Min personliga access-token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyeWUiLCJhIjoiY2pwOXRtbWc1MGdmNjNwc2JmdGxzeDR5byJ9.whp8f2Ttws57ctAf_stuag';

// Skapa kartan
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/karye/ckm1xg4enamz217pt54o72zij',
    center: [18.071723, 59.338477], // Longitude, Latitude
    zoom: 11
});

// Lägga till markers när man klickar på kartan
map.on("click", function (e) {
    console.log("Du har klickat på kartan!", e.lngLat);

    // Infoga en marker
    var marker = new mapboxgl.Marker()
        .setLngLat(e.lngLat)
        .addTo(map);

    // Infoga rad i tabellen
    var newRow = eTable.insertRow();
    newRow.insertCell().innerText = e.lngLat.lng;
    newRow.insertCell().innerText = e.lngLat.lat;
    newRow.insertCell().innerText = "...";

    // @todo
    // Textcellen är redigerbar
});