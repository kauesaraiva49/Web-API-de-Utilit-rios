function calculadora(valores, acao) {
  // Verifica se a ação solicitada é para encontrar o menor número
  if (acao === 'minimum') {
    return Math.min(...valores);
  }

  // Verifica se a ação solicitada é para encontrar o maior número
  if (acao === 'maximum') {
    return Math.max(...valores);
  }
}

module.exports = calculadora;
