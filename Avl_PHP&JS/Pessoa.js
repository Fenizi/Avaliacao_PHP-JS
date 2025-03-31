class Pessoa{
    #Nome;
    Idade;
    CPF;

    constructor(Nome, Idade, CPF){
        this.#Nome = Nome;
        this.Idade = Idade;
        this.CPF = CPF;
    }

    falar(){
        console.log("Nome: " + this.#Nome );
        console.log("Idade: " + this.Idade);
        console.log("CPF: " + this.CPF);
    }

}