<?php 
require_once __DIR__ . "/../includes/app.php";
use MVC\ROUTER;      
use Controller\CredentialController;

use  Controller\UsersController;

use Controller\APIController;
use models\Users;

$router = new ROUTER();

//Origin 
$router->get("/",[CredentialController::class, "origin"]);

//Home

$router->get("/home",[CredentialController::class, "home"]);

//Menu 
$router->get("/menu",[CredentialController::class, "menu"]);
$router->post("/menu",[CredentialController::class, "menu"]);

//Home

//Home

$router->get("/login",[CredentialController::class, "login"]);

$router->get("/gallery",[CredentialController::class, "gallery"]);
//Home


//Home


//Home

$router->get("/reservation",[CredentialController::class, "reservation"]);
//Home

$router->get("/aboutUs",[CredentialController::class, "aboutUs"]);

$router->get("/contactUs",[CredentialController::class, "contactUs"]);

$router->get("/signIn",[UsersController::class, "signIn"]);
$router->post("/signIn",[UsersController::class, "signIn"]);

$router->get("/signUp",[UsersController::class, "create"]);

$router->get("/logOut",[UsersController::class, "logOut"]);

$router->post("/signUp",[UsersController::class, "create"]);

$router->get("/getInfoUser",[UsersController::class, "getInfoUser"]);


$router->post("/API/sendEmail",[APIController::class, "sendEmail"]);

$router->get("/API/read",[APIController::class, "read"]);

$router->get("/API/countReservation",[APIController::class, "countReservation"]);

$router->get("/API/getInfoUser",[APIController::class, "getInfoUser"]);

$router->post("/API/delete",[APIController::class, "delete"]);

$router->get("/error",[CredentialController::class, "error"]);


$router->post("/API/create",[APIController::class, "create"]);

$router->comprobar_url();

