var  readlineSync =require('readline-sync'); 

let somaDeNumeros1= Number (readlineSync.question( 'Qual o valor primeiro numero? : ' ));

let somaDeNumeros2= Number (readlineSync.question( 'Qual o valor segundo numero? : ' ));

let somaDeNumeros3= Number (readlineSync.question( 'Qual o valor terceiro numero? : ' ));

if (somaDeNumeros1 + somaDeNumeros2 == somaDeNumeros3){
   console.log("Soma dos 3 números são iguais a :",somaDeNumeros1+somaDeNumeros2+somaDeNumeros3,);
}
else if( somaDeNumeros1 == somaDeNumeros2){
   console.log("A soma dos dois e iguais ao primeiro",somaDeNumeros1+somaDeNumeros2);
}
 
   













/*Escreva um algoritmo que leia três números fornecidos pelo usuário e mostre se
a soma de dois deles resulta no terceiro.*/