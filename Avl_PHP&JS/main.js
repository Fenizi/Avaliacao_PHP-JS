
import { Pessoa } from "./Pessoa.js";
import { Professor } from "./Professor.js";
import { Aluno } from "./Aluno.js";

let pessoa = new Pessoa("Pedro", 18);
let professor = new Professor("Henrique", 30);
let aluno = new Aluno("Sena", 17);

console.log(pessoa.getNome());
console.log(pessoa.getIdade());
pessoa.falar();
pessoa.setNome("Lucas");

console.log("\n");

professor.falar();
professor.setNome("Wagner");

console.log("\n");

aluno.falar();
aluno.setNome("Lopes");
