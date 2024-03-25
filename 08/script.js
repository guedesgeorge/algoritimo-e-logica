



alert(`Iremos  somar a media dos alunos: `)
let aluno = prompt(`Digite o nome do aluno: `)
let Nota1 = prompt(`Digite a primeira nota: `)
let Nota2 = prompt(`Digite a segunda nota: `)
let Nota3 = prompt(`Digite a terceira nota: `)
let Nota4 = prompt(`Digite a terceira nota: `)

let media = (Number(Nota1) + Number(Nota2) + Number (Nota3) + Number (Nota4)) / 4

media = media.toFixed(2)

let resultado = media >= 6

if(resultado) {
  alert(`Parabens ` + aluno + ` sua media foi de: ` + media);

}else if(meida <= 3){
  alert(`Reprovado`)
}else(student + `Estude mais para sua prova de recuperação sua media doi de ` + media)