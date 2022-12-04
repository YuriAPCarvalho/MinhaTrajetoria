let = listaFinalspace = []
async function buscarPersonagens() {
    let resultado = await fetch("https://finalspaceapi.com/api/v0/character/")
    listaFinalspace = await resultado.json()
    document.getElementById("lista").innerText = listaFinalspace   
    let stringBuffer = ""

    for (let i = 0; i < listaFinalspace.length; i++) {
        stringBuffer += `<li>${listaFinalspace[i].name}</li>`
        
    }
    
    let lista = document.getElementById("lista").innerHTML = stringBuffer
}  