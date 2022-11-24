function verificar() { 
    numeroDigitado = document.getElementById("numero").value

    if (numeroDigitado % 2 == 0) {
        alert("O numero é par!")
    } else {
        alert("O numero é impar")
    }
}