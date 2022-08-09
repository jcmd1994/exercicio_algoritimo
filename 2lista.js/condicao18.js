var   readlineSync  =  require  ( 'readline-sync'  ); 
const base01 =  Number  ( readlineSync . question ( "Qual valor de base01?")) ;
const altura01 =  Number  ( readlineSync . question ( "Qual valor da altura 01?")) ;
const base02 = Number  ( readlineSync . question ( "Qual valor de base02?")) ;
const altura02 = Number  ( readlineSync . question ( "Qual valor da altura 02?"));

calculoDeBase01= altura01*base01;
calculoDeBase02= altura02*base02;

if(calculoDeBase01 > calculoDeBase02){
    console.log("A base  um é maior que a base dois1");
}
else if(calculoDeBase02 > calculoDeBase01){
    console.log("A base 2 é maior que a 1!")
}
else if(calculoDeBase01 == calculoDeBase02){
    console.log("A bAse um e dois são iguais:")
}

 /*18. Sabendo que a área de um retângulo é o comprimento de sua base multiplicada
pela sua altura, construa um algoritmo que leia a base e a altura de dois retângulos
e informe ao usuário qual deles tem a área maior ou se ambas as áreas são iguais*/