<?php
// Ta emot text
$texten = filter_input(INPUT_POST, "texten", FILTER_SANITIZE_STRING);

// Öppna textfil för att skriva i
$handtag = fopen("markers.txt", "w");

// Skriv en rad
fwrite($handtag, $texten);

// Stäng ned filen
fclose($handtag);