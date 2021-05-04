<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include "./classes/Validator.php";
$check = new Validator();

// Använder Validator klassen på data som skickas från formuläret
if (isset($_POST["submit"])) {
    $check->set($_POST);
    $check->validateUsername();
    $check->validatePassword();
    $check->validateEmail();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New User</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div class="kontainer">
        <h1>Create New User</h1>
        <form action="#" method="post">
            <label>Username <input type="text" name="username" required></label>
            <?php $check->showErrors('username'); ?>
            <label>Password <input type="password" name="password" required></label>
            <?php $check->showErrors('password'); ?>
            <label>Email <input type="email" name="email" required></label>
            <?php $check->showErrors('email'); ?>
            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>