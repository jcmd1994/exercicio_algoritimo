var  readlineSync  = require ( 'readline-sync' ) ; 

const datames= Number (readlineSync.question( 'Mês do nascimento?' ));
const nascimentodia= Number (readlineSync.question( 'Dia do nascimento?'));


let calculo01 =nascimentodia*datames;

if(calculo01 >= 10){
    console.log('Data de nascimento '+nascimentodia+'/'+datames+'/'+calculo01);
    console.log('E uma data magica');
}else{
    console.log('Data de nascimento '+nascimentodia+'/'+datames+'/'+calculo01);
    console.log('E uma data Não magica');

}


/*
Uma data no formato dd/mm/yy (ano representado por dois dígitos) é considerada
“mágica” quando o dia multiplicado pelo mês resulta no ano. Esse é o caso de
datas como 9/02/18, 2/09/18, 13/04/52 ou 2/10/20, por exemplo. Sabendo disso,
crie um algoritmo que leia um dia (em formato numérico), mês e ano com dois
dígitos, informando se é uma “data mágica” ou não.

*/
