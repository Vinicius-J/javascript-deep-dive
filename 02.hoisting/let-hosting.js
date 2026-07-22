//* variáveis declaras com let NÃO podem ser elevadas (hosted)
//* se tentar usar uma variável let antes de declarar, gera um erro de ReferenceError: Cannot access 'a' before initialization
//* não é possível inicializar uma variável let e depois declarar, pois a declaração é elevada, mas a inicialização não

console.log(a);
let a = 10;

b = 20;
console.log(b);
let b;
