var  readlineSync =require('readline-sync'); 

 let churascaria=Number(readlineSync.question('Qual o valor da refeição?'));

 const refeição=churascaria;
 const gorjeta=churascaria*15/100;
 const imposto=churascaria+gorjeta+refeição;
 const valorTotalDaRefeicao=imposto;

 console.log('Valor da refeição:',refeição,"R$")
 console.log('Valor da gorjeta:',gorjeta,"R$")
 console.log('Valor da imposto:',imposto,"R$")
 console.log('Valor da valor total da refeição:',valorTotalDaRefeicao,"R$")







 









 /*
 10. Gorjeta, Imposto e Total Pago por uma Refeição – Crie um algoritmo que peça
para o usuário informar o valor de uma refeição num restaurante. A partir desse
valor, o algoritmo deverá calcular o valor da gorjeta (15% sobre o valor da
refeição), dos impostos (7% do valor da refeição) e o total a ser pago (valor da
refeição mais os valores da gorjeta e dos impostos). Ao final, o algoritmo deverá
exibir cada um desses valores e o total.
*/