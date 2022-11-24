function salvar() {
    /* 
     let nome = document.getElementById("nome").value
     let email = document.getElementById("email").value
     let idade = document.getElementById("idade").value
     let tipo = document.querySelector("input[type=radio]:checked")
   */
    let nome = document.formulario.nome.value
    let email = document.formulario.email.value
    let idade = document.formulario.idade.value
    let tipo = document.formulario.tipo.value

    let erro = ""

    if (nome == "") {
        erro += "nome,"
    }
    if (email == "") {
        erro += "email,"
    }
    if (idade == "") {
        erro += "idade,"
    }
    if (tipo == "") {
        erro += "tipo,"
    }
    if (erro != "") {
        alert("Os campos: " + erro + "não foram preenchidos corretamente.")
    } else {
        alert("Tudo certo!")
    }
}

