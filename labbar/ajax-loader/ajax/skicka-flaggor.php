<?php
/* BACKEND */
session_start();
if (!isset($_SESSION["index"])) {
    $_SESSION["index"] = 2;
} else {
    $_SESSION["index"] += 6; 
}

$allaFlaggor = scandir("../flags");

// Skriv ut namnet på en flagga
/* echo "<img src=\"./flags/{$allaFlaggor[$_SESSION["index"]]}\" alt=\"\">";
echo "<img src=\"./flags/{$allaFlaggor[$_SESSION["index"] + 1]}\" alt=\"\">";
echo "<img src=\"./flags/{$allaFlaggor[$_SESSION["index"] + 2]}\" alt=\"\">";
echo "<img src=\"./flags/{$allaFlaggor[$_SESSION["index"] + 3]}\" alt=\"\">";
echo "<img src=\"./flags/{$allaFlaggor[$_SESSION["index"] + 4]}\" alt=\"\">";
echo "<img src=\"./flags/{$allaFlaggor[$_SESSION["index"] + 5]}\" alt=\"\">"; */

for ($i = 0; $i < 6; $i++) { 
    echo "<img src=\"./flags/{$allaFlaggor[$_SESSION["index"] + $i]}\" alt=\"\">";
}