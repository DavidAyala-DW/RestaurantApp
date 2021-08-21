<?php

function debugear($variable){
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
    exit;
}

function login($object){

    if(!isset($_SESSION)){
        session_start();
    }

    $_SESSION["id"]=$object->id;
    $_SESSION["fullName"]=$object->fullName;
    $_SESSION["numberPhone"]=$object->numberPhone;
    $_SESSION["mail"]=$object->mail;
    $_SESSION["id_credencial"]=$object->id_credencial;

    $_SESSION["login"]=true;

}

function session_active(){

    if(isset($_SESSION["login"])){
        header("location: /reservation");
    }

}

