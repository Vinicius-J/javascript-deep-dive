//* função interna (filho) continua tendo acesso a variáveis da função externa (pai) mesmo após a finalização da execução da função externa

function contador() {
  let value = 0;

  return () => ++value;
}

const result = contador();

console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
