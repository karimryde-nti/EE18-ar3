// Det som händer när program startar
// Element vi skall använda
const rutaPris = document.querySelector(".pris");
const knappPlus = document.querySelector(".plus");
const knappMinus = document.querySelector(".minus");
const rutaAntal = document.querySelector(".antal");
const rutaSumma = document.querySelector(".summa");

// Tre globala variabler för att hålla koll pris, antal, summa
var pris = rutaPris.textContent;
var antal = 1;
var summa = pris * antal;
console.log(pris, antal, summa);

// Skriv ut i sidan
rutaAntal.value = antal;
rutaSumma.textContent = summa;

// Det som händer när man klickar på minus
knappMinus.addEventListener("click", function () {
    if (antal > 0) {
        antal--;
        console.log(antal);
        rutaAntal.value = antal;
        rutaSumma.textContent = pris * antal;
    }
})

// Det som händer när man klickar på plus
knappPlus.addEventListener("click", function () {
    antal++;
    console.log(antal);
    rutaAntal.value = antal;
    rutaSumma.textContent = pris * antal;
})

// Det som händer när man skriver i antal-rutan
rutaAntal.addEventListener("input", function () {
    antal = rutaAntal.value;
    rutaSumma.textContent = pris * antal;
})

