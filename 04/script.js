  /* 
    Solicitar o nome do aluno e as 3 notas
    do bimetsre e calcular a media daquele aluno

    Se o aluno passou no bimestre da os parabéns,

    Se o aluno não passou no bimestre, motivar o aluno dar o melhor na prova
    de recuperação
    */

    alert(`Iremos somar a media dos alunos`);
    let student = prompt(`Qual nome do(a) aluna(a)`);
    let Nota1 = prompt(`Digite a nota do primeira prova`);
    let Nota2 = prompt(`Digite a nota do segundo prova`);
    let Nota3 = prompt(`Digite a nota do terceiro prova`);
    let Nota4 = prompt(`Digite a nota do quarta prova`)

    let media = (Number(Nota1) +  Number(Nota2)  + Number(Nota3) + Number(Nota4)) / 4

    media = media.toFixed(2)
    
    let resultado = media >= 6

    if (resultado) {
      alert(`Parabéns, ` + student + `! Sua média foi de: ` + media);
    }else if(media <= 3) {
      alert(`Reprovado`)
    }else{
      alert(student + ` estude mais para sua prova de recuperação! Sua média foi de: ` + media);
    }
     