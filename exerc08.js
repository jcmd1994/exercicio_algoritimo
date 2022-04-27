var  readlineSync =require('readline-sync'); 

 let municipio=Number(readlineSync.question('Qual o valor da compra?'));

 
 const estadual= municipio;
 const municipal= municipio;
 const estadual1= municipio*4/100;
 const municipal1=municipio*2/100;
 const totalDeVendasDoMunicipio= municipio+estadual+municipal;
 
 


 console.log("Valor de compra do Estadual:",estadual,"R$")
 console.log("Valor de compra do Municipal:",municipal,"R$")
 console.log("Valor de porcentagem do Governo Estadual:",estadual1,"%")
 console.log("Valor de porcentagem do Governo Municipal:",municipal1,"%")
 console.log("Valor total de compra:",totalDeVendasDoMunicipio,"R$")
 

 











 /*8. Imposto sobre vendas – Crie um algoritmo que solicite ao usuário que insira o
valor da compra. O programa deve calcular os impostos de vendas estadual e
municipal. Suponha que o imposto estadual sobre vendas seja de 4% e o imposto
estadual sobre vendas seja de 2%. O programa deve exibir o valor da compra, o
imposto estadual sobre vendas, o imposto municipal sobre vendas, o imposto
total sobre vendas e o total da venda (que é a soma do valor da compra mais o
imposto total sobre vendas).
Lembrete: 2% =
2
100
= 0,02 e 4% =
4
100
= 0,04
 */