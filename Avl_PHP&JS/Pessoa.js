export class Pessoa {

    #nome;
    idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.idade = idade;
    }

    getNome() {
        return "Me chamo " + this.#nome + " e sou uma pessoa!";
    }

    getIdade() {
        return "Tenho " + this.idade + " anos";
    }

    setNome(novoNome) {
        if (this.idade >= 18) {
            this.#nome = novoNome;
            console.log("Meu novo nome agora é " + this.nome + "!");
        } else {
            console.log("Não possui idade suficiente");
        }
    }

    falar() {
        console.log("Pessoa[" + this.#nome + "] falando...");
    }
}
