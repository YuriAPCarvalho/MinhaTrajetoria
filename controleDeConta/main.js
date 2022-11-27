let controle = [0, 0, 0]

function adicionarReceita() {
    insereReceita = parseFloat(document.getElementById("receita").value)
    controle[0] += insereReceita

    exibirResultado()

}

function adicionarDespesa() {
    insereDespesa = parseFloat(document.getElementById("despesa").value)
    controle[1] += insereDespesa
    
    exibirResultado()

}

function exibirResultado() {
    document.getElementById("totalReceita").innerText = controle[0]
    document.getElementById("totalDespesa").innerText = controle[1]
    document.getElementById("balanco").innerText = controle[0] - controle[1]

}