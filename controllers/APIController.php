<?php
namespace Controller;

use MVC\ROUTER;
use models\Reservations;
use models\Users;
use PHPMailer\PHPMailer\PHPMailer;
use DateTime;
use DateTimeZone;

class APIController{
    
    public static  function sendEmail(ROUTER $router){

        $layaoutOff=true;
        $message="";
            
        if($_SERVER["REQUEST_METHOD"]==="POST"){
    
            $phpmailer = new PHPMailer();
            $phpmailer->isSMTP();
            $phpmailer->Host = 'smtp.mailtrap.io';
            $phpmailer->SMTPAuth = true;
            $phpmailer->Port = 2525;
            $phpmailer->SMTPSecure="tls";
            $phpmailer->Username = '1cecfb6e9a9f96';
            $phpmailer->Password = 'a282c8de9ac386';

            $result=$_POST;
            
            $phpmailer->setFrom($result["email"]);
            $phpmailer->addAddress("Restaurant@domain.com","Dominio.com");
            $phpmailer->Subject="You Have a New Message";

            $content="<html><p>User Data</p>";
            $content.="<p>Name:".$result["name"]."</p> ";
            $content.="<p>Email:".$result["email"]."</p> ";
            $content.="<p>Message:".$result["message"]."</p> ";
            
            $phpmailer->Body=$content;        

            $phpmailer->AltBody="alter Text ...";

            if($phpmailer->send()){
                $message="The message has been send suscessfully";
            }else{
                $message="An error has been Occurred";
            }
            
        }


        $datos=[
            "layoutOff"=> $layaoutOff,
            "message"=>$message
        ];
        $router->render("/API/sendEmail",$datos);
    }
    

    public static function create(ROUTER $router){
        
        $layaoutOff=false;
        $message="";

        if(!isset($_SESSION)){
            session_start();
        }

        $errors=Reservations::get_errors();
        $reservation=new Reservations();


        if($_SERVER["REQUEST_METHOD"]==="POST"){

            $idUser=  (Users::find($_SESSION["mail"]))->id;

            $_POST["idUser"] = $_SESSION["id"]?? $idUser  ;

            $reservation = new Reservations($_POST);

            $errors=$reservation->confirmValues();

            $dateInfo=new DateTime($reservation->date." ".$reservation->time,new DateTimeZone('America/New_York'));
            $dateInfo->format("Y-m-d H:i:s");
            
            $today= new DateTime();
            $today->setTimezone(new DateTimeZone('America/New_York'));
            $today->format("Y-m-d H:i:s");

            if($dateInfo>$today){
                $diff= $today->diff($dateInfo);
                if((($diff->days *24)*60 + $diff->i)<30){
                    $errors[]="The online reservation must be made 30 minutes in advance";
                }
            }else{
                $errors[]="the date is not valid";
            }

            

            if(empty($errors)){
                $reservation->create();
                $layaoutOff=true;
                $message=json_encode($errors);

            }else{
                $layaoutOff=true;
                $message=json_encode($errors);
            }

        }

        $datos=[
            "layoutOff"=> $layaoutOff,
            "message"=>$message
        ];

        $router->render("/API/message",$datos);

    }

    public static function read(ROUTER $router){

        $layaoutOff=false;

        $message=json_encode([]);

        if(!isset($_SESSION)){
            session_start();
        }

        if($_SERVER["REQUEST_METHOD"]==="GET"){
            
            $layaoutOff=true;

            if(isset($_SESSION["login"])){

                if($_SESSION["id_credencial"]==2 || $_SESSION["id_credencial"]==3 ){

                    $allReservations=Reservations::all();

                    foreach ($allReservations as $key ) {

                        $dateInfo=new DateTime($key->date." ".$key->time,new DateTimeZone('America/New_York'));
                        $dateInfo->format("Y-m-d H:i:s");
                        // debugear($dateInfo);
                        $today= new DateTime();
                        $today->setTimezone(new DateTimeZone('America/New_York'));
                        $today->format("Y-m-d H:i:s");
                        // debugear($today);
                        // debugear([$dateInfo,$today,$today->diff($dateInfo)->format(("%H:%I:%S")),$dateInfo>$today]);
                        
                        if($today > $dateInfo){
                            $key->state="1";
                            $key->update();
                        }



                        $date=$key->created;
                        $date=new DateTime(($date));
                        $date->setTimezone(new DateTimeZone('America/New_York'));
                        $key->created = $date->format('g:ia \o\n l jS F Y');
                    }
                    
                    $message=json_encode(array_reverse($allReservations));              

                }else{

                    $idUser= (Users::find($_SESSION["mail"]))->id;
                    $messages=Reservations::all();
                    $allReservations=[];

                    foreach ($messages as $key) {
                        if($key->idUser==$idUser){
                            $allReservations[]= $key;
                        }
                    
                    }

                    foreach ($allReservations as $key ) {
                        unset($key->idUser);
                        $date=$key->created;
                        $date=new DateTime(($date));
                        $date->setTimezone(new DateTimeZone('America/New_York'));
                        $key->created = $date->format('g:ia \o\n l jS F Y');                                    
                    }

                    $message=json_encode(array_reverse($allReservations));
                }
            }
            
        }

        $datos=[
            "layoutOff"=> $layaoutOff,
            "message"=>$message
        ];

        $router->render("/API/message",$datos);
    }

    public static function countReservation(Router $router){

        $layaoutOff=false;

        $message="";

        if(!isset($_SESSION)){
            session_start();
        }

        if($_SERVER["REQUEST_METHOD"]==="GET"){
            
            $layaoutOff=true;

            if(isset($_SESSION["login"])){

                if($_SESSION["id_credencial"]=="1"){

                    $idUser= (Users::find($_SESSION["mail"]))->id;

                    $count = Reservations::countRows("id","idUser=".$idUser);

                    $message=json_encode($count);

                }else{
                    $count = Reservations::countRows("id");
                    $message=json_encode($count);
                }

            }

        }

        $datos=[
            "layoutOff"=> $layaoutOff,
            "message"=>$message
        ];

        $router->render("/API/message",$datos);

    }

    public static function delete(ROUTER $router){

        $layaoutOff=false;

        $message="";

        if(!isset($_SESSION)){
            session_start();
        }

        if($_SERVER["REQUEST_METHOD"]==="POST"){

            $layaoutOff=true;

            if(isset($_SESSION["login"])){

                if(isset($_POST["idDelete"])){

                    $id = $_POST["idDelete"];

                    $idUser= (Users::find($_SESSION["mail"]))->id;
        
                    $reservation = Reservations::find($id);
        
        
                    if( $reservation->idUser == $idUser || $_SESSION["id_credencial"]=="2" || $_SESSION["id_credencial"]=="3" ){
    
                        $reservation->delete();
                        $array=[];
    
                        $message=json_encode($array);
                        
                    }else{
                        $message=json_encode("Access Denied");
                    }    

                }
 

            }
            

        }

    

        $datos=[
            "layoutOff"=> $layaoutOff,
            "message"=>$message
        ];

        $router->render("/API/message",$datos);


    }

    public static function getInfoUser(ROUTER $router){

        $layaoutOff=false;
        $message="";

        if(!isset($_SESSION)){
            session_start();
        }

        if($_SERVER["REQUEST_METHOD"]=="GET"){
            $layaoutOff=true;
            $id=$_GET["id"];
            $info=Users::find_id($id);
            if($info){
                unset($info->password);
                unset($info->id_credencial);
                unset($info->id);
                $message=json_encode($info);
            }else{
                $message=json_encode("user doesnt exist");
            }

        }

        $datos=[
            "layoutOff"=> $layaoutOff,
            "message"=>$message
        ];

        $router->render("/API/message",$datos);

    }

}

