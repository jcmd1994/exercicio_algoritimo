var  readlineSync  = require ( 'readline-sync' ) ;

console.log("Qual o café você tomara?");// escolha  do produto 
console.log("Café normal: 1.05 R$");
console.log("Café expresso: 1.52R$");
console.log("Capuccino: 2.17 R$");
console.log("Mocaccino: 2.36 R$");

const cafe = readlineSync.question( 'Qual opçao escolhida ?: ' );
console.log("ensira as moedas");
const moeda1  = Number(readlineSync.question( "Quantas moedas de 0,01 centavos?: "));// quantidade de moedas
const moeda5  = Number(readlineSync.question( "Quantas moedas de 0,05 centavos?: "));
const moeda10 = Number(readlineSync.question( "Quantas moedas de 0,10 centavos?: " ));
const moeda25 = Number(readlineSync.question( "Quantas moedas de 0,25 centavos?: " ));
const moeda50 = Number(readlineSync.question( "Quantas moedas de 0,50 centavos?: " ));
const moeda1r = Number(readlineSync.question( "Quantas moedas de 1,00 real?: " ));

let moeda01  =moeda1*0.01; // valor de moedas
let moeda05  =moeda1*0.05;
let moeda010 =moeda1*0.10;
let moeda025 =moeda1*0.25;
let moeda050 =moeda1*0.50;
let moeda01r =moeda1*1.00;



let valor = moeda01+moeda05+moeda010+moeda025+moeda050+moeda01r; // soma das moedas


let calculo =0;


/*Máquina de café – Uma máquina de vender café funciona da seguinte forma: o
usuário seleciona um tipo de café, insere algumas notas ou moedas na máquina e,
se a quantia paga for suficiente para pagar o face desejado, a máquina enche um
copo descartável com o tipo de café selecionado e dá o troco em moedas. Faça um
programa para imitar esse comportamento: o usuário informa qual é o tipo de café
desejado e o valor pago, e o seu programa deve dizer qual deve ser o valor do
Ministério da Educação
troco e quantas moedas são necessárias para pagar esse troco. Considere a
existência de moedas com os seguintes valores: R$ 1.00, R$ 0.50, R$ 0.25, R$
0.10, R$ 0.05 e R$ 0.01. A tabela de preços é dada abaixo:
Tipo de Café Preço
Café normal R$ 1,05
Café expresso R$ 1,52
Capuccino R$ 2,17
Mocaccino R$ 2,36
*/