var   readlineSync   =  require  (  'readline-sync'  )  ; 

let temperatura= Number( readlineSync . question('Qual a temperatura?:'));

const fahrenheit= temperatura * 9 / 5 + 32;
const celsius= temperatura - 32;
const celsius1= celsius * 5 / 9;


console.log('Temperatura em fahrenheit:',fahrenheit )
console.log('Temperatura em celsius:',celsius1 )
console.log("Temperatura total:",celsius)