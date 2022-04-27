var readlineSync = require('readline-sync');

let dias = Number(readlineSync.question('Quantos dias são?'));

const minutos = dias*60;
const horas = minutos*24;


console.log("São:",minutos,"min","equivalem",horas,"horas",dias,"e","dias");
















/*Conversão de unidades (minutos para horas e dias) - Escreva um programa que
aceite uma quantidade de minutos e o converta em horas e dias. Por exemplo,
6.000 minutos equivalem a 100 horas e é igual a 4.167 dias.
*/
