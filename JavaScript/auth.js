async function login() {

    const usuario = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    };

    const response = await fetch("https://localhost:7141/api/Usuario/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    console.log("Status da API:", response.status);

    if (response.ok) {

        const data = await response.json();

        console.log("Dados recebidos:", data);

        alert("Login realizado!");

        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(data)
        );

        if (data.tipoUsuario === "Admin") {

            localStorage.setItem("logado", "true");
            localStorage.setItem("tipoUsuario", "adm");

            window.location.href = "adm.html";

        } else {

            window.location.href = "index.html";
        }

    } else {

        console.log("Login recusado pela API");

        alert("Email ou senha inválidos");
    }
}