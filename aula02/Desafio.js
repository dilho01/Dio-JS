const etanol = 3.64;
const gasolina = 5.62;
const TipoCombustivel = etanol;
const consumo = 10;
const distancia = 1000;
 if (TipoCombustivel == gasolina) {
    const valorGasolina = (gasolina/consumo)*distancia;
    console.log(valorGasolina.toFixed(2));
 }
 else if (TipoCombustivel == etanol){
    const valorEtanol = (etanol/consumo)*distancia;
    console.log(valorEtanol.toFixed(2));
 }