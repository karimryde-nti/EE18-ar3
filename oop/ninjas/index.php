<?php

// Det här är en mall
class User {

    // Egenskaper (properties)
    public $username = "Karim";
    public $email = "karim@google.se";
    
    // Metoder (methods)
    public function addFriend() {
        return "Friend added!";
    }
}

// Skapar ett objekt
$userOne = new User();
$userTwo = new User();


// Kolla på egenskaper
echo $userOne->username . "<br>";
echo $userOne->email . "<br>";
echo $userOne->addFriend() . "<br>";

?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
</body>
</html>