const nota1 = 5;
const nota2 = 4.6;
const nota3 =  7;
const media =  (nota1 + nota2 + nota3)/3;
if ( media == 5){
    console.log("reprovado");
}
else if (media > 5 && media < 7) {
    console.log("recuperação");
}
else{
    console.log("passou dr semestre");
}