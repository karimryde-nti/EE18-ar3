// Hitta tabellen
const eTable = document.querySelector("table");
const eKnapp = document.querySelector("button");

// Min personliga access-token
mapboxgl.accessToken = "pk.eyJ1Ijoia2FyeWUiLCJhIjoiY2pwOXRtbWc1MGdmNjNwc2JmdGxzeDR5byJ9.whp8f2Ttws57ctAf_stuag";

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

    // Infogas första cellen
    // .. och skriver in latitude-texten
    newRow.insertCell().innerText = e.lngLat.lng;

    // Infogas andra cellen
    // .. och skriver in longituden
    newRow.insertCell().innerText = e.lngLat.lat;

    // Infogas tredje cellen
    // .. gör den redigerbar
    // .. skiver in en exempeltext
    var lastCell = newRow.insertCell();
    lastCell.contentEditable = "true";
    lastCell.innerText = "...";
});

// Klick på knappen läser in alla koordinater från tabellen
eKnapp.addEventListener("click", function () {
    // Skriv ut innehållet av tabellen i loggen
    // 1. Hitta första cellen
    const eCell = document.querySelector("td");
    // 2. Läs av innehållet
    console.log(eCell.textContent);

    // Hitta ALLA celler
    const eCeller = document.querySelectorAll("td");
    // Loopa igenom alla celler
    eCeller.forEach(cell => {
        console.log(cell.innerText);

        // Låtsas att vi har ett formulär
        var formData = new FormData();
        formData.append("texten", "Latitude->....");

        // Skicka till Backend
        fetch("spara.php", {
            method: "post",
            body: formData
        })                  // Skickar!
        .then(response => response.text())  // Tar emot svar
    });
})