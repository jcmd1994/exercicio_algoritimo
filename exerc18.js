var readlineSync = require('readline-sync');

let polegadass =Number (readlineSync.question('Quantas polegadas de distância?'));

const caculoPolegadas = polegadass*63360;
const calculoPes= caculoPolegadas*0.000189394;


console.log("O valor polegadas em pés é:",caculoPolegadas,"e polegadas",+calculoPes,);
























/*Conversão de unidades (polegadas para pés) – Escreva um algoritmo que peça
ao usuário uma distância em polegadas e a transforme em pés e polegadas. Por
exemplo, 86 polegadas equivalem a 7 pés e 2 polegadas. Certifique-se de usar
constantes quando apropriado.
*/