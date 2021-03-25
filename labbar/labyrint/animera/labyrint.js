// Element vi använder
const canvas = document.querySelector("canvas");

// Ställ in storlek på canvas
canvas.width = 600;
canvas.height = 500;

// Slå på rit-api
var ctx = canvas.getContext("2d");

// Figur objektet
var figur = {
    x: 100,     // figur.x = figurX
    y: 100,     // figur.y = figurY
    rotation: 0,
    bild: new Image()
}
figur.bild.src = "../nyckelpiga.png";

// Animationsloopen
function loopen() {
    // Sudda ut canvas
    ctx.clearRect(0, 0, 600, 500);
    
    // Rita figuren
    ctx.drawImage(figur.bild, figur.x, figur.y, 50, 50);

    requestAnimationFrame(loopen);
}

// Starta loopen
loopen()

// Lyssna på piltangenter
window.addEventListener("keypress", function (e) {
    switch (e.code) {
        case "Numpad2": // Pil nedåt
            figur.y += 50;
            break;
        case "Numpad8": // Pil uppåt
            figur.y -= 50;
            break;
        case "Numpad4": // Pil vänster
            figur.x -= 50;
            break;
        case "Numpad6": // Pil höger
            figur.x += 50;
            break;
    
        default:
            break;
    }
    console.log("Kolumn: " + figur.x/50 + ", rad: " + figur.y/50);
})