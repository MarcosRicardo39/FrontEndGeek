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

async function adicionarProduto() {

    const nome = document.getElementById("nomeProduto").value;
    const preco = document.getElementById("precoProduto").value;

    const novoProduto = {
        nome: nome,
        preco: parseFloat(preco)
    };

    const response = await fetch("https://localhost:7141/api/ProdutosGeek", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoProduto)
    });

    const dados = await response.json();

    console.log(dados);

    buscarProdutos();
}

async function atualizarProduto() {

    const id = document.getElementById("idAtualizar").value;

    const produtoAtualizado = {
        id: parseInt(id),
        nome: document.getElementById("nomeAtualizar").value,
        preco: parseFloat(document.getElementById("precoAtualizar").value)
    };

    await fetch(`https://localhost:7141/api/ProdutosGeek/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produtoAtualizado)
    });

    buscarProdutos();
}


async function deletarProduto() {

    const id = document.getElementById("idDeletar").value;

    await fetch(`https://localhost:7141/api/ProdutosGeek/${id}`, {
        method: "DELETE"
    });

    console.log("Produto removido");

    buscarProdutos();
}
