<?php

/**
 * En enkel blogg där inlägg lagras i en textfil.
 * 
 * PHP version 7
 * @category   Webbapp
 * @author     Karim Ryde <karye.webb@gmail.com>
 * @license    PHP CC
 */
?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Min enkla blogg</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.3.1/flatly/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="kontainer">
        <header>
            <h1>Bloggen</h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a class="nav-link" href="blogg.php">Alla inlägg</a></li>
                    <li class="nav-item"><a class="active nav-link" href="spara.php">Skriva inlägg</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <form action="#" method="post">
                <textarea class="form-control" name="inlagg" id="inlagg" cols="30" rows="10"></textarea>
                <button class="btn btn-primary">Spara inlägg</button>
            </form>
            <?php
            /*             // Ta emot data från formuläret
            if (isset($_POST["inlagg"])) {
        
                // Skapa en intern variabel med datat
                $texten = $_POST["inlagg"]; */

            // Läs in från formuläret och rensa från hot
            $texten = filter_input(INPUT_POST, "inlagg", FILTER_SANITIZE_STRING);

            // Om vi får data
            if ($texten) {

                // Förberedd texten för HTML-utskrift
                $textenMedBr = str_replace("\n", "<br>", $texten);

                // Klockslag och dagens datum
                setlocale(LC_ALL, "sv_SE.utf8");
                $datumstämpel = strftime("%A %e %B kl %H:%M ");

                // Vad heter textfilen?
                $filnamn = "blogg.txt";

                // Är filen skrivbar?
                if (is_writable($filenamn)) {

                    // Steg 1: får vi öppna filen?
                    if (!$handle = fopen($filenamn, 'a')) {
                        echo "<p class=\"alert alert-warning\">Filen gick att öppna. Avbryter...</p>";
                        exit;
                    }

                    // Steg 2: går det bra att skriva i filen?
                    if (fwrite($handtag, "<p>$datumstämpel<br>$textenMedBr</p>\n") === FALSE) {
                        echo "<p class=\"alert alert-warning\">Kan inte skriva i filen. Avbryter...</p>";
                        exit;
                    }

                    // Steg 3: Stäng ned anslutningen
                    fclose($handtag);

                    // Skriv ut en bekräftelse
                    echo "<p class=\"alert alert-success\">Inlägget har sparats!</p>";
                } else {
                    echo "<p class=\"alert alert-warning\">Filen är inte skrivbar.</p>";
                }
            }
            ?>
        </main>
        <footer>
            2020
        </footer>
    </div>
</body>
</html>