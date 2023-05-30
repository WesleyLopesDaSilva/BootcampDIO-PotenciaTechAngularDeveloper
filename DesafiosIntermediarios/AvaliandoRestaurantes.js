const restaurantes = [
    {
      nome: gets(), 
      avaliacao: parseFloat(gets())
    },
    {
      nome: gets(), 
      avaliacao: parseFloat(gets())
    }
  ];
  
  function MelhorRestaurante(restaurantes) {
    let melhorAvaliacao = restaurantes[0]; 
    
    for (let i = 1; i < restaurantes.length; i++) {
      if (restaurantes[i].avaliacao > melhorAvaliacao.avaliacao) {
        melhorAvaliacao = restaurantes[i];
      }
    }
  
    return melhorAvaliacao;
  }
  
  const restauranteMelhorAvaliado = MelhorRestaurante(restaurantes);
  
  print (`Restaurante: ${restauranteMelhorAvaliado.nome}, Avaliação: ${restauranteMelhorAvaliado.avaliacao.toFixed(1)}`);
  