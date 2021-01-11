<?php
// Slå på felmeddelanden
error_reporting(E_ALL);

// Inloggningsuppgifter till vårt databas
$host = "localhost";
$db = "register";
$user = "register";
$pass = "k7KEirreXvwgSmGe";

// Steg 1 - skapa en anslutning
$conn = new mysqli($host, $user, $pass, $db);

// Gick det bra att ansluta?
if ($conn->connect_error) {
    die("Kunde inte ansluta: " . $conn->error);
} else {
    //echo "<p>Gick bra ansluta till vårt databas!</p>";
}