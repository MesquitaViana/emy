function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Macaquinha" && password === "02112022") {
        window.location.href = "flower.html";
    } else {
        alert("Tenta novamente, Dica: Esse presente e para qual data? E qual foi o principal apelido?");
    }
}
