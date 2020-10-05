<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Text till morsekod</title>
    <link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kontainer">
        <h1>Omvandla text till morsekod</h1>
        <form action="#" method="POST">
            <textarea name="texten" cols="30" rows="10"></textarea>
            <button>Skicka</button>
        </form>
        <?php

        /* Ta emot data som skickas */
        if (isset($_POST["texten"]))
        {
            $texten = $_POST["texten"];

            /* Morsealfabetet A-Z och mellanslag */
            $morse['A'] = '.-';
            $morse['B'] = '-...';
            $morse['C'] = '-.-.';
            $morse['D'] = '-..';
            $morse['E'] = '.';
            $morse['F'] = '..-.';
            $morse['G'] = '--.';
            $morse['H'] = '....';
            $morse['I'] = '..';
            $morse['J'] = '.---';
            $morse['K'] = '-.-';
            $morse['L'] = '.-..';
            $morse['M'] = '--';
            $morse['N'] = '-.';
            $morse['O'] = '---';
            $morse['P'] = '.--.';
            $morse['Q'] = '--.-';
            $morse['R'] = '.-.';
            $morse['S'] = '...';
            $morse['T'] = '-';
            $morse['U'] = '..-';
            $morse['V'] = '...-';
            $morse['W'] = '.--';
            $morse['X'] = '-..-';
            $morse['Y'] = '-.--';
            $morse['Z'] = '--..';
            $morse['Z'] = '--..';
            $morse['Å'] = '.--.-';
            $morse['Ä'] = '.-.-';
            $morse['Ö'] = '---.';
            $morse[' '] = ' ';

            // Omvandla texten till versaler (stora bokstäver)
            $texten = mb_strtoupper($texten);
            //echo "<p>$texten</p>";
            
            // Dela upp texten i dess bokstäver
            $bokstäver = mb_str_split($texten);
            //print_r($bokstäver);
            
            // Loopa igenom texten
            echo "<form id=\"demo\"><label>$texten</label><input type=\"text\" pattern=\"[.\- ]+\" name=\"code\" value=\"";
            foreach ($bokstäver as $bokstav) {
                echo "$morse[$bokstav]";
            }
            echo "\"><button>Spela upp</button></form>";
        }

        // För att hantera texten med svenska tecken
        function mb_str_split($str, $l = 1) {
            if ($l > 0) {
                $ret = array();
                $len = mb_strlen($str, "UTF-8");
                for ($i = 0; $i < $len; $i += $l) {
                    $ret[] = mb_substr($str, $i, $l, "UTF-8");
                }
                return $ret;
            }
            return preg_split("//u", $str, -1, PREG_SPLIT_NO_EMPTY);
        }
        ?>
    </div>
    <script src="morse.js"></script>
</body>
</html>