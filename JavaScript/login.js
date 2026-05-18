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
            window.location.href = "../Html/adm.html";

        } else {

            msg.innerText = "Usuário ou senha inválidos";

            btn.innerText = "Entrar";
            btn.disabled = false;
        }

    }, 800);

   
}

function voltarParaLoja() {
    window.location.href = "../Html/index.html";
}

async function login() {

    const usuario = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    };

    const response = await fetch("https://localhost:7141/api/Usuarios/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    if (response.ok) {
        const data = await response.json();

        alert("Login realizado!");

        localStorage.setItem("usuarioLogado", JSON.stringify(data));

        window.location.href = "index.html";
    } else {
        alert("Email ou senha inválidos");
    }
}