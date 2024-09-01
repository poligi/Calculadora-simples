/*
Escreva um programa que simula uma calculadora simples.
Declare duas variáveis, num1 e num2, e atribua valores a elas (por exemplo, 10 e 5).
Declare uma variável operador e atribua uma operação (por exemplo, "+").
Use uma estrutura condicional para realizar a operação selecionada (adição,
subtração, multiplicação ou divisão).
Mostre o resultado no console.
*/

let num1 = 10
let num2 = 5
let operador = "*"
let resultado

if (operador === '+') {
    resultado = num1 + num2
} else if (operador === '-') {
    resultado = num1 - num2
} else if (operador === '*') {
    resultado = num1 * num2
} else if (operador === '/') {
    resultado = num1 / num2
} else {
    console.log('Operador iválido')
}

console.log(`Resultado: ${resultado}!`)