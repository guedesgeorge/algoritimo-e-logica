  /*

  capturar 2 números
  e fazer operações matematicas
  de seoma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação mostrar um alerta com um resultado
  */

  let firstNumber = prompt("Digite o primeiro número:")
  let secondNumber = prompt("Digite o segundo numero:")

  firstNumber = Number(firstNumber)
  secondNumber = Number(secondNumber)

  const sum = firstNumber + secondNumber
  const sub = firstNumber - secondNumber
  const multi = firstNumber * secondNumber
  const div = firstNumber / secondNumber
  const rest = firstNumber % secondNumber

  alert("Soma: " + sum)
  alert("Subtraçao: " + sub)
  alert("Multiplicação: " + multi)
  alert("Divisão: " + div)
  alert("Resto da divisão: " + rest)