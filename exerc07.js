var  readlineSync =require('readline-sync'); 

 let distancia=Number(readlineSync.question('Qual a velocidade do veiculo?'));

 const distancia5horas=distancia*5;
 const distancia8horas=distancia*8;
 const distancia12horas=distancia*12;
 

 console.log(" A distância percorida em 5 horas são de :",distancia5horas, " Horas")
 console.log(" A distância percorida em 8 horas são de :",distancia8horas," Horas ")
 console.log(" A distância percorida em 12 horas são de :",distancia12horas," Horas")





 /*7. Distância percorrida por um automóvel – Supondo que não haja acidentes ou
atrasos, a distância que um automóvel percorre numa rodovia pode ser
calculada com a seguinte fórmula:
Distância = velocidade × tempo
Sabendo disso, construa um algoritmo em que o usuário possa informar a
velocidade em que um carro está viajando e exiba as seguintes informações:
• A distância que o carro percorrerá em 5 horas;
• A distância que o carro percorre em 8 horas;
• A distância que o carro percorrerá em 12 horas.
 */