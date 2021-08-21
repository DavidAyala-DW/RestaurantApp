<?php 
namespace models;

class Users extends ActiveRecord {

    protected static $name_tabla="users";
    protected static $columnas_DB=["id","fullName","numberPhone","mail","password","id_credencial"];

    public $id;
    public $fullName;
    public $numberPhone;
    public $mail;
    public $password;
    public $id_credencial;

    public function __construct( array $arg=[])
    {
        $this->id = $arg["id"] ?? null;
        $this->fullName = $arg["fullName"] ?? null;
        $this->numberPhone = $arg["numberPhone"] ?? null;
        $this->mail = $arg["mail"] ?? null;
        $this->password = $arg["password"] ?? null;
        $this->id_credencial = 1;

    }

    public function userExist($email){

        $query="SELECT *FROM ".static::$name_tabla." WHERE mail='${email}' LIMIT 1 ";
        $resultado=self::$db->query($query);
        return $resultado->num_rows;
        
    }

    public  function confirmRegistration(){
        // Agregar expresiones regulares para el correo y cantidad minima para la pass
       if(!$this->mail){
           static::$errors["email"]='The email is required';
       }else{

           $this->mail=filter_var($this->mail,FILTER_VALIDATE_EMAIL);
           $this->mail=self::$db->escape_string($this->mail);
           $result=$this->userExist($this->mail);
           if($result){
               static::$errors["email"]="This Email is Already in Use";
           }

       }

       if(!$this->fullName){
           static::$errors["fullName"]='The full Name is required';
        }

        if(!$this->numberPhone){
           static::$errors["numberPhone"]='The Number Phone is required';
        }

        if(!$this->password){
           static::$errors["password"]='The password is Required';
        }else{
           if(strlen($this->password)<8){
               static::$errors["password"]="The password must be at least 8 characters long";
           }
        }

        return static::$errors;
   }

   public function confirmLogin(){

        if(!$this->mail){
            static::$errors["mail"]='The email is required';
            return static::$errors;
        }else{
            $this->mail=filter_var($this->mail,FILTER_VALIDATE_EMAIL);
            $this->mail=self::$db->escape_string($this->mail);
            $result=$this->userExist($this->mail);
            if(!$result){
                static::$errors["mail"]="This Email is Not Registered";
                return static::$errors;
            }
        }

        if(!$this->password){
            static::$errors["password"]='The password is Required';
            return static::$errors;
        }else{
            $result=static::find($this->mail);
            $auth=$this->verifyPassword($result);
            if(!$auth){
                static::$errors["password"]="Password is Wrong, try again ";
                return static::$errors;
            }
        }

        return static::$errors;

    }

    public function verifyPassword($result){

        $user=$result;
        $this->password=self::$db->escape_string($this->password);
        $auth=password_verify($this->password,$user->password);
        return $auth;

    }

    public static function find($email){
        
        $query="SELECT *FROM ".static::$name_tabla ." WHERE mail='${email}'";
        $result=static::consultSQL($query);
        return  array_shift($result);
        
    }

    public static function find_id($id){
        $query="SELECT *FROM ".static::$name_tabla ." WHERE id='${id}'";
        $result=static::consultSQL($query);
        if($result){
            return  array_shift($result);
        }else{
            return false;
        }
        
    }

    public  function create_account(){

        $this->password=password_hash($this->password,PASSWORD_BCRYPT);
        $result=$this->create();
        if($result){
            return login($this);
        }else{
            debugear("Se ha producido algun error");
        }   

    }

    public function login(){

        $reset=static::find($this->mail);

        $this->id=$reset->id;
        $this->mail=$reset->mail;
        $this->fullName=$reset->fullName;
        $this->numberPhone=$reset->numberPhone;
        $this->id_credencial=$reset->id_credencial;

        return login($this);
    }


}