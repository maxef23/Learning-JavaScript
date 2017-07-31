<?php
header("Location: http://localhost:63342/task4/index.php");
error_reporting( E_ALL );

$name = $_GET['name'];
$url_photo = $_GET['url_photo'];


$mysqli =  new mysqli ("localhost", "root", "", "database");

$mysqli->query("SET NAMES 'utf8'");

$mysqli->query("INSERT INTO `products` (`name`, `photo`) VALUES ('".$_GET['name']."' , '".$_GET['url_photo']."') ");

$mysqli->close();


?>