const express = require('express');
const formatadorTexto = require('./util/text.js');
const calculadoraNumero = require('./util/number.js');

const app = express();

// Configura o Express para entender JSON no corpo das requisições
app.use(express.json());

// Rota GET para operações matemáticas
app.get('/util/number/:action', function (requisicao, resposta) {
  const acao = requisicao.params.action;
  const entradaBruta = requisicao.query.input;
  
  // Divide a string de números pelos pontos das vírgulas
  const listaNumeros = entradaBruta.split(',');

  const resultado do Processamento = {
    action: acao,
    input: listaNumeros,
    output: calculadoraNumero(listaNumeros, acao),
  };

  return resposta.json(resultado do Processamento);
});

// Rota POST para formatação de texto
app.post('/util/text/:action', function (requisicao, resposta) {
  const acao = requisicao.params.action;
  const entradaTexto = requisicao.body.input;

  const resultado do Processamento = {
    action: acao,
    input: entradaTexto,
    output: formatadorTexto(entradaTexto, acao),
  };

  return resposta.json(resultado do Processamento);
});

// Inicialização do servidor
const PORTA = 3000;
app.listen(PORTA, function () {
  console.log(`Servidor rodando com sucesso em http://localhost:${PORTA}`);
});
