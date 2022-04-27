var  readlineSync =require('readline-sync'); 

let mulher =Number(readlineSync.question('Quantas mulheres há sala?'));
let homens =Number(readlineSync.question('Quantos homens há sala?'));

const calculoMulher = mulher*100/8;
const calculoHomem = homens*100/9;

console.log("A porcentagem de mulheres na sala é de :",calculoMulher,"%");
console.log("A porcentagem de homens  na sala é de :",calculoHomem,"%",);







/*Porcentagens de homens e mulheres numa sala de aula – Crie um algoritmo
que solicite ao usuário que informe o número de homens e o número de
mulheres matriculadas numa classe e exiba os percentuais equivalentes a cada
sexo na tela.
Exemplo: suponha que existam 8 homens e 12 mulheres em uma classe
totalizando, portanto, 20 alunos na turma. A porcentagem de homens pode ser
calculada como 8/20 = 0,4 ou 40% e a porcentagem de mulheres pode ser
calculada como 12/20 = 0,6 ou 60%.
*/
