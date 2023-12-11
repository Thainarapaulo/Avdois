var resumo = document.querySelector("#descricao");
var qtdeProduto = document.querySelector("#qtdeProduto");
var total = document.querySelector("#valorTotal"); 
var valorProduto;
var valorTotaldaCompra;

resumo.innerHTML = '<p><strong> Descrição do Produto</strong></p>' + sessionStorage.descricao + '<strong>' + sessionStorage.valor + '</strong>';
qtdeProduto.addEventListener('change', calculavalorTotalCompra);

valorProduto = parseFloat(sessionStorage.valor.replace('R$', '').replace(',', '.'));

function calculavalorTotalCompra(){
    valorTotaldaCompra = valorProduto * qtdeProduto.value;
    total.innerHTML = '<p><strong>Valor total da compra:</strong></p>' + '<strong>R$:' + valorTotaldaCompra + '</strong>';
}

sessionStorage.descricao = document.querySelector("#descricao").innerHTML;
sessionStorage.valor = document.querySelector("#valor").innerHTML;

function resumoCompra(){
    window.location = "../pages/carrinho.html";
}
