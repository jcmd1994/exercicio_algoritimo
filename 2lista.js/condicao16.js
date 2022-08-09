var   readlineSync  =  require  ( 'readline-sync'  ); 


 const apolice= Number( readlineSync . question ( "Qual o número de apolice:")) ;
 const cliente=( readlineSync . question ( "Qual é o nome do cliente:")) ;
 const sobrenome=( readlineSync . question ( "Qual é o sobrenome do cliente:")) ;
 const idade= Number ( readlineSync . question ( "Qual é a idade do cliente;")) ;

 console.log("Informe a data do vencimento do prêmio:");

const dia= Number ( readlineSync . question ( "Dia:")) ;
const mes= Number ( readlineSync . question ( "Mẽs:")) ;
const ano= Number ( readlineSync . question ( "ano:")) ;
const numeroDeAcidentes= Number ( readlineSync . question ( "número de acidentes nos últimos três anos:")) ;




if (apolice >= 1000 && apolice >= 9999) {
    console.log ("O número de apolice é:",apolice);
}


else{
    console.log("Numero da apolice é igual a :0")  
}
console.log("nome do cliente:",cliente);
console.log("sobrenome do cliente:",sobrenome);
console.log("idade do cliente:",idade);

if (mes >12 || mes <1){
    console.log("Data de vencimento 0/0/0'");;

}



    
    if((mes ==1 || mes == 3 || mes ==5 || mes ==7 || mes == 8 || mes== 10 || mes == 12) && (dia > 31 || dia <1)){
        console.log('Data de vencimento 0/0/0');
    }else if((mes ==4 || mes ==6 || mes == 9 || mes == 11) && (dia >30 || dia< 1)){
        console.log('Data de vencimento 0/0/0');
    }else if((mes == 2)&&( dia >28 || dia < 1)){
        console.log('Data de vencimento 0/0/0');
    }else{
        console.log("Data de vencimento "+dia+"/"+mes+'/'+ano);
    }

console.log('numero de acidentes em 3 anos :',numeroDeAcidentes);











    /*Uma seguradora comercializa apólices de seguro para automóveis. Crie um
algoritmo para essa seguradora para ler os dados de uma apólice de seguro,
incluindo o número da apólice, sobrenome do cliente, nome do cliente, idade, data
de vencimento do prêmio (mês, dia e ano) e número de acidentes de motorista nos
últimos três anos. Se um número da apólice inserido não estiver entre 1000 e 9999,
defina-a como sendo 0. Se o mês do vencimento não estiver entre 1 e 12 inclusive,
ou o dia não estiver correto para o mês (por exemplo, não entre 1 e 31 para Janeiro
ou 1 e 29 para fevereiro), defina o mês, dia e ano como 0. Após essas críticas,
exiba os dados da apólice.
*/