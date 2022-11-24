notasAluno = []

function adicionar() {
    let notaS = document.getElementById("notaAluno").value
    let nota = parseFloat(notaS)
    notasAluno.push(nota)
    inserirNotas()

    if (notasAluno.length > 1 ) {
      inserirMaiorNota() 
      inserirMenorNota()
      inserirMedia()
      situacaoAluno()
    }
}

function inserirNotas() {
    document.getElementById("listaNota").innerText = notasAluno.join(" , ")
}

function inserirMaiorNota() {
    maiorNota = Math.max.apply(null,notasAluno)
    document.getElementById("maiorNota").innerText = maiorNota
}

function inserirMenorNota() {
    menorNota = Math.min.apply(null,notasAluno)
    document.getElementById("menorNota").innerText = menorNota
}

function inserirMedia() {
    let soma = 0
    for (let i in notasAluno) {
        soma += notasAluno[i]
    }
    media = soma / notasAluno.length
    document.getElementById("media").innerText = media    
}

function situacaoAluno() {
    if (media < 4) {
        document.getElementById("situacao").innerText = "REPROVADO"
        document.getElementById("situacao").style.color = 'red'
    } else if (media >= 4 && media <= 7) {
        document.getElementById("situacao").innerText = "RECUPERAÇÃO"
        document.getElementById("situacao").style.color = 'yellow'
    } else {
        document.getElementById("situacao").innerText = "APROVADO"
        document.getElementById("situacao").style.color = 'green'
    }
}



    
    