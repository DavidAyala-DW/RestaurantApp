<?php 
namespace MVC; 
class ROUTER { 
    public function __construct()
    {    
    }
    public $paths_GET=[];
    public $paths_POST=[];
    
    public function get($url,$fn){
        $this->paths_GET[$url]=$fn;
    }

    public function post($url,$fn){
        $this->paths_POST[$url]=$fn;
    }
    

    public function comprobar_url(){
        if(!isset($_SESSION)){
            session_start();
        }
         $auth=$_SESSION["login"] ?? null;

         $rutas_protegidas=["/reservation"];

         $pathsSave=["/signIn","/signUp"];

        $url_actual=$_SERVER["PATH_INFO"] ?? '/'; //Usaremos la superglobal para identificar la ruta actual 
        $method_actual=$_SERVER["REQUEST_METHOD"]?? null;
        if($method_actual==="GET"){
            //Aca se procedera a getear/adquirir el valor $fn de las rutas que esten agregadas al instaciar el objeto
            $fn=$this->paths_GET[$url_actual]??null;

        }else{
            $fn=$this->paths_POST[$url_actual]??null;
        }

         if(in_array($url_actual,$rutas_protegidas) && is_null($auth) ){
             header("location: /signIn");
         }

         if(in_array($url_actual,$pathsSave) && !is_null($auth)){
            header("location: /reservation");
         }

        if($fn){
            call_user_func($fn,$this);//Esta funcion/metodo sirve para llamar al metodo
            // Con el nombre $fn ->esto siempre y cuando este metodo este definido en la clase a la que pertenece el objeto  

        }else{
            echo "No se ha encontrado la pagina, lo lamentamos mucho";
        }
        
    }

    public function render($view,$datos=[]){
        foreach ($datos as $key => $value) {
            //Aqui vamos a crear variables ("Sueltas") pero que mantendran el mismo nombre del key y su respectivo valor 
            $$key=$value;
        }
        
        ob_start();//Se activa el buffering (Almacenamient en memoria momentaneo)
        include_once __DIR__ . "/views/$view.php";   
        $action=ob_get_clean();//devuelve todo lo que tenga el buffer e instantaneamente, lo limia para evitar llenar la memoria del servidor
        //No necesariamente devuelve valores html-> tambien almacena en memoria objetos,variables,etc 
        // y estas pueden ser instanciadas/declaradas en la pagina donde se llame esta funcion;
        include_once __DIR__. "/views/layout.php";
    }   
}
