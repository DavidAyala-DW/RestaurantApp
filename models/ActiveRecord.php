<?php 
namespace models;

class ActiveRecord{
    
    //Attributes
    protected static $db;
    protected static $name_tabla="";   
    protected static $columnas_DB=[]; 
    protected static $errors=[];

    //Methods 

    public static function SetDB($database){
        self::$db=$database;
    }

    public function get_name_table(){
        return static::$name_tabla;
    }

    public static function get_errors(){
        return static::$errors;
    }

    // transform attributes in colum of table
    public function attributes() : array{
        $atributos=[];
        foreach (static::$columnas_DB as $columna) { 
            
            if($columna==="id") continue;
            $atributos[$columna]=$this->$columna; 
        }
        return $atributos;
    }

    public function sanitize_attributes() : array{
        $atributos=$this->attributes();
        $sanitizado=[];
        foreach ($atributos as $key => $value) {
            $sanitizado[$key]=self::$db->escape_string($value);
        }
        return $sanitizado;
    }


    protected static function create_object($propiedad){
        $objeto=new static;
        foreach ($propiedad as $key => $value) {
            if(property_exists($objeto,$key)){
                $objeto->$key=$value;
            }
        }
        return $objeto;
    }

    public function create(){

        $atributos=$this->sanitize_attributes(); 
        $query="INSERT INTO ". static::$name_tabla." ( ";
        $query.= join(', ', array_keys($atributos));     
        $query.=") VALUES ('";
        $query.= join("', '",array_values($atributos));
        $query.=" ') ";
        
        // debugear($query);

        $result=self::$db->query($query);

        if($result){
            return $result;
        }else{
            echo "A problem has occurred";
            exit;
        }

    }

    public function update(){

        $atributos=$this->sanitize_attributes();
        $valores=[];
        foreach ($atributos as $key => $value) {
            $valores[]="{$key}='{$value}'";
        }
        $query="UPDATE ". static::$name_tabla . " SET ";
        $query.=join(", ",$valores);
        $query.= "WHERE id= '". self::$db->escape_string($this->id)."'" ;
        $query.= " LIMIT 1";
        $resultado=self::$db->query($query);
        if($resultado){
            return true;
        }else{
            echo "Se ha producido un error, vuelva a intentarlo";
            exit;
        }

    }

    public function delete(){
        $query="DELETE FROM ".static::$name_tabla." WHERE id=" . self::$db->escape_string($this->id) . " LIMIT 1" ;
        $result=self::$db->query($query);

        if($result){
            return $result;
        }else{
            echo "A problem has occurre";
            exit;
        }
    }

    
    public function sincronizar($arg=[]){
        foreach ($arg as $key => $value) {
            if(property_exists($this,$key) && !is_null($value)){
                $this->$key=$value;
            }
        }
    }


    public static function consultSQL($query){
        
        $result=self::$db->query($query);
        if($result){             
            $array=[];
            while($propiedad=$result->fetch_assoc()){
                $array[]=static::create_object($propiedad);
            }
            //Free memory
            $result->free();

            return $array;    

        }else{
            debugear("Dont work function find becase the query is false");
        }
    }
    
    //Searchers 
    public static function all(){
        $query="SELECT *FROM ".static::$name_tabla;
        $result=self::consultSQL($query);
        // debugear($query);
        return $result;
    }

    public static function find($id){
        
        $query="SELECT *FROM ".static::$name_tabla ." WHERE id=${id}";
        $result=self::consultSQL($query);
        // debugear($query);
        return  array_shift($result);
    }

    public static function countRows($columna,$condition="id>0"){

        $columna_sanitizada = self::$db->escape_string($columna);
        $query="SELECT COUNT(" . $columna_sanitizada .") ". "FROM ". static::$name_tabla  ." WHERE ".$condition; 
        $resultado=self::$db->query($query);

        if($resultado->num_rows){
            $print=$resultado->fetch_assoc();
            $resultado=$print["COUNT(${columna})"];
            return $resultado;
        }

    }

}