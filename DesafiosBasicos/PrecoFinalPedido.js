const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

const precoFinalPedido = (valorHamburguer * quantidadeHamburguer) + (valorBebida * quantidadeBebida);

const troco = (valorPago - precoFinalPedido);

print ('O preço final do pedido é R$ ' + precoFinalPedido.toFixed(2) + 
'. Seu troco é R$ ' + troco.toFixed(2) + '.');