var  readlineSync  = require ( 'readline-sync' ) ; 

const newtos= Number(readlineSync.question( " O objeto pesa quanto?" ));

const calculoDeNewtos1=newtos*9.8;
const calculoDeNewtos2=calculoDeNewtos1+1000;


if (newtos == 9.8){
    console.log("valor de newton:",calculoDeNewtos1);
}
else if(newtos >1000){
    console.log("Muito pesado o valor de newtos:",calculoDeNewtos2);
}
else if(newtos < 1000){
    console.log("valor leve de newtos:",calculoDeNewtos2);
}



/*Os cientistas medem a massa de um objeto em quilogramas e seu peso em
newtons. O peso em Newtons de um objeto pode ser calculado a partir de sua
massa por meio da seguinte fórmula:

Peso = Massa × 9,8

Crie um algoritmo que leia a massa de um objeto e, em seguida, calcule seu peso.
Se o objeto pesar mais de 1.000 Newtons, exiba uma mensagem indicando que é
muito pesado. Se o objeto pesar menos de 10 Newtons, exiba uma mensagem
indicando que está muito leve.*/