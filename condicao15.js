var   readlineSync  =  require  ( 'readline-sync'  ); 

const temperatura01=  Number  ( readlineSync . question ( "Qual a temperatura do seu Estado?")) ;

if (temperatura01  <=  15 ) {
    console.log ("Muito frio!")
} else if (temperatura  >=  16  &&  temperatura  <=  22.9 ) {
    console.log("frio!")

} else if (temperatura01  >=  23,1  &&  temperatura  <=  25,9 ) {
    console.log("Agradável!")

} else if (temperatura01 >=  26.1  &&  temperatura  <=  30 ) {
    console.log("Quente!")

} else if (temperatura01 >=  31 ) {
    console.log("muito quente!")

} else if (temperatura01  ==  23 ) {
    console.log("Entre frio e quente!")

} else if (temperatura01  ==  26 ) {
    console.log ("Entre agradav e quente!")
}