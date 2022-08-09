var  readlineSync  = require ( 'readline-sync' ) ; 

const petshoop = Number(readlineSync.question( "Qual é o peso do seu cão?" ));
 
const calculoPesodoCao8kg= 50;
const calculoPesodoCao14kg= 70;
const calculoPesodoCao40kg= 100;
const calculoPesodoCao50kg = 125;

if( petshoop <= 50 ){
    console.log("O valor da hospedagem  cães com menos de 8kg é:",calculoPesodoCao8kg);;
}
else if( petshoop >= 8){
    console.log("O valor da hospedagem cães com 8 kg a 14 kg é:",calculoPesodoCao14kg);
}
else if( petshoop >= 15){
    console.log("O valor da hospedagem cães com 15 kg a 40kg é:",calculoPesodoCao40kg);
}
else if( petshoop < 40){
    console.log("O valor da hospedagem cães com mais de 40 kg é:",calculoPesodoCao50kg);
}



/*12. Um certo petshop também funciona como um hotel para cães. De acordo com a
tabela de preços desse estabelecimento, a taxa semanal para hospedagem é de R$
50.00 para cães com menos de 8 kg, R$ 70.00 para cães que pesem entre 8 e 15
kg inclusive, R$ 100.00 para cães entre 15 e 40 kg e R$ 125.00 para cães com
mais de 40 kg. Construa um algoritmo que leia o RG do proprietário de um cão,
bem como o nome, raça, idade e peso desse cão e, de posse desses dados, exibaum orçamento contendo todos os dados de entrada e o custo para hospedar o
animal por uma semana.*/