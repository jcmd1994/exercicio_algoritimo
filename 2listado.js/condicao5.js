var  readlineSync =require('readline-sync'); 

 let livros=Number(readlineSync.question('Quantos livros o Jorge comprou?'));

    if(livros == 0){
    console.log("Se Jorge comprar 0 livros, ele ganhará 0 pontos.",livros);
    }
    else if(livros == 5){
     console.log("Se Jorge comprar 1 livro, ele ganhará 5 pontos.",livros);
    }
    else if(livros == 2){
        console.log("Se Jorge comprar 2 livros, ele ganhará 15 pontos",livros);
    }
    else if(livros == 3){
        console.log("Se Jorge comprar 3 livros, ele ganhará 30 pontos",livros);
    }
    else if(livros == 4){
        console.log("Se Jorge comprar 4 livros ou mais , ele ganhará 60 pontos",livros);
    }
    

   /* O programa de fidelidade de uma determinada livraria premia seus clientes de
acordo com o número de livros comprados a cada mês. Os pontos são atribuídos
da seguinte forma:
• Se um cliente comprar 0 livros, ele ganhará 0 pontos.
• Se um cliente comprar um livro, ele ganhará 5 pontos.
• Se um cliente comprar dois livros, ele ganhará 15 pontos.
• Se um cliente comprar 3 livros, ele ganhará 30 pontos.
• Se um cliente comprar 4 ou mais livros, ele ganhará 60 pontos.
Crie um algoritmo que leia o número de livros comprado por um usuário e exibao número de pontos correspondentes.
*/

