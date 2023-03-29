const precoGasolina = 4.50;
const gastoMedio = 10;
const distancia = 120;

const litrosConsumidos = distancia / gastoMedio;
const precoViagem = litrosConsumidos * precoGasolina;
console.log(precoViagem.toFixed(2));