var  readlineSync =require('readline-sync'); 

let brechoCompra  = Number (readlineSync.question( 'Qual o valor das roupas? : ' ));

   let calcularBrecho=0;
   let resultadoDoBrecho=0;


if (brechoCompra <= 50){
    calcularBrecho=brechoCompra*45/100;
    resultadoDoBrecho=calcularBrecho+BrechoCompra;


}else if(brechoCompra > 50){
    calcularBrecho=brechoCompra*30/100;
    resultadoDoBrecho=calcularBrecho+brechoCompra;


}

console.log('Valor da venda',resultadoDoBrecho);

/*
Um brechó revende produtos usados, e fixa o preço de venda de cada produto
conforme o valor de sua aquisição: se o preço de aquisição de um produto é menor
do de R$ 50.00, ele deve ser vendido por um preço 45% maior; caso contrário, o
lucro será de 30%. Sabendo disso, construa um algoritmo que leia o valor de
aquisição de um produto e mostre o seu valor de venda.*/