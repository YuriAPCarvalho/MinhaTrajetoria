let clientID = "ece027bad2464bd184573e42c1efd9eb"
let clientSecret = "7334022a77b84770b6d251e0b2087394"

async function carregarPlaylists() {
    let playlistSection = document.querySelector(".playlists")
    let params = new URLSearchParams(location.search)
    let codAutorizacao = params.get("code")
    alert(codAutorizacao)

    let body = new URLSearchParams()
    body.append("grant_type", "authorization_code")
    body.append("code", codAutorizacao)
    body.append("redirect_uri", "http://127.0.0.1:5500/spotlist/home.html")

    let resposta = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Authorization": "Basic " + btoa(clientID + ":" + clientSecret)
        }, 
        body: body
    })
    let respostaCorpo = await resposta.json()
    let token = respostaCorpo.access_token

    let respostaUsuario = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type" : "application/json"
        }
    })
    let usuario = await respostaUsuario.json() 

    let respostaPlaylists = await fetch(`https://api.spotify.com/v1/users/${usuario.id}/playlists`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type" : "application/json", 
        }
    })

    let respostaPlaylistsCorpo = await respostaPlaylists.json()
    console.log(respostaPlaylistsCorpo)
}

document.body.onload = carregarPlaylists()
