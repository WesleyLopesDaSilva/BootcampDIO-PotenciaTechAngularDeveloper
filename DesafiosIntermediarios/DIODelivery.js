const pedido = {
    cliente: gets(),
    endereco: gets(),
    itens: [],
    taxaEntrega: 5.0
  };
  
  const quantidadeItens = parseInt(gets());
  while (pedido.itens.length < quantidadeItens) {
    const nomeItem = gets();
    const precoItem = parseFloat(gets());
    pedido.itens.push({ nome: nomeItem, preco: precoItem });
  }
  
  
  
  let totalCalculado = 0;
  for (let i = 0; i < pedido.itens.length; i++) {
    totalCalculado += pedido.itens[i].preco;
  }
  totalCalculado += pedido.taxaEntrega;
  
  print(`Pedido: ${pedido.cliente}`);
  print(`Endereco de entrega: ${pedido.endereco}`);
  print(`Total: R$ ${totalCalculado.toFixed(2)}`);
  
  