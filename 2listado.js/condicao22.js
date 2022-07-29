var   readlineSync  =  require  ( 'readline-sync'  ); 
const totalDeAulasAssistidas=Number ( readlineSync . question ("Quantas aulas assistidas?"));
const totalDeNotasSemestrais=Number ( readlineSync . question ("notas Bimestrais ?"));
const totalDeFaltas=Number (readlineSync .question ("Total de Faltas ?"));



let  porcentagens =totalDeAulasAssistidas*25/100;
let calculoAulas1 =totalDeAulasAssistidas-porcentagens1;

if(totalDeAulasAssistidas >= calculoAulas1){
    console.log("APROVADO!");
    console.log("Total de aulas assistidas:",totalDeAulasAssistidas);
    console.log("Total de FALTAS :",totalDeFaltas);
    
}
if(notaSemestrais >= 28){
    console.log('AProvado');
    console.log('Nota Total :',notaSemestrais);
}else {
    console.log('Reprovado');
    console.log('Media Total não alcançada de 28');
}

console.log('Reprovado1');
console.log('total de faltas permitidas :',porcentagens);
console.log(calculoAulas1);












// 25% de falta 
//nota final deve ser 7.00 ou maior
//notas bimestrais
// total de aulas assistidas
// total de faltas
// Aluno reprovado!
// Aluno aprovado!



















/*Numa determinada escola, os critérios de aprovação são os seguintes:

• O aluno deve ter, no máximo, 25% de faltas;
• A nota final deve ser igual ou superior a 7,00.
Construa um algoritmo para ler as notas que um aluno tirou nos 4 bimestres, o
número total de aulas e o número de faltas, mostrando ao final a situação do aluno
como sendo “Aprovado”, “Reprovado por Faltas” e “Reprovado por média”,
considerando que a reprovação por faltas se sobrepõe a reprovação por nota.
Após construir esse algoritmo, crie mais duas versões dele para prever as seguintes
situações:
• Um aluno pode ficar em recuperação se possuir frequência suficiente
(superior a 75%) e média superior a 5 mas inferior a 7;
• Caso um aluno reprove por média e faltas, sua situação deve ser
“Reprovado por Média e Faltas” (ao invés de simplesmente
“Reprovado por Faltas” como antes).*/