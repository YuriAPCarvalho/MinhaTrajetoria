let numeros = []

function adicionar() {
    novo = parseFloat(document.getElementById("novo").value)
    numeros.push(novo)
    inserir()

}

function inserir() {
    document.getElementById("adicionado").innerHTML = numeros
}

function ordenar() {
    numerosOrdenados = numeros.sort((a,b) => a - b)
    document.getElementById("ordenado").innerHTML = numerosOrdenados
}