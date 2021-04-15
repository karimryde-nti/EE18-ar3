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

// Objektet plane 
var plane = {
    bild: new Image(),
    rutor: [0, 1, 2],
    i: 0,
    kör: false,
    x: 100, 
    y: 100, 
    rotation: 0
}
plane.bild.src = "./bilder/1945.png";

// För att rita ut plane-figuren
function ritaplane() {
    // Plocka ut rätt ruta
    var x = Math.floor(plane.i) * 66 + 4;
    var y = 400;

    // Spara koordinatsystemet
    ctx.save();
    // Flytta koordinatsystemet
    ctx.translate(plane.x, plane.y);
    // Vrida koordinatsystemet
    ctx.rotate(plane.rotation / 180 * Math.PI);
    ctx.drawImage(plane.bild, x, y, 64, 64, -32, -32, 64, 64);
    // Återställ koordinatsystemet
    ctx.restore();

    // Stega fram 5x långsammare
    if (plane.kör) {
        plane.i += 0.2;
    }

    // Börja om från början
    if (plane.i > plane.rutor.length) {
        plane.i = 0;
    }
}

/*****************************************/
/*          Animationsloopen             */
/*****************************************/
function loopen() {
    ctx.clearRect(0, 0, 800, 600);

    ritaplane();

    requestAnimationFrame(loopen);
}
loopen();

/*****************************************/
/*          Interaktivitet               */
/*****************************************/
window.addEventListener("keydown", function (e) {
    plane.kör = true;
    switch (e.code) {
        case "ArrowDown":
            plane.y += 5;
            plane.rotation = 180;
            break;
        case "ArrowUp":
            plane.y -= 5;
            plane.rotation = 0;
            break;
        case "ArrowLeft":
            plane.x -= 5;
            plane.rotation = 270;
            break;
        case "ArrowRight":
            plane.x += 5;
            plane.rotation = 90;
            break;
    }
})
window.addEventListener("keyup", function () {
    plane.kör = false;
})