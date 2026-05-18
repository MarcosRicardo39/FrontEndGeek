async function buscarProdutos() {

    const response = await fetch("https://localhost:7141/api/ProdutosGeek");

    const produtos = await response.json();

    const lista = document.getElementById("listaProdutos");

    lista.innerHTML = "";

   

    produtos.forEach(produto => {

        lista.innerHTML += `
            <li class="card">

                <img src="${produto.imagemUrl ?? 'https://via.placeholder.com/80'}" />

                <div class="info">
                    <h3>${produto.nome}</h3>
                    <p>R$ ${produto.preco}</p>
                </div>

            </li>
        `;
    });
}

function irParaAdmin() {
    window.location.href = "../Html/login.html";
}


buscarProdutos();