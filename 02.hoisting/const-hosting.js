//* variáveis declaras com cosnt NÃO podem ser elevadas (hosted)
//* se tentar usar uma variável const antes de declarar, gera um erro de ReferenceError: Cannot access 'a' before initialization
//* não é possível inicializar uma variável const e depois declarar, pois gera o erro de SyntaxError: Missing initializer in const declaration

console.log(a);
const a = 10;

b = 20;
console.log(b);
const b;
