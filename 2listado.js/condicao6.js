var  readlineSync  = require ( 'readline-sync' ) ; 

const gramasKilos= Number(readlineSync.question( "Imforme kilos os ou gramas ex:1.5:" ));

let calculo= 0;

if (gramasKilos <= 0.5){// maior ou igual que 0,5 = 1,10
    console.log("Gisele pagará R$:1,10 pela encomenda",gramasKilos);
}

else if (kilosgramas > 0.5 && kilosgramas <= 2.0){// maior que 0,5 igual ou maior que 2kilos = 2,20
    console.log("Gisele pagará R$:2,20 pela encomenda",gramasKilos);
}

else if (kilosgramas > 2.0 && kilosgramas < 10.0){// maior que 2 kilos menor que 10 =3,70
    console.log("Gisele pagará R$:3,70 pela encomenda",kilosgramas);
}

else if (kilosgramas >= 10.0){// menor ou igual a 10 = 3,70 maior que 10 = 5 ultrapassar =5= 3,80
    calculo = 5.0+3.8;
    console.log('preço da encomenda R$:5,00 + R$:3,80 pelo peso que ultrapassa 10kg');
    console.log('Total a pagar R$:',calculo);
}

/*

Crie um algoritmo para uma empresa de transportes que, a partir do peso de uma
encomenda fornecida pelo usuário, calcule o preço da remessa conforme a
seguinte tabela:
##Peso da encomenda Valor
500 gramas ou menos R$ 1,10##

##Mais de 500 gramas, mas não mais que
2 quilos R$ 2,20##

##Mais de 2 quilos, mas não mais de 10
quilos R$ 3,70##

##Mais de 10 quilos R$ 5,00 mais R$ 3,80/kg pelo peso
que ultrapassar 10 Kg##
*/