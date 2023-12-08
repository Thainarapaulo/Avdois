
       // Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco, imagem) {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinhoAtual.push({ nome, preco, imagem });
    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
}

// Event listener para os botões de compra
document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.querySelector("#btn1");
   

    if (btn1) {
        btn1.addEventListener("click", function () {
            adicionarAoCarrinho("Spray Corporal Deo Colônia - Amora & Baunilha", 49.90, "../images/produto5.png");
            window.location.href = '../pages/carrinho.html';
        });
    }
});