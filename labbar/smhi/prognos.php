<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Testar chartjs.org</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="./smhi.css">
</head>
<body>
    <div class="kontainer">
        <h1>SMHI tiodagars prognos</h1>
        <canvas id="myChart"></canvas>
    <?php
    // url till SMHI api
    $url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18/lat/59/data.json";

    // Hämta json-data
    $json = file_get_contents($url);

    // Avkoda json
    $jsonData = json_decode($json);

    // Plocka ut publiceringstid
    $approvedTime = $jsonData->approvedTime;
    echo "<p>Prognosen publicerad $approvedTime</p>";
    echo "</div>";

    // Plocka ut tidsserien
    $timeSeries = $jsonData->timeSeries;

    // Skapa variabler för att samla ihop
    // alla tidpunkter och alla temperaturer
    $tidpunkter = "";
    $temperaturer = "";

    // Loopa igenom arrayen
    foreach ($timeSeries as $timeData) {
        // Plocka tidpunkt
        $validTime = $timeData->validTime;
        $tidpunkter .= "'$validTime', ";

        // Plocka ut temperaturerna
        $parameters = $timeData->parameters;
        $temperaturen = $parameters[10]->values[0];
        //echo $temperaturen;
        $temperaturer .= "'$temperaturen', ";
    }

    // Skriv ut lite Javascript
    echo "<script>";
    echo "const labels = [$tidpunkter];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Tiodagars prognos',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [$temperaturer],
            tension: 0.5
        }]
    };const config = {
        type: 'line',
        data,
        options: {}
    };
    var myChart = new Chart(
        document.querySelector('#myChart'),
        config
    );";
    echo "</script>";
    ?>
</body>
</html>