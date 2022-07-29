var  readlineSync  = require ( 'readline-sync' ) ;

console.log('Escolha um número de 28 ha 48 boa sorte !');

const  numero   = Number (readlineSync.question( 'numero da sua sorte?: ' ));
let dia   = Math.floor(Math.random()*48);

if(dia == numero){
    console.log("Parabens você ganhou!",numero);
}else if(numero > dia){
    console.log("Resultado de lance",dia);
    console.log("Sua sugestão:",numero);
    console.log('Palpite alto');
}else if(numero < dia){
    console.log('resultado :',dia);
    console.log('Seu palpite :',numero);
    console.log('Palpite a baixo');
}

/*
Crie um algoritmo para um jogo de adivinhação, onde o usuário tenta adivinhar
um número aleatório gerado pelo computador. Esse número aleatório é inteiro e
não negativo, e deve ser escolhido dentro de uma faixa estabelecida pelo usuário
(por exemplo, o usuário pode estipular que esse número varie entre 0 e 10 ou entre
22 e 48, por exemplo). Após o usuário tentar adivinhar qual foi o número gerado,
o algoritmo deve escrever esse número e dizer se indicar se o palpite do jogador
estava correto, muito alto ou muito baixo.
Dica: Para gerar um número aleatório maior ou igual a zero e menor do que “x”,
utilize a função random(x).




































/*27. Crie um algoritmo para um jogo de adivinhação, onde o usuário tenta adivinhar
um número aleatório gerado pelo computador. Esse número aleatório é inteiro e
não negativo, e deve ser escolhido dentro de uma faixa estabelecida pelo usuário
(por exemplo, o usuário pode estipular que esse número varie entre 0 e 10 ou entre
22 e 48, por exemplo). Após o usuário tentar adivinhar qual foi o número gerado,
o algoritmo deve escrever esse número e dizer se indicar se o palpite do jogador
estava correto, muito alto ou muito baixo.
Dica: Para gerar um número aleatório maior ou igual a zero e menor do que “x”,
utilize a função random(x).)*/