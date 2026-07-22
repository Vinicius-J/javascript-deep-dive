//* define a acessibilidade de uma variável
//* uma variável pode apenas ser acessada apenas pelo seu escopo local ou por escopos "filhos"

const mensagem = "Escopo Global";

function funcaoExterna() {
  const mensagemInterna = "Escopo Local da Função";

  function funcaoInterna() {
    //* A função acessa 'mensagemInterna' lexicamente (onde foi criada)
    console.log(mensagemInterna);
  }

  funcaoInterna();
}

funcaoExterna();
