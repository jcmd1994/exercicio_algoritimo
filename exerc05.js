var  readlineSync =require('readline-sync'); 

 let metrosQuadrados=Number(readlineSync.question('Qual o valor em metros quadrados ?'));

 const calculoacre=metrosQuadrados*4.04686;
 const calculoDePesQuadrados=metrosQuadrados*43.560;
 const calculoDeHectares=metrosQuadrados/100;

 console.log("Qual valor de Acres:",calculoacre,)
 console.log("Qual valor em Pés Quadrados:",calculoDePesQuadrados,)
 console.log("Qual o valor de Hectares:",calculoDeHectares)











 /*
 5. Conversor de áreas de terra – Um acre de terra é equivalente a 4.046,86 m2
, a
43.560 ft2
(pés quadrados) e a 0,404686 hectares. Crie um algoritmo que solicite
ao usuário que informe a área de um terreno em metros quadrados e mostre as
áreas correspondentes em acres, pés quadrados e hectares.
*/