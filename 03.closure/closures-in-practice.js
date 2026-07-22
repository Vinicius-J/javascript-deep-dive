//* closure pode ser usado quando é preciso repetir a lógica, mudando apenas os valores bases da função

function createMultiplier(operator) {
  return (number) => number * operator;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));
