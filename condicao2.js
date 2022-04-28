var  readlineSync =require('readline-sync'); 

 let numero1=Number(readlineSync.question('identifique o número ?'));
 let numero2=Number(readlineSync.question('identifique o número ?'));


 if(numero1 > numero2){
   console.log("O número 1 é maior que o segundo ",numero1);
 }
 else if(numero2 > numero1){
   console.log("O  segundo número è maior que o primeiro",numero2);
 }
 else if(numero1 == numero2){
   console.log("O primeiro número é ",numero1,"e o segundo número",numero2,"São exatamente iguais");

   }





   /*Escreva um algoritmo que leia dois números fornecidos pelo usuário e, conforme
o valor deles, exiba uma das seguintes mensagens: “O primeiro número informado
é o maior”, “O segundo número é o maior” ou “Ambos os números são iguais”.*/