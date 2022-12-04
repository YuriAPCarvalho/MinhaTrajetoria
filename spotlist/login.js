function login() {
    location.href = "https://accounts.spotify.com/authorize?response_type=code&client_id=ece027bad2464bd184573e42c1efd9eb&redirect_uri=http://127.0.0.1:5500/spotlist/home.html&scope=playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public"
}

document.getElementById("btnEntrar").onclick = login