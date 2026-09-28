//* operador de coalescência nula
//* retorna o operando da direita quando o valor da esquerda for undefined ou nulo

const fName = null;
const text = "name is missing";
const result = fName ?? text;

console.log(result);
