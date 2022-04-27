var  readlineSync =require('readline-sync'); 

 let acaoDoJose= Number(readlineSync.question('Qual valor de ações de Jose?'));

 const primeiraAcao= acaoDoJose*32.87*1000;
 const porcentagem= acaoDoJose*2/100;
 const duasSemanas=14*32.87;
 const porcetagemSegunda=100/2;
 

 console.log("quantia que José pagou pelas ações:",primeiraAcao,);
 console.log("O valor da comissão que José pagou ao seu corretor quando ele comprou as ações:",primeiraAcao+porcentagem,);
 console.log("A quantia pela qual José vendeu as ações:",primeiraAcao+porcentagem+duasSemanas,);
 console.log("A quantia de comissão que José pagou ao seu corretor quando ele vendeu as ações:",primeiraAcao+porcentagem+duasSemanas+porcetagemSegunda,);
 console.log("Mostre a quantia que José ganhou ao vender as ações e pagar o corretor:");














 /*
Negociação de Ações – No mês passado, José comprou e vendeu algumas ações
das Lojas Pedroso S.A., conforme detalhado abaixo:
a. No total, foram compradas 1000 ações. Naquele momento, José pagou
R$ 32,87 por cada ação;
b. Pela transação que efetuou, José teve que pagar uma taxa de corretagem
de 2% sobre o valor pago pelas ações;
c. Duas semanas depois, José vendeu todas as ações que adquirira por R$
33,92 cada uma;
d. Para poder efetuar a venda, José teve que pagar novamente uma
comissão de 2% do valor da transação.

Crie um algoritmo que imprima na tela as seguintes informações:

a. A quantia que José pagou pelas ações;
b. O valor da comissão que José pagou ao seu corretor quando ele comprou
as ações;
c. A quantia pela qual José vendeu as ações;
d. A quantia de comissão que José pagou ao seu corretor quando ele vendeu
as ações;
e. Mostre a quantia que José ganhou ao vender as ações e pagar o corretor.
Modificação: Após construir esse algoritmo, modifique-o para que o usuário possa
fornecer as seguintes informações:

a. A quantidade de ações compradas;
b. O valor de cada ação no momento da compra;

Ministério da Educação

c. O valor percentual da comissão na compra;
d. O valor de cada ação no momento da venda;
e. O valor percentual da comissão na venda.

A partir disso, imprima na tela as mesmas informações como pedido acima.
*/