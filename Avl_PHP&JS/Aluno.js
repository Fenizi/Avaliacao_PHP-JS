import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa {
    constructor(nome, idade) {
        super(nome, idade);
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log("Aluno "+ this.nome +" perguntado...");
    }
}