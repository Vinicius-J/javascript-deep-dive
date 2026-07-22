//* variável local com o mesmo nome de uma variável de escopo global
//* a variável local é "sombra" da variável global, impedindo seu acesso direto dentro daquele bloco, ou seja, a variável local é "oculta" a variável global
//* o motor javascript proucura de dentro para fora (filho -> pai), assim que ele encontra a variável correspondente ele executa os script

let name = "Joaquim";

function myFunction1() {
  let name = "Vinícius";
  console.log(name);
}
myFunction1();

console.log(name);
