<?php
namespace models;
use DateTime;

class Reservations extends ActiveRecord{

    protected static $name_tabla="reservations";
    protected static $columnas_DB=["id","date","time","people","state","created","idUser"];

    public $id;
    public $date;
    public $time;
    public $people;
    public $state;
    public $created;
    public $idUser;

    public function __construct( array $arg=[])
    {

        $fecha=new DateTime("now");

        $this->id = $arg["id"] ?? null;
        $this->date = $arg["date"] ?? null;
        $this->time = $arg["time"] ?? null;
        $this->people = $arg["people"] ?? null;
        $this->state = 0;
        $this->created=$fecha->format("Y-m-d H:i:s") ?? "";
        $this->idUser = $arg["idUser"] ?? null;

    }


    public function confirmValues(){

        if(!$this->date){
            static::$errors="The Date is required";
        }

        if(!$this->time){
            static::$errors="The Time is required";
        }

        if(!$this->people){
            static::$errors="The People is required";
        }

        if(!$this->idUser){
            static::$errors="The idUser is required";
        }

        return static::$errors;
    }




}