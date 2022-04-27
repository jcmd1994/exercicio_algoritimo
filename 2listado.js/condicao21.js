var   readlineSync  =  require  ( 'readline-sync'  ); 

const cor1 =readlineSync.question( "Qual a primeira cor?") ;
const cor2= readlineSync.question ( "Qual a segunda cor ?") ;

if(cor1 == "vermelho" && cor2 == "azul"){
    console.log("Resultado obtido roxo!")
}
 else if(cor1 == "vermelho" && cor2 == "amarelo"){
    console.log("Resultado obtido laranja!")
}
else if(cor1 == "amarelo" && cor2 == "vermelho"){
    console.log("Resultado obtido laranja!")
}
else if(cor1 == "azul" && cor2 == "amarelo"){
    console.log("Resultado obtido verde!")
}
else if(cor1 == "amarelo" && cor2 == "azul"){
    console.log("Resultado obtido verde!")
}

  


/*21. Construa um algoritmo que, a partir de duas cores primárias fornecidas pelo
usuário determine qual cor seria obtida pela mistura delas. Para tanto, considere
as informações fornecidas abaixo:
As cores vermelho, azul e amarelo são chamadas de cores primárias porque
não podem ser obtidas a partir de outras cores e, quando misturadas,
resultam numa cor secundária, de acordo com as seguintes regras:
• vermelho + azul = roxo;
• vermelho + amarelo = laranja;
• azul + amarelo = verde.
/*Se o usuário inserir algo diferente de “vermelho”, “azul” ou “amarelo”, o
programa deverá exibir uma mensagem de erro. Caso contrário, o programa deve
exibir o nome da cor secundária resultante*/