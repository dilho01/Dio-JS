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


function comparar(p1, p2){
    if (p1.idade > p2.idade){
        console.log(p1.nome + ' e mais velho que e ' + p2.nome);
    } else if (p2.idade > p1.idade){
        console.log(p2.nome + ' e mais velho que e ' + p1.nome);
    }else{
        console.log(p1.nome + ' e ' + p2.nome + ' tem a mesma idade');
    }
};
const gabriel = new Pessoas('gabriel', 25);
const diego = new Pessoas('diego', 25);

comparar(gabriel, diego);