class Pessoa{
    nome;
    peso;
    altura;
    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura =altura;
    }
    calculo(){
      return  this.peso/Math.pow(this.altura, 2);
    }
    classefica(){
        const imc = this.calculo();
        if (imc <= 18.5){
            return "Abaixo do peso";
        }
        else if (imc > 18.5 && imc <= 25){
            return "peso normal";
        }
        else if (imc > 25 && imc <= 30){
            return "acima do peso"
        }
        else if (imc > 30 && imc <= 40){
            return "peso normal";
        }
        else{
          return "obsesidade grave";
        }

    }
}

const jose = new Pessoa('jose', 70, 1.75);

console.log('o imc do ' + jose.nome + ' e ' + jose.calculo().toFixed(2));
console.log(jose.classefica())