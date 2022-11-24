let listaCompras = []

function adicionarItem() {
    let item = document.getElementById("item").value

    if (item == "") {
        alert("Campo item não preenchido!")
    } else {

        if (listaCompras.indexOf(item) == -1) {
            listaCompras.push(item)

            imprimir()
        } else {
            alert("Item já adicionado!")

        }
        limpar()
    }
}

function removerItem() {
    let itemRemover = document.getElementById("itemRemover").value

    let indiceRemover = listaCompras.indexOf(itemRemover)

    if (indiceRemover < 0) {
        alert("Item não encontrado!")
    } else {
        listaCompras.splice(indiceRemover, 1)

        alert("Item removido!")
        imprimir()
    }

    limpar()
}

function limpar() {
    document.getElementById("item").value = ""
    document.getElementById("itemRemover").value = ""
}

function imprimir() {
    document.getElementById("lista").innerText = listaCompras.join(" ")

}