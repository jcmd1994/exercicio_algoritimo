var  readlineSync  = require ( 'readline-sync' ) ;

console.log("Cada alternativa acertada digite 's'e cada questão errada 'n");

questao1 = readlineSync.question ("Acerto a questão 1?");// vale 1 ponto
questao2 =readlineSync.question ("Acerto a questão 2?");// vale 10
questao3 =readlineSync.question ("Acerto a questão 3?");// vale 100
questao4 =readlineSync.question ("Acerto a questão 4?");// vale 1000
questao5 =readlineSync.question ("Acerto a questão 5?");// vale  10.000

let calculo = 0;


if(questao1 == "s"){
    var um = 1;
    calculo = calculo+um;
    console.log("Questão 1 está correta!");

}else if(questao1 == "n"){
    console.log("Questão está incorreta!");
    console.log("0");
}
if(questao2 == "s"){
    var dez =10;
    calculo= calculo+dez;
    console.log("questão 2 está correta!");
    console.log("10");


}else if(questao2 == "n"){
    console.log("Questão está incorreta !");
    console.log("0");

}
if(questao3 == "s"){
    var cem=100;
    calculo= calculo+cem;
    console.log("questão 3 está correta!");
    console.log("100");


}else if(questao3 == "n"){
    console.log("Questão está incorreta !");
    console.log("0");
}
if(questao4 == "s"){
    var mil =1000;
    calculo= calculo+mil;
    console.log("questão 4 está correta!");
    console.log("1000");


}else if(questao4 == "n"){
    console.log("Questão está incorreta !");
    console.log("0");
}
if(questao5 == "s"){
    var dezmil=10000;
    calculo= calculo+dezmil;
    console.log("questão 5 está correta!");
    console.log("10000");
    console.log('VAlor total',calculo)


}else if(questao5 == "n"){
    console.log("Questão está incorreta !");
    console.log("0");
    console.log('VAlor total',calculo)
}


else{
    console.log("resposta não aceitavel!");
}

























/*29. As provas de vestibular de uma determinada universidade são constituídas por
questões de múltiplas escolhas, com 5 alternativas. A primeira alternativa vale 1
ponto, a segunda 10 pontos, a terceira 100 pontos, a quarta 1000 pontos e a quinta
10.000 pontos. Cada candidato deve assinalar as alternativas que considerar
corretas, somando os pontos correspondentes e escrever essa soma como sendo a
resposta no gabarito da prova. Por exemplo, se numa questão um determinado
candidato assinalou as alternativas 1, 2 e 3 como sendo as corretas, então sua
resposta seria 1+10+100 = 111; se tivesse assinalado as alternativas 1, 3 e 5 a
resposta seria 1+100+10.000 = 10.101. Se nenhuma alternativa for assinalada,
então a resposta seria 0; se forem assinaladas todas as alternativas, a resposta seria
1 + 10 + 100 + 1000 + 10.000 = 11.111. Crie um programa que leia a resposta
fornecida pelo candidato na prova e diga quais foram as alternativas que ele
assinalou.*/