class Carro {
    marca;
    cor;
    combustivelKm;
    
    constructor (marca, cor,combustivelKm) {
        this.marca = marca;
        this.cor = cor;
        this.combustivelKm = combustivelKm;
    }

    calculo(km,precoCombustivel){
        return km * this.combustivelKm *precoCombustivel;
    }
}

const uno = new Carro('fiat', 'vermelho', 1/10);
const palio = new Carro('fiat', 'verde', 1/15);
 
console.log(uno.calculo(70, 5.60).toFixed(2));
console.log(palio.calculo(100, 5.60).toFixed(2));

