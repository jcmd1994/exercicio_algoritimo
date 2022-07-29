var   readlineSync  =  require  ( 'readline-sync'  ); 
const cliente= ( readlineSync . question("Nome do cliente:"));
const orcamento=Number (readlineSync .question ("Qual o valor de orçamento:"));
const madeira=(readlineSync .question("Qual o tipo de madeira deseja angelim ou pinus:"));
const caracteres=(readlineSync .question("Quantos carcteres deseja:"));
const cor=(readlineSync .question("Qual a cor desejada braca,preta ou dourada:"));


let calcular = 0;
let branco = 0;
let preto = 0;
let dourado = Number(60);
let angelin = Number(450);
let pinus = Number(300);

console.log("Orçamento inicial:",orcamento,"R$");
console.log("Nome do cliente:",cliente);


if(madeira == "pinus"){
console.log("Orçamento para a placa de pinus é de :",pinus,"R$");

}else if(madeira == "angelin"){
console.log("Orçamento para a placa de angelins é de :",angelin,"R$");

if(caracteres <= 12){
 console('Orçamento sem nenhum adicional para caracteres!')
}else if(caracteres >12){
calcular = (caracteres-12)*15;

console.log("Orçamento para cada caracteres adicionais de: ",calcular);
if(cor == "dourado"){
console.log('O orçamento na cor dourada é:',dourado,"R$");

 }else{
 console.log("Não há adicionais por cor !");
}
}
}else{
    console.log("Material não aceitavel");

    console.log('Nenhum adicional por cor');
}




/*
Um carpinteiro esculpe placas personalizadas para estabelecimentos comerciais e
deseja um programa que faça orçamentos das placas que produz, considerando as
seguintes informações:
a. O valor mínimo de qualquer placa é de R$ 300,00;
b. Placas de angelim custam R$ 150,00 adicionais, mas placas de pinus não
possuem nenhum custo extra;
c. Frases com até 12 caracteres estão incluídas no valor mínimo; para frases
maiores, são cobrados R$ 15,00 por caractere;
d. Para placas com dizeres brancos ou pretos não se cobra adicional, mas se
ele contiver letras douradas, cobra-se R$ 60,00 a mais.
Baseado nessas informações, construa um algoritmo que leia o número de um
orçamento, o nome do cliente, tipo de madeira (angelim ou pinus), número de
caracteres da mensagem e a cor dos caracteres (branco, preto ou dourado). Ao
final, imprima todos osdados de entrada e o preço da placa orçada.
Após construir esse este algoritmo, tente modificá-lo para que o usuário informe
a mensagem que deverá ser esculpida ao invés do número de caracteres dessa
mensagem. Assim, para que o orçamento seja emitido, o próprio algoritmo deverá
contar quantos caracteres a mensagem contém, o que pode ser feito com a função
length. Por exemplo, se você armazenar a mensagem numa variável chamada
strMensagem, o número de caracteres será dado por length(strMensagem).
*/