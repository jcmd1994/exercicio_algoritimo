var   readlineSync  =  require  ( 'readline-sync'  ); 

const vendasBonus=Number (readlineSync .question ("Quanto o funcionário vendeu no mês?"));


if(vendasBonus <= 30){
    console.log("Menor ou igual que 30 vendas  o funcionário ganha:250,00R$");
}
else if (vendasBonus >= 31 &&  vendasBonus >= 80){
    console.log("menor ou igual que 31 vendas, menor  ou igual que 80 vendas , o funcionário ganha :500,00R$");
}
else if(vendasBonus > 80 && vendasBonus < 200 ) {
    console.log("Maior  que 80 vendas , e menor que 200 vendas o funcionário ganha :1.000 ");
}
else if (vendasBonus >= 200 ){
    console.log("Maior ou igual que 200 vendas  o funcionário ganha :2.000");
}

console.log("Muito feliz fiz sozinha !");


/*24. Uma loja deseja recompensar os seus empregados de acordo com o número de
vendas que eles realizaram num determinado mês. Crie um algoritmo que leia o
número de vendas de um empregado e calcule o seu bônus, conforme a seguir:
a. Se o número de vendas for menor que 30, o bônus é de R$ 250,00;
b. Se o número de vendas for maior que 31 e menor que 80, o bônus é de R$
500,00;
c. Se o número de vendas for maior que 80 e menor que 200, o bônus é de
R$ 1.000,00;
d. Se o número de vendas for 200 ou maior, o bônus é de R$ 2.000,00.*/