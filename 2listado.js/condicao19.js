var   readlineSync  =  require  ( 'readline-sync'  ); 

const balinhaInteira1=Number( readlineSync . question (" Qual valor da balinha inteira 1?:"));
const balinhaInteira2=Number( readlineSync . question ("Qual valor da balinha inteira 2?:"));

calculo1=balinhaInteira1*balinhaInteira2;
calculo2=balinhaInteira2*balinhaInteira1;

if(calculo1 > calculo2){
    console.log("A balinha inteira é maior que a balinha inteira 2");
}
else if(balinhaInteira1 > balinhaInteira2){
    console.log("A balinha 1 é maior que a 2!")
}
else if(balinhaInteira2 > balinhaInteira1){
    console.log("A balinha 2 é maior que a balinha 1!")
}
else if(calculo1 == calculo2){
    console.log("As balinhas tem valores iguais!")
}















/*Faça um algoritmo que leia dois números inteiros e os armazene em duas variáveis
inteiras, digamos, nrA e nrB. Após compará-las, o algoritmo tem que garantir que
o menor valor fique armazenado em nrA e o maior em nrB.*/