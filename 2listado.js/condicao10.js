var   readlineSync  =  require  ( 'readline-sync'  ); 

const jogos=  Number  ( readlineSync . question ( "Qual o valor comprado de jogos?")) ;

const calculo=0;
let valorDeCompra = jogos*150;

if(jogos >= 10){
    console.log("valor de compradores:",jogos,);
    console.log("Qual o valor da compra:",valorDeCompra,"R$");
    console.log("Desconto invalido!");
    console.log("Valor total de compras:",valorDeCompra,"R$");
}
else if(jogos >= 10 && jogos >= 19){
    
    calculo= valorDeCompra*20/100;
    console.log("valor de compradores:",jogos);
    console.log("Qual o valor da compra:",valorDeCompra,"R$");
    console.log("Seu disconto foi de :",calculo,"%");
    console.log("Valor total de compras:",valorDeCompra - calculo,"R$");  
}
else if(jogos >= 20 && jogos >= 49){

    calculo=valorDeCompra*30/100;
    console.log("valor de compradores:",jogos);
    console.log("Qual o valor da compra:",valorDeCompra,"R$");
    console.log("Seu disconto foi de :",calculo,"%");
    console.log("Valor total de compras:",valorDeCompra - calculo,"R$");  

}
else if(jogos >= 50 && jogos <= 99){
    
    calculo=valorDeCompra*40/100;
    console.log("valor de compradores:",jogos);
    console.log("Qual o valor da compra:",valorDeCompra,"R$");
    console.log("Seu disconto foi de :",calculo,"%");
    console.log("Valor total de compras:",valorDeCompra - calculo,"R$");  

}
else if(jogos >= 100){

    calculo=valorDeCompra*50/100;
    console.log("valor de compradores:",jogos);
    console.log("Qual o valor da compra:",valorDeCompra,"R$");
    console.log("Seu disconto foi de :",calculo,"%");
    console.log("Valor total de compras:",valorDeCompra - calculo,"R$");  
}




/*10. Uma loja de jogos vende cada jogo por R$ 150.00, mas concede descontos
conforme a quantidade comprada, conforme a tabela a seguir:
Quantidade de jogos comprados Desconto
10–19 20%
20–49 30%
50 a 99 40%
100 ou mais 50%
Crie um algoritmo que leia o número de jogos comprados, o valor original da
compra, o valor do desconto (se houver) e o valor total da compra após o desconto.
*/

