<?php
    function conectar_DB():mysqli{
        $db=new mysqli("restaurantapp.cdnkcd9opwyw.us-east-2.rds.amazonaws.com","david","davidx22","restaurantApp");
        $db->set_charset("utf8mb4");
        if(!$db){
            echo 'Ocurrio un error';
            exit;
        }   
        return $db;
    }