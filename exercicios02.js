const readline = require("readline-sync")


const numero = readline.questionInt("informe um numero: ")

const resto = numero  % 2;


// se o resto for igual a zero, e PAR;
// se nao e IMPAR;

let par 
let impar 

if (resto == 0) {
 par = numero
}
 else{
    impar = numero
 }

 console.log("par:", par)
 console.log("impar:", impar)
