<?php
namespace Controller;

use MVC\ROUTER;
use models\Credentials;

class CredentialController{

    public static function origin(ROUTER $router){
        header("location: /home");
        $router->render("/",[]);
    }

    public static function home(ROUTER $router){
        $home=true;
        $datos=[
            "home" => $home
        ];
        $router->render("/home",$datos);
    }
    
    public static function menu(ROUTER $router){
        $datos=[];
        $router->render("/menu",$datos);
    }

    public static function gallery(ROUTER $router){
        $datos=[];
        $router->render("/gallery",$datos);
    }

    public static function aboutUs(ROUTER $router){
        $datos=[];
        $router->render("/aboutUs",$datos);
    }

    public static function contactUs(ROUTER $router){
        $datos=[];
        $router->render("/contactUs",$datos);
    }

    public static function login(ROUTER $router){
        $datos=[];
        $router->render("/login",$datos);
    }

    public static function panel(ROUTER $router){
        $datos=[];
        $router->render("/panel",$datos);
    }

    public static function profile(ROUTER $router){
        $datos=[];
        $router->render("/profile",$datos);
    }

    public static function reservation(ROUTER $router){
        $datos=[];
        $router->render("/reservation",$datos);
    }

    public static function signIn(ROUTER $router){
        $datos=[];
        $router->render("/signIn",$datos);
    }

    public static function signUp(ROUTER $router){
        $datos=[];
        $router->render("/signUp",$datos);
    }

    public static function error(ROUTER $router){
        $layaoutOff=false;
        
        $datos=[
            "layoutOff" => $layaoutOff
        ];

        $router->render("/error",$datos);
    }

}
