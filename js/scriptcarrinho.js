document.addEventListener("DOMContentLoaded", function () {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");

    // Adicionar itens do carrinho à lista
    carrinho.forEach(function (item) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <div class="produto-carrinho">
                <img src="${item.imagem}" alt="${item.nome}" class="w-50">
                <div class="info-produto">
                    <p>${item.nome}</p>
                    <p>R$ ${item.preco.toFixed(2)}</p>
                </div>
            </div>
        `;
        listaCarrinho.appendChild(listItem);
    });

    // Calcular e exibir o preço total
    const total = calcularTotal();
    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;

    // Função para calcular o preço total dos itens no carrinho
    function calcularTotal() {
        let total = 0;
        carrinho.forEach(function (item) {
            total += item.preco;
        });
        return total;
    }
});
