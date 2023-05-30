const pedidos = [
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    }
  ];
  
  // Função para encontrar o pedido mais próximo
  function PedidoMaisProximo(pedidos) {
    let pedidoMaisProximo = pedidos[0];
    
    for (let i = 1; i < pedidos.length; i++) {
      if (pedidos[i].distancia < pedidoMaisProximo.distancia) {
        pedidoMaisProximo = pedidos[i];
      }
    }
    
    return pedidoMaisProximo;
  }
  
  const pedidoProximo = PedidoMaisProximo(pedidos);
  
  print(`O pedido mais próximo é o de ${pedidoProximo.nome}, do tipo ${pedidoProximo.tipo}`);
  