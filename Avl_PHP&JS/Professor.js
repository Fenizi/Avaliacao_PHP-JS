import { Pessoa } from "./Pessoa.js";

export class Professor extends Pessoa {
    disciplina;
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
        //this.nome = nome;
       // this.idade = idade; explicação
    }

    falar() {
        console.log("Professor" + this.nome +" dando aula...");
    }
}