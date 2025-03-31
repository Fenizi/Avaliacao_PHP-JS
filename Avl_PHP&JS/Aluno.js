class Aluno extends Pessoa{

    RM; 
    Curso;

    constructor(Nome,Idade, CPF,RM,Curso){
        super(Nome, Idade, CPF)
        this.RM = RM;
        this.Curso = Curso;
    }

    falar(){
        console.log("RM: " + this.RM);
        console.log("Curso: " + this.Curso)
    }
}