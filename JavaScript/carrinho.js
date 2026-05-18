function carregarCarrinho() {

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const lista = document.getElementById("listaCarrinho");

    let total = 0;

    lista.innerHTML = carrinho.map((produto, index) => {

        total += Number(produto.preco);

        return `
            <div class="card">
                <img src="${produto.imagemUrl ?? 'https://via.placeholder.com/100'}" width="100">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco}</p>
                <button onclick="removerItem(${index})">Remover</button>
            </div>
        `;
    }).join("");

    document.getElementById("total").innerText =
        `Total: R$ ${total.toFixed(2)}`;
}