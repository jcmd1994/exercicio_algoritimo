var  readlineSync =require('readline-sync'); 

const nome= (readlineSync.question( 'Qual é seu nome?' ));
const idade= (readlineSync.question( 'Qual é sua idade?' ));
const endereco= (readlineSync.question( 'Qual é se endereço ,estado e Cep?' ));
const telefone= (readlineSync.question( 'Qual seu número de celular?' ));
const profissao= (readlineSync.question( 'Qual é sua profissão?' ));

console.log("seu nome?",nome);
console.log('Sua idade?',idade);
console.log("Seu endereço?",endereco);
console.log("Seu telefone?",telefone);
console.log("Sua profissão?",profissao);

