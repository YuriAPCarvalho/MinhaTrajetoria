let convidados = []

function inserir() {
    let nomeConvidado = document.getElementById("nomeConvidado").value

    if (nomeConvidado == "") {
        alert("Preencha o nome do convidado!")
    } else {
        convidados.push(nomeConvidado)
        limpar()
        imprimir()

    }
}

function imprimir() {
    let tabela = document.getElementById("tabela")
    let cacheTabela = ""
    tabela.innerHTML = ""

    for (let i = 0; i < convidados.length; i++) {

        cacheTabela += `<tr><td>${convidados[i]}</td><td><img src="apagar.png" onclick="remover(${i})"/></td></tr>`
    }
    tabela.innerHTML = cacheTabela
}

function limpar() {
    document.getElementById("nomeConvidado").value = ""
}

function remover(posicao) {
    if (confirm("Tem certeza que deseja remover este convidado?") == true) {
        convidados.splice(posicao, 1)
        imprimir()
    }
}

function buscar() {
    let buscarNome = document.getElementById("nomeConvidado").value

    if (buscarNome == "") {
        alert("Preencha o nome que deseja buscar!")
    } else {
        let i = 0
        let achou = false

        while (i < convidados.length && !achou) {
            if (convidados[i] == buscarNome) {
                alert(`O nome ${buscarNome} está na posição ${i +1}`)                
                achou = true
            }
            i++
        }

        if (!achou) {
            alert("Nome não encontrado")
        }
   }
}





