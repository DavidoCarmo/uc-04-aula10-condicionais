const readline = require("readline-sync")
 
//ENTRADA
const altura = readline.questionFloat("Informe sua altura (Ex 1.82): ");
const sexo = readline.question("Informe seu sexo(Masculino ou Feminino): ");
 
//PROCESSAMENTO
//Validar qual é o sexo
let peso_ideal = 0
if (sexo.toLowerCase == "masculino") {
    peso_ideal = (72.7 * altura) - 58;
    console.log("Calculou masculino")
} else {
    peso_ideal = (62.1 * altura) - 44.7;
    console.log("Calculou feminino")
}
//SAÍDA
console.log(`O seu peso ideal é ${peso_ideal}`)