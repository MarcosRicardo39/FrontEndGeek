
const logado = localStorage.getItem("logado");

if (localStorage.getItem("logado") !== "true") {
    window.location.replace("login.html");
}

function logout() {
    localStorage.removeItem("logado");
    window.location.href = "login.html";
}

let produtoEditandoId = null;
imagemUrl: document.getElementById("imagemProduto").value

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

                <img src="${produto.imagemUrl ?? 'https://via.placeholder.com/80'}">

                <div>
                    <h3>${produto.nome}</h3>
                    <p>R$ ${produto.preco}</p>

                    <button onclick="prepararEdicao(${produto.id}, ${JSON.stringify(produto.nome)}, ${produto.preco})">
                        Editar
                    </button>

                    <button onclick="deletarProduto(${produto.id})">
                        Excluir
                    </button>
                </div>

            </li>
        `;
    });
}

buscarProdutos();