var  readlineSync  = require ( 'readline-sync' ) ; 

const gramasKilos= Number(readlineSync.question( 'Imforme os ou gramas: ' ));

let calculo= 0;

if (gramasKilos <= 0.5){
    console.log('Gisele pagará R$:1,10 pela encomenda',gramasKilos)
}

else if (kilosgramas > 0.5 && kilosgramas <= 2.0){
    console.log("Gisele pagará R$:2,20 pela encomenda",gramasKilos)
}

else if (kilosgramas > 2.0 && kilosgramas < 10.0){
    console.log("Gisele pagará R$:3,70 pela encomenda",gramasKilos)
}

else if (gramasKilos >= 10.0){
    calculo = 5.0+3.8;
    console.log('preço da encomenda R$:5,00 + R$:3,80 pelo peso que ultrapassa 10kg');
    console.log('Total a pagar R$:',calculo);
}

/*

Crie um algoritmo para uma empresa de transportes que, a partir do peso de uma
encomenda fornecida pelo usuário, calcule o preço da remessa conforme a
seguinte tabela:
Peso da encomenda Valor
500 gramas ou menos R$ 1,10
Mais de 500 gramas, mas não mais que
2 quilos

R$ 2,20
Mais de 2 quilos, mas não mais de 10
quilos

R$ 3,70

Mais de 10 quilos R$ 5,00 mais R$ 3,80/kg pelo peso

que ultrapassar 10 Kg
*/