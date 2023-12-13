const preco = 100;
const debito = (preco * 10 / -100) + preco;
const pix = (preco * 15 / -100) + preco;
const duasvezes = preco;
const maisduasvezes =(preco * 10 / 100) + preco ; 
const formaPagamento = pix;
console.log("valor a pagar");
 if(formaPagamento == debito){
    console.log(debito);
 }
else if(formaPagamento == pix){
    console.log(pix);
 }
 if(formaPagamento == duasvezes){
    console.log(duasvezes);
 }
 if(formaPagamento == maisduasvezes){
    console.log(maisduasvezes);
 }
 