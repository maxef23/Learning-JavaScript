<h1>Products</h1>
<?php

error_reporting( E_ALL );

include 'classA.php';

include 'classB.php';

$mysqli =  new mysqli ("localhost", "root", "", "database");

$mysqli->query("SET NAMES 'utf8'");

$query = $mysqli->query("SELECT * FROM `products` ");

$products = new B;
$products->show_products($query);

$mysqli->close();

include 'index.html';


?>