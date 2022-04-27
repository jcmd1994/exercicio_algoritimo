var  readlineSync =require('readline-sync'); 

let cokies=Number(readlineSync.question('Quantos cokies você deseja fazer?'));

const xicaraAcucar= cokies*1.5/1000;
const xicaraManteiga= cokies*1/1000;
const xicaraFarinha= cokies*2.75/1000;


console.log("São usados xicaras de açucar:",xicaraAcucar,"gramas",);
console.log("São usados xicaras de mateiga:",xicaraManteiga,"gramas",);
console.log("São usados xicaras de farinha :",xicaraFarinha,"gramas",);







/*Ajustador de Ingredientes – Uma receita de biscoito exige os seguintes
ingredientes para produzir 48 unidades:
a. 1,5 xícaras de açúcar
b. 1 xícara de manteiga
c. 2,75 xícaras de farinha
Crie um algoritmo que pergunte ao usuário quantos cookies ele deseja fazer e
calcule a quantidade correspondente dos ingredientes.
Exemplo: as quantidades listadas servem para fazer 48 unidades. Se o usuário
quisesse produzir 96 unidades (ou seja, o dobro de 48) as quantidades dos
ingredientes devem ser dobradas: 3 xícaras de açúcar, 1 xícara de manteiga e 4,5
xícaras de farinha..
*/
