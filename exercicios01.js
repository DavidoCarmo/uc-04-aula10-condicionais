const readline = require("readline-sync")


const numero = readline.questionInt("informe um numero: ")

let A
let B
// se o numero for maior zero, ou seja positivo
//armazene em A
//senao, armazene em B

//if/else - se/senão


// se o numero for maior q zero 
// A variavel A recebe o numero 
// se nao a varialvel B recebe um numero
if(numero > 0) {
    A = numero;
}
else{
    B = numero
}
console.log ("valor de A:" ,A);
console.log ("valor de B:" ,B);
