//* o motor do javascript faz a busca de dentro para fora (filho -> pai)
//* caso não encontre, ele lança o erro de ReferenceError

const mensagemGlobal = "Olá";

function saudacao() {
  const mensagemLocal = "Mundo";

  function exibir() {
    console.log(`${mensagemGlobal}, ${mensagemLocal}!`);
  }
  exibir();
}
saudacao();
