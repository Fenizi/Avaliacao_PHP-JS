class Professor extends Pessoa{

    matricula;
    disciplina;

    constructor(Nome,Idade, CPF, matricula,disciplina){
        super(Nome, Idade, CPF)
        this.matricula = matricula;
        this.disciplina = disciplina;
    }

    falar(){
        console.log("Matricula: " + this.matricula)
        console.log("Disciplina: " + this.disciplina)
    }
}