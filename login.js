function fazerLogin() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "123") {

        localStorage.setItem("logado", "true");

        window.location.href = "admin.html";

    } else {

        document.getElementById("mensagemErro").innerText =
            "Usuário ou senha inválidos";
    }
}