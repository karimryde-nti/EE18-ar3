<?php

/**
 * PHP version 7
 * @category   Inloggning
 * @author     Karim Ryde <karye.webb@gmail.com>
 * @license    PHP CC
 */
session_start();

// Logga ut genom att döda session variablerna
session_destroy();

// Hoppa till logga in
header("Location: ./login.php");
