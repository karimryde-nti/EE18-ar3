<?php

/**
 * PHP version 7
 * @category   Inloggning
 * @author     Karim Ryde <karye.webb@gmail.com>
 * @license    PHP CC
 */
include "./resurser/conn.php";
session_start();
?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Utloggning</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kontainer">
        <header>
            <h1>Utloggning</h1>
        </header>
        <main>
            <?php
            // Finns sessionsvariabeln?
            if (isset($_SESSION["anamn"])) {
                echo "<p class=\"alert alert-success\">Du är inloggad!</p>";
            } else {
                echo "<p class=\"alert alert-warning\">Du är utloggad!</p>";
            }
            ?>
        </main>
    </div>
</body>
</html>