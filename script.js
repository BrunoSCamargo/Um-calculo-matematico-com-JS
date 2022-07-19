let firstNumber = Number(prompt("Digite o Primeiro Numero:"))
let secondNumber = Number(prompt("Digite o Segundo Numero:"))


const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const resDiv = firstNumber % secondNumber

alert("soma: " + sum)
alert("subtração: " + sub)
alert("multiplicação: " + mult)
alert("divisão: " + div)
alert("resto da Divisão: " + resDiv)

if (sum % 2 == 0) {
  alert("Par")
} else {
  alert("Impar")
} 


if (firstNumber != secondNumber) {
  alert("A soma dos dois Numeros são diferentes")
} else {
  alert("A soma dos dois Numeros são iguais")
}