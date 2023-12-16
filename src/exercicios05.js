// 1- ler  o valor do salario base 
// 2- ler o valor da gratificação 
// 3- preciso somar anbos os valores em uma variavel chamada salario bruto
// 4- se o salario for menor que 1000, calcular o valor de IR sobre 15% do salario bruto
// 5- senao, calcular o valor de IR sobre 20% do salario bruto 
// 6- calcular o salario liquido que é a diferença entre o salario bruto e o IR
// 7- imprimir o salario liquido

const readline = require("readline-sync")
 
const salario_base = readline.questionFloat("Informe seu salario base: ");
const gratificacao = readline.questionFloat("Informe sua gratificacao: ");
 
let salario_bruto = salario_base + gratificacao
 
if (salario_bruto < 1000){
    ir = salario_bruto * (15 / 100)
}else {
    ir = salario_bruto * (20/100)
}
let salario_liquido = salario_bruto - ir
 
console.log(salario_liquido);