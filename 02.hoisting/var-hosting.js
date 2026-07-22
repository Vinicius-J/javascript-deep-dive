//* variáveis declaras com var podem ser elevadas (hosted), ou seja, é possível usar a variável antes mesmo de declarar
//* não geram erro de ReferenceError, mas o valor delas é dado como undefined
//* apenas a declaração é hosted, a inicialiação não, por isso o valor é dado como undefined e não gera erro

console.log(a);
var a = 10;

b = 20;
console.log(b);
var b;
