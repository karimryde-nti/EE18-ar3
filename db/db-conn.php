<?php
/*
* PHP version 7
* @category   Lånekalkylator
* @author     Karim Ryde <karye.webb@gmail.com>
* @license    PHP CC
*/

$user = "labbar";
$db = "labbar_db";
$host = "localhost";
$pass = "b7chjynqPLStEzOT";

// Logga in på mysql-server och välj databas
$conn = new mysqli($host, $user, $pass, $db);

// Gick det att ansluta?
if ($conn->connect_error) {
    die("Kunde inte ansluta: " . $conn->connect_error);
} else {
    echo "<p>Hurrah! Gick bra att ansluta!</p>";
}

/* // Ställ en sql-fråga
$sql = "SELECT * FROM bilar";
$result = $conn->query($sql);

// Gick sql-satsen att köra?
if (!$result) {
    die("Något blev fel med sql-satsen");
} else {
    echo "<p>Lista på alla bilar kunde hämtas</p>";
}

// Loopa igenom listan på bilar
while ($rad = $result->fetch_assoc()) {
    echo "<p>$rad[marke]</p>";
}

// Stäng ned anslutningen
$conn->close(); */