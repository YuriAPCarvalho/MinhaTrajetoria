import { removehifens, removePontos } from "./export.js"

let clientes = []

function cadastrar() {
    let novoCliente = {}
    novoCliente.nome = document.getElementById("nome").value
    novoCliente.cpf = document.getElementById("cpf").value
    novoCliente.cep = document.getElementById("cep").value
    novoCliente.numero = document.getElementById("numero").value
    novoCliente.limite = document.getElementById("limite").value

    novoCliente.cpf = removePontos(novoCliente.cpf)
    novoCliente.cpf = removehifens(novoCliente.cpf)

    clientes.push(novoCliente)
    listarCliente()
    alert("Deu certo!")

}

function listarCliente() {
    let tabelaCliente = document.getElementById("tabelaCliente")
    tabelaCliente.innerHTML = ""
    for (let i = 0; i < clientes.length; i++) {
        tabelaCliente.innerHTML += `
        <tr>
            <td>${clientes[i].nome}</td>
            <td>${clientes[i].cpf}</td>
            <td>${clientes[i].cep}</td>
            <td>${clientes[i].limite}</td>
        </tr>
        `
    }
}

document.getElementById("btnCadastrar").onclick = cadastrar