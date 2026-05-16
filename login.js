function fazerLogin() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const btn = document.getElementById("btnLogin");
    const msg = document.getElementById("mensagemErro");

    msg.innerText = "";

    // validação vazia
    if (!usuario || !senha) {
        msg.innerText = "Preencha todos os campos!";
        return;
    }

    // loading no botão
    btn.innerText = "Entrando...";
    btn.disabled = true;

    setTimeout(() => {

        if (usuario === "admin" && senha === "123") {

            localStorage.setItem("logado", "true");
            window.location.href = "adm.html";

        } else {

            msg.innerText = "Usuário ou senha inválidos";

            btn.innerText = "Entrar";
            btn.disabled = false;
        }

    }, 800);

   
}

function voltarParaLoja() {
    window.location.href = "index.html";
}