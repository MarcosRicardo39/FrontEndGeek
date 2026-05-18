

if (localStorage.getItem("logado") !== "true") {
    window.location.replace("../Html/login.html");
}



let produtoEditandoId = null;



function logout() {
    localStorage.removeItem("logado");
    window.location.href = "../Html/login.html";
}

function mostrarProdutos() {
    buscarProdutos();
}



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

                <button onclick='adicionarCarrinho(${JSON.stringify(produto)})'>
                    Adicionar ao carrinho
                </button>

            </div>

        </li>
    `;
    });
}

function adicionarCarrinho(produto) {

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push(produto);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    alert("Produto adicionado ao carrinho!");
}



async function adicionarProduto() {

    const nome = document.getElementById("nomeProduto").value;
    const preco = document.getElementById("precoProduto").value;
    const imagem = document.getElementById("imagemProduto").value;

    const novoProduto = {
        nome: nome,
        preco: parseFloat(preco),
        imagemUrl: imagem
    };

    await fetch("https://localhost:7141/api/ProdutosGeek", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoProduto)
    });

    buscarProdutos();
}



async function deletarProduto(id) {

    await fetch(`https://localhost:7141/api/ProdutosGeek/${id}`, {
        method: "DELETE"
    });

    buscarProdutos();
}

function prepararEdicao(id, nome, preco, imagemUrl) {

    produtoEditandoId = id;

    document.getElementById("editNome").value = nome;
    document.getElementById("editPreco").value = preco;
    document.getElementById("editImagem").value = imagemUrl || "";

    document.getElementById("modal").style.display = "flex";
}


function fecharModal() {
    document.getElementById("modal").style.display = "none";
}



async function salvarEdicao() {

    const produtoAtualizado = {
        id: produtoEditandoId,
        nome: document.getElementById("editNome").value,
        preco: parseFloat(document.getElementById("editPreco").value),
        imagemUrl: document.getElementById("editImagem").value
    };

    await fetch(`https://localhost:7141/api/ProdutosGeek/${produtoEditandoId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produtoAtualizado)
    });

    fecharModal();
    buscarProdutos();
}
function voltarParaSite() {
    window.location.href = "../Html/index.html";
}


buscarProdutos();