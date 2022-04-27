var   readlineSync  =  require  ( 'readline-sync'  ); 
console.log("Classifique em equilatero,isosceles ou escaleno.");

const lado01 =  Number  ( readlineSync . question ( "Qual valor do primeiro lado?")) ;
const lado02 =  Number  ( readlineSync . question ( "Qual valor do segundo  lado?")) ;
const lado03 =  Number  ( readlineSync . question ( "Qual valor do terceiro lado?")) ;

if (lado01 == lado02 && lado01 == lado03){
    console.log("É um equilatero");
}
//isosceles lado 1
else if ((lado01 > lado02 || lado01 == lado03) && (lado02 == lado03)){
    console.log("É um esosceles");
}
//isosceles lado 2
else if((lado02 > lado01 || lado02 > lado03) && (lado02 == lado03)){
    console.log("É um esosceles");
}
//isosceles lado 3
else if((lado03 > lado01 || lado03 > lado02) && (lado01== lado02)){
    console.log("É um esosceles");
}
//escaleno lado 1
else if (lado01 > lado02 || lado01 > lado03){
    console.log("É um escaleno");
}
else if (lado01 < lado02 || lado01 < lado03){
    console.log("É um escaleno");
}
//escaleno lado 2
else if (lado02 > lado01 || lado02 > lado03){
    console.log("É um escaleno");
}
else if (lado02 < lado01|| lado02 < lado03){
    console.log("É um escaleno");
}
//escaleno lado 3
else if (lado03 > lado01 || lado03 > lado02){
    console.log("É um escaleno");
}
else if (lado03 < lado01|| lado01 < lado02){
    console.log("É um escaleno");
}




















/*Construa um algoritmo que, a partir do valor do comprimento dos três lados de
um triângulo, classifique-o em equilátero, isósceles ou escaleno. Lembre, um
triângulo é equilátero quando o comprimento de todos os seus lados for igual, é
isósceles quando apenas um dos lados tiver comprimento diferente e é escaleno
quando todos os lados tiverem comprimentos diferentes dos demais lados.
*/