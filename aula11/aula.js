function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome e ${this.nome}`)
}
const gabriel = new Pessoa('gabriel', 22);
console.log(gabriel)
gabriel.falar();