<?php
namespace Controller;

use MVC\ROUTER;

use models\Users;

class UsersController{

    public static function create(ROUTER $router){

        $layaoutOff=false;
        $message="";
        $user=new Users();
        $errors=$user->get_errors();

        if(!isset($_SESSION)){
            session_start();
        }
        
        session_active();

        if(!isset($_SESSION)){
            session_start();
        }

        if($_SERVER["REQUEST_METHOD"]==="POST"){

            $user=new Users($_POST);

            if($_POST["verify-password"]!==$user->password){
               $user->$errors["password"]=" The Passwords do not match";
            }

            $errors=$user->confirmRegistration();

            if(empty($errors)){

                $user->create_account();
                $layaoutOff=true;
                $message=json_encode($errors);

            }else{

                $errors=$user->get_errors();
                $layaoutOff=true;
                $message=json_encode($errors);
            }

        }


        $datos=[
            "errors"=>$errors,
            "layoutOff"=>$layaoutOff,
            "message"=>$message

        ];

        $router->render("/signUp",$datos);

    }

    public static function signIn(ROUTER $router){

        $layaoutOff=false;
        $message="";

        if(!isset($_SESSION)){
            session_start();
        }

        session_active();

        $errors=Users::get_errors();

        $user=new Users();

        if($_SERVER["REQUEST_METHOD"]=="POST"){
            
            $user=new Users($_POST);

            $errors=$user->confirmLogin();

            if(empty($errors)){
                $user->login();
                $layaoutOff=true;
                $message=json_encode($errors);
            }else{
                $errors=$user->get_errors();
                $layaoutOff=true;
                $message=json_encode($errors);
            }
        }


        $datos=[
            "errors"=>$errors,
            "layoutOff"=>$layaoutOff,
            "message"=>$message
        ];

        $router->render("/signIn",$datos);

    }

    public static function logOut(ROUTER $router){

        session_start();
        $_SESSION=[];

        header("location: /");


        $datos=[

        ];

        $router->render("/",$datos);

    }

    public static function getInfoUser(ROUTER $router){


        $layaoutOff=false;
        $message="";
        if($_SERVER["REQUEST_METHOD"]=="GET"){
            $infoUser=$_SESSION ?? [];
            $layaoutOff=true;
            $message=json_encode($infoUser);
        }
                    
        $datos=[
            "layoutOff" => $layaoutOff,
            "message" => $message
        ];

        $router->render("/API/message",$datos);
    }

}