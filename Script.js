
let produtoEditandoId = null;

async function buscarProdutos() {

    const response = await fetch("https://localhost:7141/api/ProdutosGeek");

    const produtos = await response.json();

    const lista = document.getElementById("listaProdutos");

    lista.innerHTML = "";

    produtos.forEach(produto => {

        lista.innerHTML += `
        <li class="card">
            
            <img src="${produto.imagemUrl ?? 'https://via.placeholder.com/120'}" />

            <div class="info">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco}</p>

                <div class="actions">
                    <button onclick="prepararEdicao(${produto.id}, '${produto.nome}', ${produto.preco})">
                        Editar
                    </button>

                    <button onclick="deletarProduto(${produto.id})">
                        Excluir
                    </button>
                </div>
            </div>

        </li>
    `;
    })
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

    const produtoAtualizado = {
        id: produtoEditandoId,
        nome: document.getElementById("nomeAtualizar").value,
        preco: parseFloat(document.getElementById("precoAtualizar").value)
    };

    await fetch(`https://localhost:7141/api/ProdutosGeek/${produtoEditandoId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produtoAtualizado)
    });

    produtoEditandoId = null;

    buscarProdutos();
}


async function deletarProduto(id) {

    await fetch(`https://localhost:7141/api/ProdutosGeek/${id}`, {
        method: "DELETE"
    });

    console.log("Produto removido");

    buscarProdutos();
}

document.addEventListener("DOMContentLoaded", function () {
    buscarProdutos();
});

function prepararEdicao(id, nome, preco) {

    produtoEditandoId = id;

    document.getElementById("nomeAtualizar").value = nome;
    document.getElementById("precoAtualizar").value = preco;

    document.querySelectorAll("li").forEach(li => {
        li.style.background = "";
    });

    event.target.closest("li").style.background = "#ffeaa7";
}

function cancelarEdicao() {
    produtoEditandoId = null;
    document.getElementById("nomeAtualizar").value = "";
    document.getElementById("precoAtualizar").value = "";
}
