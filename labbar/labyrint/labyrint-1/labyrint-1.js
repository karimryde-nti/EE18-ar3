// Element vi använder
const canvas = document.querySelector("canvas");

// Ställ in storlek på canvas
canvas.width = 800;
canvas.height = 600;

// Slå på rit-api
var ctx = canvas.getContext("2d");

// Skapa kartan
var karta = [
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Figur objektet
var figur = {
    x: 25,     // figur.x = figurX
    y: 25,     // figur.y = figurY
    rotation: 0,
    bild: new Image()
}
figur.bild.src = "../bilder/nyckelpiga.png";

// Rita kartan
function ritaKartan() {
    // Loopa igenom raderna
    for (var j = 0; j < 12; j++) {
        
        // Loopa igenom kolumnerna
        for (var i = 0; i < 16; i++) {

            // Om "1" rita ut en kloss
            var x = i * 50;
            var y = j * 50;
            if (karta[j][i] == 1) {
                ctx.fillRect(x, y, 50, 50);
            }
        }
    }
}

// Rita ut figuren
function ritaFigur() {
    ctx.save();
    ctx.translate(figur.x, figur.y);
    ctx.rotate(figur.rotation / 180 * Math.PI);
    ctx.drawImage(figur.bild, -25, -25, 50, 50);
    ctx.restore();
}

// Animationsloopen
function loopen() {
    // Sudda ut canvas
    ctx.clearRect(0, 0, 800, 600);

    // Rita kartan
    ritaKartan();

    // Rita figuren
    ritaFigur();

    requestAnimationFrame(loopen);
}

// Starta loopen
loopen()

// Lyssna på piltangenter
window.addEventListener("keydown", function (e) {
    switch (e.code) {
        case "ArrowDown": // Pil nedåt
            figur.y += 50;
            figur.rotation = 180;
            break;
        case "ArrowUp": // Pil uppåt
            figur.y -= 50;
            figur.rotation = 0;
            break;
        case "ArrowLeft": // Pil vänster
            figur.x -= 50;
            figur.rotation = 270;
            break;
        case "ArrowRight": // Pil höger
            figur.x += 50;
            figur.rotation = 90;
            break;

        default:
            break;
    }
    console.log("Kolumn: " + (figur.x - 25) / 50 + ", rad: " + (figur.y - 25) / 50);
})