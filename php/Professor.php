<?php
class Professor extends Pessoa {
    function __construct($nome, $idade){
        parent::__construct($nome,$idade);
    }
     function falar(){
        echo "dando aula...";
     }
    }
    ?>