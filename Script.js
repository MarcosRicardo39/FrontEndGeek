async function buscarProdutos() {

    const response = await fetch("https://localhost:7141/api/ProdutosGeek");

    const produtos = await response.json();

    const lista = document.getElementById("listaProdutos");

    lista.innerHTML = "";

    produtos.forEach(produto => {

        lista.innerHTML += `
            <li>
                ${produto.nome} - R$ ${produto.preco}
            </li>
        `;
    });
}// JavaScript source code
