var  readlineSync =require('readline-sync'); 

 let produto1=Number(readlineSync.question('Qual valor da bola?'));
 let produto2=Number(readlineSync.question('Qual valor da boneca ?'));
 let produto3=Number(readlineSync.question('Qual valor do estojo?'));
 let produto4=Number(readlineSync.question('Qual valor da lapiseira?'));
 let produto5=Number(readlineSync.question('Qual valor da borracha?'));

 const bola=produto1;
 const boneca=produto2;
 const estojo=produto3;
 const lapiseira=produto4;
 const borracha=produto5;
 const subtotalDavendas=bola+boneca+estojo+lapiseira+borracha;
 const porcentagemDosProdutos=subtotalDavendas*6/100;


console.log("Valor da bola:",bola,"R$")
console.log("Valor da boneca:",boneca,"R$")
console.log("Valor da estojo",estojo,"R$")
console.log("Valor da lapiseira:",lapiseira,"R$")
console.log("Valor da borracha:",borracha,"R$")
console.log("Subtotal de vendas é:",subtotalDavendas,"R$")
console.log("porcentagem de vendas é:",porcentagemDosProdutos,"R$")










 /*6. Valores de uma Compra – Um cliente de uma loja está comprando cinco
produtos. Crie um algoritmo que solicite o preço de cada um desses produtos e,
em seguida, exiba o subtotal da venda, o valor do imposto e o valor total
(subtotal da venda mais o valor do imposto). Suponha que a alíquota do imposto
seja de 6% sobre o subtotal da venda.
*/