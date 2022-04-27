
var readlineSync = require('readline-sync');

let milhas =Number (readlineSync.question('Quantas milhas de distância?'));

const polegadas1 = milhas*63360;
const pes= milhas*0.000189394;
const jardas= milhas/0.0005682;

console.log("O valor de polegadas é:",polegadas1,"polegadas",);
console.log("O valor de pés é:",pes,"pés",);
console.log("O valor de jardas é:",jardas,"jardas",);







/*17. Conversão de unidades (milhas para polegadas, pés e jardas) – Escreva um
algoritmo que utilize constantes para armazenar o número de polegadas, pés e
jardas contidas em uma milha (procure essas informações na Internet). Com
essas constantes, esse algoritmo deve pedir ao usuário que informe uma certa
distância em milhas e a converta para polegadas, pés e jardas, as quais devem
ser exibidas junto a um texto explicativo.
*/