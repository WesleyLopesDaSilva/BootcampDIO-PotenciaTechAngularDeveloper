const cliente1 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets())
  };
  
  const cliente2 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets()) 
  };
  
  let verificacao = "diferentes";
  if(cliente1.nome === cliente2.nome && cliente1.item === cliente2.item && cliente1.preco === cliente2.preco){
    verificacao = "iguais";
  }
  
  print ("Os pedidos são " + verificacao);
  