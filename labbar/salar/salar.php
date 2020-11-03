<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Skolans salar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kontainer">
        <h1>Skolans salar</h1>
        <?php
        // Textfilen som skall läsas in
        $tsvfil = "salar.tsv";
        
        // Är filens läsbar?
        if (is_readable($tsvfil)) {
            // Läs in filens alla rader
            $rader = file($tsvfil);
            
            // Loopa igenom alla rader
            foreach ($rader as $rad) {
                // Skippa första raden om dom 2 första tecknen är 'id'
                if (substr($rad, 0, 2) == "id") {
                    continue;
                }
            
                // Plocka ut det som vi behöver: nr/namn, bokbar
                $delar = explode($rad, "\t");
                
                // Dela upp raden i dess delar
                $salNrNamn = $delar[1];
                $bokbar = $delar[3];
        
                // Visa salar i en tabell med kolumnrubriker: nr/namn, bokbar
                ...
            }
        } else {
            echo "<p>Gick inte att läsa $tsvfil</p>";
        }
        ?>
    </div>
</body>
</html>