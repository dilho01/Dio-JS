class Pessoas {
    nome;
    idade;
    descrever() {
        console.log('meu nome e ' + this.nome + 'a idade e ' + this.idade);
    }
};

const vitor = new Pessoas();
vitor.nome = 'vitor';
vitor.idade = 25;

const gabriel = new Pessoas();
gabriel.nome = 'gabriel';
gabriel.idade = 25;

console.log(vitor);
console.log(gabriel);

gabriel.descrever()