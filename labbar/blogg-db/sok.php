<?php
/**
 * En enkel blogg som använder en databas
 * 
 * PHP version 7
 * @category   Webbapplikation med databas
 * @author     Karim Ryde karye.webb@gmail.com
 * @license    PHP CC
 */
include "./resurser/conn.php";
?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Blogg</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kontainer">
        <h1>Min blogg</h1>
        <nav>
            <ul class="nav nav-tabs">
                <li class="nav-item"><a class="nav-link" href="./lasa.php">Läsa</a></li>
                <li class="nav-item"><a class="nav-link" href="./admin/skriva.php">Skriva</a></li>
                <li class="nav-item"><a class="nav-link active" href="./sok.php">Sök</a></li>
            </ul>
        </nav>
        <form action="#" method="POST">
            <label>Ange sökterm <input type="text" name="sökterm"></label>
            <button>Sök</button>
        </form>
        <?php
        // Ta emot det som skickas
        $sökterm = filter_input(INPUT_POST, 'sökterm', FILTER_SANITIZE_STRING);

        // Om data finns..
        if ($sökterm) {

            // SQL-satsen
            $sql = "SELECT * FROM post WHERE header LIKE '%$sökterm%' OR postText LIKE '%$sökterm%'";

            // Steg 2: nu kör vi sql-satsen
            $result = $conn->query($sql);

            // Steg 3: gick det bra att köra SQL-satsen?
            if (!$result) {
                die("Något blev fel med SQL-satsen" . $conn->error);
            } else {
                echo "<p class=\"alert alert-success\">Hittade " . $result->num_rows . " inlägg</p>";
            }

            // Steg 3: presentera resultatet
            while ($rad = $result->fetch_assoc()) {
                echo "<div class=\"inlägg\">";
                echo "<h5>$rad[header]</h5>";
                echo "<h6>$rad[postDate]</h6>";
                echo "<p>$rad[postText]</p>";
                echo "</div>";
            }

            // Steg 4: stänga ned anslutningen
            $conn->close();
        }
        ?>
    </div>
</body>
</html>