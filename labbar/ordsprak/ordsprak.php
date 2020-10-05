<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Slumpa fram sex ordspråk</title>
    <link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css">
    <link rel="stylesheet" href="ordsprak.css">
</head>
<body>
    <div class="kontainer">
        <?php
        // Skapa en array med tio ordspråk
        $ordsprak[] = "Blyga pojkar får aldrig kyssa vackra flickor.";
        $ordsprak[] = "Borta bra men hemma bäst.";
        $ordsprak[] = "Bra karl reder sig själv.";
        $ordsprak[] = "Bränt barn skyr elden.";
        $ordsprak[] = "Bättre att förekomma än förekommas.";
        $ordsprak[] = "Bättre brödlös än rådlös.";
        $ordsprak[] = "Bättre en fågel i handen än tio i skogen.";
        $ordsprak[] = "Bättre ensam än i dåligt sällskap.";
        $ordsprak[] = "Bättre fly än illa fäkta.";
        $ordsprak[] = "Bättre föregå än föregås.";
    
        // Array för att lagra varje kast
        $tagna = [];
    
        // Upprepa mig 6 ggr, dvs skriv ut 6 ggr
        for ($i = 0; $i < 6; $i++) {
            // Slumpa fram ett tal mellan 0 och 9 med funktionen rand()
            $index = rand(0, 9);
            echo "<p>$index</P>";
    
            // Skriv ut ordspråket om det inte är redan taget
            if (!in_array($index, $tagna)) {
    
                // Skriv ut ordspråket 
                echo "<p>$ordsprak[$index]</p>";
    
                // Spara nu det tagna indexet
                $tagna[] = $index;
            } else {
    
                // Backa $i med 1
                $i--;
            }
    
            print_r($tagna);
            echo "<p></p>";
        }
        ?>
    </div>
</body>
</html>