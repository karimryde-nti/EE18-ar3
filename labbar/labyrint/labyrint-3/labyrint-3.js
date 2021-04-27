/*****************************************/
/*             Inställningar             */
/*****************************************/
// Hitta element på sidan
const canvas = document.querySelector("canvas");
const ePoints = document.querySelector("p");

// Ställ in storlek på canvas
canvas.width = 800;
canvas.height = 600;

// Starta canvas rit-api
var ctx = canvas.getContext("2d");

/*****************************************/
/*          Globala variabler            */
/*****************************************/
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

/*****************************************/
/*          Objekten som syns            */
/*****************************************/
// Spelaren
var figur = {
    rad: 0,
    kolumn: 0,
    rotation: 0,
    poäng: 0,
    bild: new Image()
}
figur.bild.src = "../bilder/nyckelpiga.png";

// Monstret
var monster = {
    rad: 0,
    kolumn: 0,
    rotation: 0,
    poäng: 0,
    bild: new Image()
}
monster.bild.src = "../bilder/monster.png";

// Mynt objekten
var mynt1 = {
    rad: 0,
    kolumn: 0,
    bild: new Image()
}
mynt1.bild.src = "../bilder/coin.png";

var mynt2 = {
    rad: 0,
    kolumn: 0,
    bild: new Image()
}
mynt2.bild.src = "../bilder/coin.png";

/*****************************************/
/*  Kod som körd innan loopen startar    */
/*****************************************/
spawna(monster);
spawna(mynt1);
spawna(mynt2);

/*****************************************/
/*          Animationsloopen             */
/*****************************************/
function loopen() {
    ctx.clearRect(0, 0, 800, 600);

    ritaKartan();
    ritaFigur();
    ritaMonster();

    ritaMynt(mynt1);
    ritaMynt(mynt2);

    plockaPoäng(mynt1);
    plockaPoäng(mynt2);

    requestAnimationFrame(loopen);
}
loopen();

/*****************************************/
/*              Funktioner               */
/*****************************************/
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

// Rita ut monstret
function ritaMonster() {
    ctx.save();
    ctx.translate(monster.kolumn * 50 + 25, monster.rad * 50 + 25);
    ctx.rotate(monster.rotation / 180 * Math.PI);
    ctx.drawImage(monster.bild, -25, -25, 50, 50);
    ctx.restore();
}

// Rita ut ett mynt
function ritaMynt(mynt) {
    ctx.drawImage(mynt.bild, mynt.kolumn * 50, mynt.rad * 50, 50, 50);
}

// Spawna ett objekt
function spawna(objekt) {
    // Oändlig loop
    while (true) {
        objekt.rad = Math.floor(Math.random() * 12); // 0, 1, 2, 3 .. 11
        objekt.kolumn = Math.floor(Math.random() * 16); // 0, 1, 2 .. 15

        // Avbryt när objektet hamnar på 0
        if (karta[objekt.rad][objekt.kolumn] == 0) {
            break;
        }
    }
}

// Plocka myntet, få poäng
function plockaPoäng(mynt) {
    // Är figuren är i samma ruta som myntet?
    if (figur.rad == mynt.rad && figur.kolumn == mynt.kolumn) {
        // Öka poäng
        figur.poäng++;
        ePoints.textContent = figur.poäng;

        // Spawna om myntet
        spawna(mynt);
    }
}

/*****************************************/
/*             Interaktion               */
/*****************************************/
// Lyssna på piltangenter
window.addEventListener("keydown", function(e) {
    switch (e.code) {
        case "ArrowDown": // Pil nedåt
            // Är det 0 (gång) i rutan nedanför?
            if (karta[figur.rad + 1][figur.kolumn] == 0) {
                // Isåfall flytta dit
                figur.rad++;
            }
            figur.rotation = 180;
            break;
        case "ArrowUp": // Pil uppåt
            // Är det 0 i rutan ovanför?
            if (karta[figur.rad - 1][figur.kolumn] == 0) {
                // Isåfall flytta dit
                figur.rad--;
            }
            figur.rotation = 0;
            break;
        case "ArrowLeft": // Pil vänster
            if (karta[figur.rad][figur.kolumn - 1] == 0) {
                figur.kolumn--;
            }
            figur.rotation = 270;
            break;
        case "ArrowRight": // Pil höger
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