
var  readlineSync  = require ( 'readline-sync' ) ; 

const sms= Number(readlineSync.question( " Qual o valor do sms?" ));

const calculoSms1= 5.00 ;
const calculoSms2= sms*0.05;
const calculoSms3 = sms*0.10;
const calculoImpostoSms=100/12;


if(sms == 5.00){
    console.log("O valor do sms é :",calculoSms1);
}
else if (sms => 0.05){
    console.log("Plano básico é:",calculoSms2);
}
else if ( sms > 0.10){
    console.log("O valor de  mais de 180 mensagens é:",calculoSms3);
}
console.log("O de impostos federais e estuais",calculoImpostoSms);


























/*Uma certa operadora de telefonia móvel cobra R$ 5,00 mensais pelo seu plano
básico de transmissão de SMS (mensagens de texto), sendo que taxas adicionais
são cobradas conforme as regras abaixo:
a. As primeiras 60 mensagens estão incluídas no plano básico;
b. Se o usuário mandar mais de 60 mensagens, cada mensagem adicional
custará R$ 0.05, até o limite de 180 mensagens;
c. Acima de 180 mensagens, o valor de cada uma delas passa a R$ 0,10;
d. A soma dos impostos estaduais e federais amonta a 12% do valor de cada
fatura.
Com base nessas informações, crie um algoritmo para ler o número total de
mensagens enviadas por um usuário. Ao final, calcule o valor da conta e mostre
todos os dados, incluindo o valor da conta com e sem impostos.
*/