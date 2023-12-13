function maiorIdade(idade){
    if(idade >= 18){    
        return " e maior de idade";
    }
    else if (idade < 18){
        return " e menor de idade";
    }
}
 console.log(maiorIdade(18));
 console.log(maiorIdade(17));