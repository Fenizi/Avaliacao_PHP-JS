<?php
require_once "Pessoa.php";
require_once "Professor.php";
require_once "Aluno.php";

 $pessoa = new Pessoa("Carlos", "17");

 echo $pessoa->getNome() . "<br>";
 echo $pessoa->getIdade() . "<br>";
 echo $pessoa->falar();


 $aluno = new Aluno ("Pedro", "18");

 echo $pessoa->getNome() . "<br>";
 echo $pessoa->getIdade() . "<br>";
 echo $pessoa->falar();

 
 $professor = new Professor ("Joao", "18");

 echo $pessoa->getNome() . "<br>";
 echo $pessoa->getIdade() . "<br>";
 echo $pessoa->falar();
?>