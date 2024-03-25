/*
Jogo da Advinhação

Apresente a mensagem ao usuario:
Advinha o número que eu estou pensando? Esta entre 0 e 10

Crie uma logica para gerar um número aleatorio
 e verificar se o numero digitado é o mesmo que o aleatorio gerado pelo
 sistema.

Enquanto o usuario não advinhar o numero, mostrar a mensagem:
Erro, tente novamente: 

Caso o usuario acerte o numero, apresentar a mensagem: Parabéns! 
Você advinhou o numero em x tentativas 

Substitua o x da mensagem, pelo numero de tenativas 
*/

let result = prompt(`advinhe o número que eu estou pensando? Esta entre 0 e 10`)

const randomNumber = Math.round(Math.random()  * 10)

let xAttenpts = 1;

while(Number(result) != randomNumber) {
 result = prompt(`Erro, tente novamente: `)
 xAttenpts++
}

alert(`Parabéns!  O numero que eu pensei foi ${randomNumber} e você advinhou em 
 ${xAttenpts} tentativas`)
