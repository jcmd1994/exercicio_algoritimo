var  readlineSync  = require ( 'readline-sync' ) ; 

const diaa= Number(readlineSync.question( "Quantos segundos são?" ));

const minutos = diaa*60;
const horas = 24;
const calculoDeHoras= minutos*horas;
const dias= 24*365+minutos;



if(60 == 60){
    console.log("O valor de mais de um  minuto  :",minutos,"segundos");
}
else if( 60 <= 60){
    console.log("O valor maior ou igual a 60 é:",minutos,"segundos");
}
else if(60 >= 3.600){
    console.log("O valor de horas:",calculoDeHoras,"minutos",minutos)
}
else if(60 >= 86.400){
    console.log("O valor de dias :",dias,"horas",calculoDeHoras,"minutos",minutos);
}







/*11. Sabendo que há 60 segundos em um minuto, 3.600 segundos em uma hora e
86.400 segundo em um dia, crie um algoritmo que a partir de uma determinada
quantidade de segundos fornecida pelo usuário, converte-a da seguinte maneira:
• Se a quantidade de segundos for maior ou igual a 60, o programa deverá
exibir o número de minutos equivalente;
• Se a quantidade de segundos for maior ou igual a 3.600, o programa deverá
exibir o número de horas equivalente;
• Se a quantidade de segundos for maior ou igual a 86.400, será exibir o
número de dias equivalente.*/