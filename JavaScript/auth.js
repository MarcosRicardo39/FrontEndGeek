function irParaLoginUsuario() {
    window.location.href = "../Html/user-login.html";
}

async function cadastrar() {

    const usuario = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    };

    const response = await fetch("https://localhost:7141/api/Usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "../Html/user-login.html";
    } else {
        alert("Erro ao cadastrar usuário");
    }
}