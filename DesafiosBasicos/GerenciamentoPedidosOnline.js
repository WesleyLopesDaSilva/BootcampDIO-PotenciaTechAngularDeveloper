const numPedidos = parseInt(gets());
const TodosOsPedidos = [];

for (let i = 1; i <= numPedidos; i++) {
  const prato = gets();
  const calorias = parseInt(gets());
  const ehVegano = gets().toLowerCase() === 's';
  
  let Vegano;
  if (ehVegano) {
    Vegano = 'Vegano';
  } else {
    Vegano = 'Não Vegano';
  }

  const pedido = 'Pedido ' + i + ': ' + prato + ' (' + Vegano + ') - ' + calorias + ' calorias';
  TodosOsPedidos.push(pedido);
}

for (let i = 0; i < TodosOsPedidos.length; i++) {
  print(TodosOsPedidos[i]);
}
