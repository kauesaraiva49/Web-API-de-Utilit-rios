function formatador(texto, acao) {
  // Verifica se a ação é para transformar o texto em minúsculo
  if (acao === 'lowercase') {
    return texto.toLowerCase();
  }

  // Verifica se a ação é para transformar o texto em maiúsculo
  if (acao === 'uppercase') {
    return texto.toUpperCase();
  }
}

module.exports = formatador;
