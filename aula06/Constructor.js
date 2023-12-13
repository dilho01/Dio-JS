class Pessoas {
    nome;
    idade; 
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    };
    descrever() {
        console.log('meu nome e ' + this.nome + 'a idade e ' + this.idade);
    }
};

const vitor = new Pessoas('vitor', 24);
const gabriel = new Pessoas('gabriel', 14);

vitor.descrever();

gabriel.descrever()