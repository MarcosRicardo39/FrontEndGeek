function finalizarCompra() {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    fetch("https://localhost:7141/api/Pedidos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(carrinho)
    })
        .then(response => {
            if (response.ok) {
                alert("Compra finalizada com sucesso!");
                localStorage.removeItem("carrinho");
                window.location.href = "index.html";
            } else {
                alert("Erro ao finalizar compra");
            }
        });
}