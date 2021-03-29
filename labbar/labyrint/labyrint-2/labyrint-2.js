// Element vi använder
const canvas = document.querySelector("canvas");
const ePoints = document.querySelector("p");

// Ställ in storlek på canvas
canvas.width = 800;
canvas.height = 600;

// Slå på rit-api
var ctx = canvas.getContext("2d");

// Skapa labyrinten
var karta = [
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // rad 0
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // rad 1
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1], // rad 2
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1], // rad 3
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1], // ...
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Objektet figur
var figur = {
    rad: 0,
    kolumn: 0,
    rotation: 0,
    poäng: 0,
    bild: new Image()
}
figur.bild.src = "../nyckelpiga.png";

// Objektet mynt
var mynt = {
    rad: 0,
    kolumn: 0,
    bild: new Image()
}
mynt.bild.src = "./coin.png";

// Rita kartan
function ritaKartan() {
    // Loopa igenom raderna
    for (var rad = 0; rad < 12; rad++) {

        // Loopa igenom kolumnerna
        for (var kolumn = 0; kolumn < 16; kolumn++) {

            // Om "1" rita ut en kloss (vägg)
            if (karta[rad][kolumn] == 1) {
                ctx.fillRect(kolumn * 50, rad * 50, 50, 50);
            }
        }
    }
}

// Rita ut figuren
function ritaFigur() {
    ctx.save();
    ctx.translate(figur.kolumn * 50 + 25, figur.rad * 50 + 25);
    ctx.rotate(figur.rotation / 180 * Math.PI);
    ctx.drawImage(figur.bild, -25, -25, 50, 50);
    ctx.restore();
}

// Rita ut mynt
function ritaMynt() {
    ctx.drawImage(mynt.bild, mynt.kolumn * 50, mynt.rad * 50, 50, 50);
}

// Spawna ett mynt
function spawnaMynt() {
    // Oändlig loop
    while (true) {
        mynt.rad = Math.floor(Math.random() * 12); // 0, 1, 2, 3 .. 11
        mynt.kolumn = Math.floor(Math.random() * 16); // 0, 1, 2 .. 15

        // Avbryt när myntet hamnar på 0
        if (karta[mynt.rad][mynt.kolumn] == 0) {
            break;
        }
    }
}

// Plocka myntet, få poäng
function plockaPoäng() {
    // Är figuren är i samma ruta som myntet?
    if (figur.rad == mynt.rad && figur.kolumn == mynt.kolumn) {
        // Öka poäng
        figur.poäng++;
        ePoints.textContent = figur.poäng;

        // Spawna om myntet
        spawnaMynt();
    }
}

spawnaMynt();

// Animationsloopen
function loopen() {
    // Sudda ut canvas
    ctx.clearRect(0, 0, 800, 600);

    // Rita ut kartan
    ritaKartan();

    // Rita ut figuren
    ritaFigur();

    // Rita ut myntet
    ritaMynt();

    // Krocka med myntet och plocka poäng
    plockaPoäng();

    requestAnimationFrame(loopen);
}

// Starta loopen
loopen()

// Lyssna på piltangenter
window.addEventListener("keypress", function(e) {
    switch (e.code) {
        case "Numpad2": // Pil nedåt
            // Är det 0 (gång) i rutan nedanför?
            if (karta[figur.rad + 1][figur.kolumn] == 0) {
                // Isåfall flytta dit
                figur.rad++;
            }
            figur.rotation = 180;
            break;
        case "Numpad8": // Pil uppåt
            // Är det 0 i rutan ovanför?
            if (karta[figur.rad - 1][figur.kolumn] == 0) {
                // Isåfall flytta dit
                figur.rad--;
            }
            figur.rotation = 0;
            break;
        case "Numpad4": // Pil vänster
            if (karta[figur.rad][figur.kolumn - 1] == 0) {
                figur.kolumn--;
            }
            figur.rotation = 270;
            break;
        case "Numpad6": // Pil höger
            if (karta[figur.rad][figur.kolumn + 1] == 0) {
                figur.kolumn++;
            }
            figur.rotation = 90;
            break;

        default:
            break;
    }
    //console.log("Kolumn: " + figur.kolumn + ", rad: " + figur.rad);
})