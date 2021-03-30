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
/*          Globala variabler            */
/*****************************************/
var karta = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

/*****************************************/
/*          Objekten som syns            */
/*****************************************/
var piga = {

}

var monster = {

}

/*****************************************/
/*          Animationsloopen             */
/*****************************************/
function loopen() {
    ctx.clearRect(0, 0, 800, 600);

    ritaPiga();
    
    requestAnimationFrame(loopen);
}
loopen();

/*****************************************/
/*              Funktioner               */
/*****************************************/
// Rita ut nyckelpigan
function ritaPiga() {
    ctx.drawImage(piga.bild, piga.x, piga.y, 50, 50);
}


/*****************************************/
/*             Interaktion               */
/*****************************************/
window.addEventListener("keypress", function(e) {       // e -> vilken tangent som trycktes
    switch (e.code) {
        case "NumPad2":
            piga.y++;
            break;
        case "NumPad8":
            
            break;
        case "NumPad4":
            
            break;
        case "NumPad6":
            
            break;
    
        default:
            break;
    }
})