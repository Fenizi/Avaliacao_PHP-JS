<?php
class Aluno extends Pessoa {
function __construct($nome, $idade){
    parent::__construct($nome,$idade);
}
 function falar(){
    echo "perguntando...";
 }
}
?>
