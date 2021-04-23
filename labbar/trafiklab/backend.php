<?php
/*
* Hämtar hållplatser från api.sl.se
* 
* PHP version 7
* @category   api / json
* @author     Karim Ryde <karye.webb@gmail.com>
* @license    PHP CC
*/

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
    //var_dump($jsonData);

    // Plocka ut namnen
    $locationList = $jsonData->LocationList;
    $stopLocation = $locationList->StopLocation;

    // Skapa en tom array
    $stopArray = [];

    // Loopa igenom arrayen
    //echo "<ul>";
    foreach ($stopLocation as $stop) {
        //echo "<li>$stop->name</li>";

        $stopArray[] = $stop;
    }
    //echo "</ul>";

    // Skicka JSON-paketet
    echo json_encode($stopArray);
} else {
    echo json_encode("Något gick fel!");
}
?>