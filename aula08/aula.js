const notas = [];

notas.push(6);

notas.push(4);

let soma = 0;

for(let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + notas
}

const media = soma / notas.length;
console.log(media);