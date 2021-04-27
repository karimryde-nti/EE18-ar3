/*****************************************/
/*             Inställningar             */
/*****************************************/
// Hitta element på sidan
const canvas = document.querySelector("canvas");
const ePoints = document.querySelector("p");

// Ställ in storlek på canvas
canvas.width = 800;
canvas.height = 600;

var ctx = canvas.getContext("2d");

/*****************************************/
/*          Globala variabler            */
/*****************************************/
// Skapa kartan
var lager1 = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 117, 118, 119, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 187, 1, 1, 133, 134, 135, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 187, 1, 1, 74, 134, 135, 1, 7, 8, 9, 1, 1, 1, 1,
    1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 187, 1, 133, 134, 70, 1, 23, 24, 25, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 74, 134, 135, 1, 39, 40, 41, 1, 1, 1, 1,
    1, 1, 1, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 3, 133, 134, 135, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 23, 24, 25, 1, 1, 1, 1, 1, 1, 117, 118, 169, 134, 135, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 39, 40, 41, 1, 1, 1, 1, 1, 1, 133, 134, 134, 134, 135, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 149, 150, 150, 150, 151, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 24, 25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 39, 40, 41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];
var lager2 = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 117, 118, 119, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 187, 1, 1, 133, 134, 135, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 187, 1, 1, 74, 134, 135, 1, 7, 8, 9, 1, 1, 1, 1,
    1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 187, 1, 133, 134, 70, 1, 23, 24, 25, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 74, 134, 135, 1, 39, 40, 41, 1, 1, 1, 1,
    1, 1, 1, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 3, 133, 134, 135, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 23, 24, 25, 1, 1, 1, 1, 1, 1, 117, 118, 169, 134, 135, 1, 1, 1, 97, 98, 1, 1, 1,
    1, 1, 1, 39, 40, 41, 1, 1, 1, 1, 1, 1, 133, 134, 134, 134, 135, 1, 1, 1, 113, 114, 1, 1, 1,
    1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 149, 150, 150, 150, 151, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 97, 98, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 97, 98, 1, 1,
    1, 113, 114, 1, 1, 97, 98, 1, 97, 98, 1, 1, 97, 98, 1, 1, 1, 1, 97, 98, 1, 113, 114, 1, 1,
    97, 98, 97, 98, 1, 113, 114, 1, 113, 114, 1, 1, 113, 114, 1, 1, 1, 1, 113, 114, 1, 1, 1, 1, 1,
    113, 114, 113, 114, 97, 98, 1, 97, 98, 1, 1, 1, 1, 1, 3, 1, 97, 98, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 113, 114, 1, 113, 114, 1, 7, 8, 9, 1, 1, 1, 113, 114, 1, 1, 97, 98, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 24, 25, 1, 1, 1, 1, 1, 1, 1, 113, 114, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 39, 40, 41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];

var kartbild = new Image();
kartbild.src = "./tiled/forest_tiles.png";

// Figuren
var figur = {
    bild: new Image(),
    x: 100,
    y: 100,
    går: false,
    rad: 0,
    i: 0
}
figur.bild.src = "./bilder/pokemon-red-sprite.png";

/*****************************************/
/*          Animationsloopen             */
/*****************************************/
function loopen() {
    ctx.clearRect(0, 0, 800, 600);

    ritaLager1();
    ritaLager2();

    ritaFigur();

    requestAnimationFrame(loopen);
}
loopen();

/*****************************************/
/*              Funktioner               */
/*****************************************/
// Rita kartan
function ritaLager1() {
    // index i arrayen
    var index = 0;

    // Loopa igenom raderna på canvas
    for (var rad = 0; rad < 20; rad++) {

        // Loopa igenom kolumnerna på canvas
        for (var kolumn = 0; kolumn < 25; kolumn++) {

            // Plocka ut rätt ruta
            var x = Math.floor(lager1[index] % 16 - 1) * 32;
            var y = Math.floor(lager1[index] / 16) * 32;

            //console.log(rad, kolumn);
            ctx.drawImage(kartbild, x, y, 32, 32, kolumn * 32, rad * 32, 32, 32);

            // Hoppa till nästa ruta
            index++;
        }
    }
}

function ritaLager2() {
    // index i arrayen
    var index = 0;

    // Loopa igenom raderna på canvas
    for (var rad = 0; rad < 20; rad++) {

        // Loopa igenom kolumnerna på canvas
        for (var kolumn = 0; kolumn < 25; kolumn++) {

            // Plocka ut rätt ruta
            var x = Math.floor(lager2[index] % 16 - 1) * 32;
            var y = Math.floor(lager2[index] / 16) * 32;

            //console.log(rad, kolumn);
            ctx.drawImage(kartbild, x, y, 32, 32, kolumn * 32, rad * 32, 32, 32);

            // Hoppa till nästa ruta
            index++;
        }
    }
}

// Rit ut figuren
function ritaFigur() {
    // Plocka ut rätt ruta
    var x = Math.floor(figur.i) * 64;
    var y = figur.rad * 64;

    // Rita ut rutan
    ctx.drawImage(figur.bild, x, y, 64, 64, figur.x, figur.y, 64, 64);

    // Byta till nästa ruta
    if (figur.går) {
        figur.i += 0.2;
    }

    // Börja om från början
    if (figur.i > 4) {
        figur.i = 0;
    }
}

/*****************************************/
/*          Interaktivitet               */
/*****************************************/
window.addEventListener("keydown", function(e) {
    figur.går = true;
    switch (e.code) {
        case "ArrowDown":
            figur.y += 5;
            figur.rad = 0;
            break;
        case "ArrowUp":
            figur.y -= 5;
            figur.rad = 3;
            break;
        case "ArrowLeft":
            figur.x -= 5;
            figur.rad = 1;
            break;
        case "ArrowRight":
            figur.x += 5;
            figur.rad = 2;
            break;
    }
})
window.addEventListener("keyup", function() {
    figur.går = false;
})