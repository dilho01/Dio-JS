const vitor = {
    nome: "vitor 2",
    idade: 25,
    descrever: function () {
        console.log('meu nome e ' + this.nome +' e minha idade e ', + this.idade);
    }
};

console.log(vitor['nome']);
vitor.altura = 1.70;
console.log(vitor.nome);
console.log(vitor.idade);
console.log(vitor);
console.log(vitor.altura);
vitor.descrever();