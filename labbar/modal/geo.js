// Element vi använder
const eGeoModal = document.querySelector("#geoModal");

// Jacka in Bootstraps-modal-bibliotek
var myModal = new bootstrap.Modal(eGeoModal, {
    keyboard: false
});

// Lyssna på när eGeoModal öppnas
// och byta ut texten
eGeoModal.addEventListener("show.bs.modal", function() {
    console.log("Yeay! Modal visas nu!");

    // Välj innehållet
    const eModalBody = eGeoModal.querySelector(".modal-body");

    // Ändra innehållet
    eModalBody.innerHTML = 
    '<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Användarnamn">' +
    '<input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Lösenord">';
});