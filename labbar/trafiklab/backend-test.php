<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Närmaste SL-hållplatser</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kontainer">
        <h1>Närmaste SL-hållplatser</h1>
        <form action="#" method="post">
            <label>Ange latitude <input type="text" name="lat"></label>
            <label>Ange longitude <input type="text" name="lon"></label>
            <button>Sök</button>
        </form>
        <?php
            // Ta emot data från formuläret
            $lat = filter_input(INPUT_POST, "lat", FILTER_SANITIZE_STRING);
            $lon = filter_input(INPUT_POST, "lon", FILTER_SANITIZE_STRING);

            // Är det tomma?
            if ($lat && $lon) {
                
                // Api-nyckeln
                $api = "5a04359da47042b7837f88a5c61908c9";

                // Max antal svar
                $max = 20;

                // Hur stor radie i meter
                $radius = 500;

                // Url till api-tjänsten
                $url = "http://api.sl.se/api2/nearbystops.json?key=$api&originCoordLat=$lat&originCoordLong=$lon&maxresults=$max&radius=$radius";

                //echo "<p>$url</p>";

                // Gör ett anrop
                $json = file_get_contents($url);

                // Avkoda json-svaret
                $jsonData = json_decode($json);
                var_dump($jsonData);

                // Plocka ut namnen
                $locationList = $jsonData->LocationList;
                $stopLocation = $locationList->StopLocation;

                // Loopa igenom arrayen
                echo "<ul>";
                foreach ($stopLocation as $stop) {
                    echo "<li>$stop->name</li>";
                }
                echo "</ul>";
            }
        ?>
    </div>
</body>
</html>