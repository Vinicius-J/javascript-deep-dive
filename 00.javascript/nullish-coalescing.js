//* operador de coalescência nula
//* retorna o operando da direita quando o valor da esquerda for undefined ou nulo

const name = null;
const text = "missing";
const result = name ?? text;

console.log(result);
