var readlineSync = require('readline-sync');

let ovosDa=Number (readlineSync.question('Quantos ovos o cliente comprou?'));

const calculoDoOvoDuzia= ovosDa*3.25 ;
const calculoDoOvoUnidade=ovosDa*0.45;
const totalizandoOvos=calculoDoOvoDuzia+calculoDoOvoUnidade;

console.log("Total:","R$",totalizandoOvos,"cliente comprou",calculoDoOvoDuzia,"R$","duzias",calculoDoOvoUnidade,"R$","unidades de ovos");




















/*Preço dos ovos – A Granja Donizette vende ovos orgânicos vermelhos por R$
3,25 a dúzia ou R$ 0,45 por unidade avulsa. Sabendo disso, escreva um programa
que solicite ao usuário o número de ovos vendidos a um cliente e exiba o valor
total devido com uma explicação apropriada. Por exemplo, se um cliente
comprou 27 ovos, isso resulta em 2 dúzias e 3 ovos; ou seja: duas dúzias a R$
3,25 por dúzia e três ovos avulsos a 45 centavos cada, totalizando de R$ 7,85.
Nesse caso a explicação seria um texto como “O cliente comprou 27 ovos, o que
equivale a 2 dúzias e 3 ovos. O cliente deve pagar R$ 6,50 pelas 2 duzias e R$
1,35 pelos três ovos”.
*/