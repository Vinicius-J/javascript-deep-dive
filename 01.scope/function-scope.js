//* variáveis declaradas dentro de uma funçao não podem ser acessadas fora dessa função
//* as variáveis locais são CRIADAS quando a função é INICIALIZADA e são EXCLUÍDAS quando as funções são CONCLUÍDAS
//? Obs.: variáveis NÃO declaradas são sempre GLOBAIS

function myFunction1() {
  var carName = "Toyota";
  console.log(carName);
}
myFunction1();

function myFunction2() {
  let carName = "Honda";
  console.log(carName);
}
myFunction2();

function myFunction3() {
  const carName = "Jepp";
  console.log(carName);
}
myFunction3();
