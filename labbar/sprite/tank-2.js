/*****************************************/
/*             Inställningar             */
/*****************************************/
// Hitta element på sidan
const canvas = document.querySelector("canvas");

// Ställ in storlek på canvas
canvas.width = 800;
canvas.height = 600;

// Starta canvar rit-api
var ctx = canvas.getContext("2d");

/*****************************************/
/*          Innan loopen startar         */
/*****************************************/
/* // Ladda in grafiken
var tank = new Image();
tank.src = "./bilder/tank-sheet.png";

// Hur lång tid varje ruta får (1/60")
var tankRutor = [1, 2, 3, 4, 5, 6, 7, 8];
var i = 0;
var kör = false;
var tank.x = 100, tank.y = 100, rotation = 0; */

// Objektet tank 
var tank = {
    bild: new Image(),
    rutor: [1, 2, 3, 4, 5, 6, 7, 8],
    i: 0,
    kör: false,
    x: 100, 
    y: 100, 
    rotation: 0
}
tank.bild.src = "./bilder/tank-sheet.png";

var explosionRutor = [17, 18, 19];
var j = 0;

// För att rita ut tank-figuren
function ritaTank() {
    // Plocka ut rätt ruta
    var x = Math.floor(tank.rutor[Math.floor(tank.i)] % 8) * 32;
    var y = Math.floor(tank.rutor[Math.floor(tank.i)] / 8) * 32;

    // Spara koordinatsystemet
    ctx.save();
    // Flytta koordinatsystemet
    ctx.translate(tank.x, tank.y);
    // Vrida koordinatsystemet
    ctx.rotate(tank.rotation / 180 * Math.PI);
    ctx.drawImage(tank.bild, x, y, 32, 32, -16, -16, 32, 32);
    // Återställ koordinatsystemet
    ctx.restore();

    // Stega fram 5x långsammare
    if (tank.kör) {
        tank.i += 0.1;
    }

    // Börja om från början
    if (tank.i > tank.rutor.length) {
        tank.i = 0;
    }
}

function ritaExplosion() {
    // Plocka ut rätt ruta
    var x = Math.floor(explosionRutor[Math.floor(j)] % 8) * 32;
    var y = Math.floor(explosionRutor[Math.floor(j)] / 8) * 32;
    ctx.drawImage(tank.bild, x, y, 32, 32, 200, 100, 32, 32);

    // Hoppa till nästa
    j += 0.2;

    // Börja om från början
    if (j > explosionRutor.length) {
        j = 0;
    }
}

/*****************************************/
/*          Animationsloopen             */
/*****************************************/
function loopen() {
    ctx.clearRect(0, 0, 800, 600);

    ritaTank();
    ritaExplosion();

    requestAnimationFrame(loopen);
}
loopen();

/*****************************************/
/*          Interaktivitet               */
/*****************************************/
window.addEventListener("keydown", function (e) {
    tank.kör = true;
    switch (e.code) {
        case "ArrowDown":
            tank.y += 5;
            tank.rotation = 180;
            break;
        case "ArrowUp":
            tank.y -= 5;
            tank.rotation = 0;
            break;
        case "ArrowLeft":
            tank.x -= 5;
            tank.rotation = 270;
            break;
        case "ArrowRight":
            tank.x += 5;
            tank.rotation = 90;
            break;
    }
})
window.addEventListener("keyup", function () {
    tank.kör = false;
})