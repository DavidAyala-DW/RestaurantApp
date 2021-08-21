<?php 
require  "functions.php";
require "config/database.php";
require ('../vendor/autoload.php');

use models\ActiveRecord;
//require __DIR__. '/../vendor/autoload.php';// Aca se hace la redireccion hacia la carpeta de vendor donde se encuentra el autoload de las clases y sus respectivos namespaces 
// require ('../vendor/autoload.php');

//Coneccion a la base de datos 
$db=conectar_DB();
ActiveRecord::SetDB($db);


