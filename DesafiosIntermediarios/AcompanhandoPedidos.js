const pedido = {
    cliente: {
      nome: gets(),       // Lê a primeira linha da "Entrada": Nome do Cliente.
      endereco: gets(),   // Lê a segunda linha da "Entrada": Endereço do Cliente.
    },
    id: parseInt(gets()), // Lê a terceira linha da "Entrada": ID do Pedido.
  };
  
  //TODO: Leia a quarta linha da "Entrada": Telefone do Cliente.
  //TODO: Crie dinamicamente a propriedade "telefone" no objeto JSON "pedido.cliente".
  pedido.cliente.telefone = gets();
  //TODO: Imprima a saída formatada de acordo com este desafio.
  print (`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}`);
  print (`ID: ${pedido.id}`);
  print (`Tel: ${pedido.cliente.telefone}`);
  
  
  