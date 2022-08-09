var  readlineSync  = require ( 'readline-sync' ) ; 
console.log("Escolha 1 para fazer a operação elevado ao quadrado!");
console.log("Escolha 2 para fazer a operação Da Raiz Quadrada");
console.log("Escolha 3 para fazer a operação Seno");
console.log("Escolha 4para fazer a operação Exponecial");
console.log("Sair do programa");
const numeral= Number(readlineSync.question( "Escolha um número 1 a 4:"));
if( numeral == 0){
    console.log("Foi feito com sucesso.")
}

else if (numeral == 1){
    console.log("Sua opção foi elevado ao quadrado");
}
else if(numeral == 2){
    console.log("Sua opção foi da raiz quadrada");
}
else if(numeral == 3){
    console.log("Sua opção foi de Seno");
}
else if(numeral == 4){
    console.log("Sua opção foi de exponecial");
}
else{
    console.log("erro");
}
 




/*13. Escreva um algoritmo que leia um número e exiba as seguintes opções na tela,
para o usuário escolher uma operação:
1. Elevar ao quadrado;
2. Raiz quadrada;
3. Seno;
4. Exponencial.

Depois que o usuário escolher uma opção digitando um número entre 1 e 4, efetue
a função matemática correspondente. O algoritmo deve verificar se a escolha
fornecida pelo usuário é válida (ou seja, é um número entre 1 e 4); se não for,
então deverá emitir uma mensagem de erro e finalizar.
Assumindo que a variável que você utilizará para armazenar o número que o
usuário informar seja chamada de vlNumero, as seguintes funções para lhe
permitem calcular as funções pedidas:

• sqr(vlNumero) para elevar ao quadrado;
• sqrt(vlNumero) para tirar a raiz quadrada;
• sin(vlNumero) para calcular o seno;
• exp(vlNumero) para calcular uma exponencial.

Após você criar seu algoritmo, modifique-o para incluir a seguinte opção no menu
do usuário:
0. Sair do programa.*/