var readlineSync = require ('readline-sync');
let pt1 =Number(readlineSync.question ('Quanto partido do PT recebeu?'));
let pcdb2 =Number(readlineSync.question ('Quanto partido do PCDB recebeu?'));
let pv3 =Number(readlineSync.question ('Quanto partido do PV recebeu?'));


const bolsonaro=pt1*80;
const dilma=pcdb2*70;
const marina=pv3*60;


console.log("Porcentagem dos votos do BOZO:",bolsonaro,"%");
console.log("Porcentagem dos votos do Diminha:",dilma,"%");
console.log("Porcentagem dos votos do Marininha:",marina,"%");










/*Percentual de votos – Escreva um algoritmo que aceite os nomes de três
partidos políticos e o número de votos que cada um recebeu na última eleição
para prefeito. Exibir a porcentagem de votos que cada partido recebeu.
*/
