let total = 0
function adicionar() {
    let frutaSelecionada = document.getElementById("fruta").value

    switch (frutaSelecionada) {
        case "banana":
            total += 2
            alert("Banana adicionada com sucesso! Total: R$ " + total)
            break;

        case "maca":
            total += 4
            alert("Maça adicionada com sucesso! Total: R$ " + total)
            break;

        case "abacate":
            total += 2.5
            alert("Abacaxi adicionado com sucesso! Total: R$ " + total)
            break;

        case "abacaxi":
            total += 3.5
            alert("Abacaxi adicionado com sucesso! Total: R$ " + total)
            break;

        default:
            alert("Adicione alguma fruta!")
            break;
    }

}
    function finalizar() {
        alert("Sua compra foi finalizada! Total: R$" + total)
        total = 0
    }