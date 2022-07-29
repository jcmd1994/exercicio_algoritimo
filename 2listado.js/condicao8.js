var  readlineSync  = require ( 'readline-sync' ) ; 

const  dolar= Number(readlineSync.question( " o valor do dolar?" ));
const  centavo01= Number(readlineSync.question("Quantas moedas de 1 centavo?"));
const  centavo05= Number(readlineSync.question("Quantas moedas de 5 centavos?"));
const  centavo10= Number(readlineSync.question("Quantas moedas de 10 centavos?"));
const  centavo25= Number(readlineSync.question("Quantas moedas de 25 centavos?"));
const  centavo50= Number(readlineSync.question("Quantas moedas de 50 centavos?"));

 const centavo001=centavo01*0.01;//valor de 1 centavo.
 const centavoo005=centavo05*0.05;//valor de 5 centavos
 const centavo0010=centavo10*0.10;//valor de 10 centavos
 const centavo0025=centavo25*0.25;//valor de 25 centavos
 const centavo0050=centavo50*0.50;//valor de 50 centavos

 let calculoDoJogo=centavo001+centavoo005+centavo0010+centavo0025+centavo0050;

 if( dolar == calculoDoJogo){
     console.log("Parabéns jogador",calculoDoJogo)
     console.log(dolar,"de",calculoDoJogo);
 }
 else if (dolar == calculoDoJogo){
     
 }
     console.log("Gamer over!");
     console.log(dolar,"de",calculoDoJogo);
 


/* 
“Jogo do Dolar” – Construa um algoritmo onde o usuário informa o valor do dólar
no câmbio atual e um certo número de moedas de 1, 5, 10, 25 e 50 centavos de
real. Se o valor total das moedas for o necessário para comprar exatamente um
dolar, o programa deve parabenizar o usuário por ganhar o jogo. Caso contrário,
o programa deve exibir uma mensagem indicando se o valor inserido foi maior ou
menor do que o necessário.
Exemplo: se o dólar estiver a R$ 3.78, e o usuário informar 3 moedas de 1 centavo,
uma de 5 centavos, duas de 10 centavos, duas de 25 centavos e 6 de 50 centavos,
ele ganha o jogo. O mesmo aconteceria se ele informasse 3 moedas de 1 centavo,
13 de 25 centavos e uma de cinquenta centavos.
*/
