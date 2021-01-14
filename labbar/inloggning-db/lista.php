<?php

/**
 * PHP version 7
 * @category   Inloggning
 * @author     Karim Ryde <karye.webb@gmail.com>
 * @license    PHP CC
 */
include "./resurser/conn.php";
session_start();

// Om inte inloggad kickad till login.php
if (!isset($_SESSION["anamn"])) {
    header("Location: ./login.php");
}
?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Utloggning</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kontainer">
        <header>
            <h1>Utloggning</h1>
            <nav>
                <ul class="nav nav-tabs">
                    <?php if (isset($_SESSION["anamn"])) { ?>
                        <li class="nav-item"><a class="nav-link" href="./logout.php">Logga ut</a></li>
                        <li class="nav-item"><a class="nav-link active" href="./lista.php">Lista</a></li>
                        <li class="nav-item anamn"><?php echo $_SESSION["anamn"] ?></li>
                    <?php } else { ?>
                        <li class="nav-item"><a class="nav-link" href="./login.php">Logga in</a></li>
                        <li class="nav-item"><a class="nav-link" href="./registrera.php">Registrera</a></li>
                    <?php } ?>
                </ul>
            </nav>
        </header>
        <main>
            <?php
                // Hämta alla användare i tabellen
                $sql = "SELECT * FROM user";
                $result = $conn->query($sql);

                // Gick det bra?
                if (!$result) {
                    die("Något gick fel med SQL-satsen: " . $conn->error);
                } else {
                    echo "<p class=\"alert alert-success\">Hämtade " . $result->num_rows . " användare</p>";
                }

                // Steg 3: presentera resultatet
                echo "<table>";
                echo "  <tr>
                        <th>Förnamn</th><th>Efternamn</th><th>Användarnamn</th><th>Skapad</th>
                    </tr>";
                while ($rad = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "  <td>$rad[fnamn]</td>";
                    echo "  <td>$rad[enamn]</td>";
                    echo "  <td>$rad[anamn]</td>";
                    echo "  <td>$rad[skapad]</td>";
                    echo "</tr>";
                }
                echo "</table>";

                // Steg 4: Stäng ned anslutningen till databasen
                $conn->close();
            ?>
        </main>
    </div>
</body>
</html>