//* funções javascript são síncronas e bloqueadoras
//* são executadas imediatamente por padrão e seguidas uma pela outra

function three() {
  two();
  console.log(3);
}

function two() {
  one();
  console.log(2);
}

function one() {
  console.log(1);
}

three();
