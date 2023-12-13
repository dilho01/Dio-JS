const precoCombustivel = 5.70;
const KmPorLitros = 10;
const DistanciaEmKm = 100;

const litrosConsumido = DistanciaEmKm / KmPorLitros;
const ValorGasto = litrosConsumido* precoCombustivel;
console.log(ValorGasto.toFixed(2));
