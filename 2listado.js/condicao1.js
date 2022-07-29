var readlineSync  =  require  ('readline-sync'); 

console.log("identifique o número 1?");
console.log("identifique o número 2?");
console.log("identifique o número 3?");
console.log("identifique o string1?");
console.log("identifique o string2?");
console.log("identifique o string3?");

const numero1 = 300 ;
const numero2 = 100;
const numero3 = 5;
const string1 = "Rinoceronte";
const string2 = "Zebra" ;

if (numero1 == numero3){
    console.log("falso",numero1);
}
else if(numero1 > numero3){
    console.log("verdadeiro");
}
else if(numero2 < numero3){
    console.log("falso",numero2);
}
else if(numero1 == string1){
    console.log("ilegal",numero1);
}
else if(numero1 == "Um"){
    console.log("falso",numero1);
}
else if(numero1 == "Trezentos"){
    console.log("falso",numero1);
}
else if(numero1 == "300"){
    console.log("verdadeiro",numero1);
}
else if(string2 == "Dois"){
    console.log("falso",string3);
}
else if(string1 =="Rinoceronte"){
    console.log("verdadeiro",string1);
}
else if(string3 <   string3 < "Rinoceronte"){
    console.log("ilegal",string3);
}
else if (string3 < string3 > "Rinoceronte" || numero1 > 1000){
    console.log("ilegal",string3);
    console.log("falso",numero1);
}

else if (numero2 <= numero1 / 3){
    console.log("falso",numero2);
}
else if (numero1 >= 200){
    console.log("falso",numero1);
}
else if (numero1 >= numero2 + numero3){
    console.log("verdadeiro",numero1);
}
else if (numero1 > numero2 && numero1 < numero3){
    console.log("verdadeiro",numero1);
    console.log(" O número 1 não é menor que 3",numero1,);
}
else if (numero1 == 100 && numero1 > numero3){
    console.log("falso",numero1);
    cconsole.log("verdadeiro porque o ",numero1,"é maior que o ",numero3);
}
else if (numero1 < 10 && numero3 > 10){
    console.log("falso",numero1);
    console.log("verdadeiro pois",numero3,"é maior que o número 10");
}
else if (numero1 = 30 && numero2 == 100 || numero3 ==100){
    console.log("falso",numero1);
    console.log("verdadeiro pois",numero2,"é igual a 100");
    console.log("falso porque o",numero3,"não 100")
}


/*1. Considere as variáveis abaixo, inicializadas como segue:
numero1 = 300 numero2 = 100 numero3 = 5
string1 = "Rinoceronte" string2 = "Zebra" string3 = "bug”
Para cada uma das seguintes expressões booleanas, classifique-a como
Verdadeira, Falsa ou Ilegal.*/