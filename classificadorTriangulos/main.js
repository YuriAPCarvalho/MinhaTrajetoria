function classificar() {

    let lado1 = document.getElementById("lado1").value
    let lado2 = document.getElementById("lado2").value
    let lado3 = document.getElementById("lado3").value

    if (lado1 == lado2 == lado3) {
        alert("Equilatero")
    } else if (lado1 == lado2 && lado1 != lado3 || lado1 == lado3 && lado1 != lado2 || lado2 == lado3 && lado1 != lado2 ) {
        alert("Isoceles")
    } else {
        alert ("Escaleno")
    }
}