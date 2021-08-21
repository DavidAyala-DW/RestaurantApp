<?php 
namespace models;

class Credentials extends ActiveRecord {
    protected static $name_tabla="id_credencial";
    protected static $columnas_DB=["id","credencial"];

    public $id;

    public $credencial;

    public function __construct( array $arg=[])
    {
        $this->id=$arg["id"] ?? null;
        $this->credencial=$arg["credencial"] ?? null;

    }

}