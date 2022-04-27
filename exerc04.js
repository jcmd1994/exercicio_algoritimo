var  readlineSync =require('readline-sync'); 

let lucroAnual=Number(readlineSync.question( 'Qual o lucro anual de uma empresa? ' ));

const lucroAnual1 = lucroAnual/23*100;

console.log("Lucro anual da empresa:",lucroAnual1,)






/*
Previsão de vendas – Sabendo que o lucro anual de uma empresa é, tipicamente,
23% do total de vendas, crie um algoritmo que solicite ao usuário entre com o
valor projetado do total de vendas e, em seguida, calcule e exiba o lucro que
deve ser obtido com esse valor.
Lembrete: 23% =
23
100
= 0,23
*/

