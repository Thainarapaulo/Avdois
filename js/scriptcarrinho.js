// Função para exibir produtos no carrinho
function exibirCarrinho() {
    let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
    let listaCarrinho = document.getElementById('lista-carrinho');
    let totalCarrinho = document.getElementById('total-carrinho');
  
    // Limpa a lista antes de adicionar os produtos
    listaCarrinho.innerHTML = '';
  
    // Adiciona os produtos ao carrinho
    carrinho.forEach((produto, index) => {
      let li = document.createElement('li');
      li.className = 'd-flex justify-content-between align-items-center';
  
      // Adiciona a imagem do produto
      let img = document.createElement('img');
      img.src = produto.imagem;
      img.alt = produto.nome;
      img.style.width = '50px'; 
      li.appendChild(img);
  
      // Adiciona o nome e preço do produto
      li.innerHTML += ` ${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
  
      // Adiciona o campo de quantidade
      let quantidadeInput = document.createElement('input');
      quantidadeInput.type = 'number';
      quantidadeInput.min = 1;
      quantidadeInput.value = produto.quantidade || 1; 
      quantidadeInput.addEventListener('change', function () {
        atualizarQuantidade(index, parseInt(this.value, 10));
      });
      li.appendChild(quantidadeInput);
  
      // Adiciona o botão de remoção
      let botaoRemover = document.createElement('button');
      botaoRemover.type = 'button';
      botaoRemover.className = 'btn btn-danger btn-sm';
      botaoRemover.innerText = 'Remover';
      botaoRemover.onclick = function () {
        // Chame uma função para remover o item do carrinho
        removerDoCarrinho(index);
      };
      li.appendChild(botaoRemover);
  
      listaCarrinho.appendChild(li);
    });
  
    // Calcula o total do carrinho
    let total = carrinho.reduce((acumulador, produto) => acumulador + produto.preco * (produto.quantidade || 1), 0);
  
    // Exibe o total na página
    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
  }
  
  // Função para remover um item do carrinho
  function removerDoCarrinho(index) {
    // Obtém o carrinho da sessão
    let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
  
    // Remove o item pelo índice
    carrinho.splice(index, 1);
  
    // Salva o carrinho atualizado na sessão
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    // Atualiza a exibição do carrinho
    exibirCarrinho();
  }
  
  // Função para atualizar a quantidade de um item no carrinho
  function atualizarQuantidade(index, novaQuantidade) {
    // Obtém o carrinho da sessão
    let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
  
    // Atualiza a quantidade do item pelo índice
    carrinho[index].quantidade = novaQuantidade;
  
    // Salva o carrinho atualizado na sessão
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    // Atualiza a exibição do carrinho
    exibirCarrinho();
  }
  
  exibirCarrinho();
  
  // Função para limpar o carrinho
  function limparCarrinho() {
    sessionStorage.removeItem('carrinho');
  
    exibirCarrinho();
  }
// Finalizar compra
  function finalizarCompra() {
    limparCarrinho();
    alert("Compra finalizada! Obrigado por sua compra.");
  }
  // Efeito slide
  var slider = $("#slider");
  $("#animacao7").on('click',function(){
    slider.slideToggle(1000);
 }); 
 