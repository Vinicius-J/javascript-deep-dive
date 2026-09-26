//* o operador spread pode ser usado para unir arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log("Spread - join:", arr3);

//* pode ser usado para passar argumentos para funçṏes
const numbers = [23, 55, 21, 87, 56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
console.log("Spread - arguments:", minValue, maxValue);

//* serve para copiar um array
const arr4 = [...arr3];
console.log("Spread - copy:", arr4);

//* operador rest serve para coletar os elementos restantes de um iterável quando se usa o destructuring
const strg = "Vinícius";
const [a, b, ...stringRest] = strg;
console.log("Rest - string:", a, b, stringRest);

const [c, d, ...numberRest] = numbers;
console.log("Rest - Array:", c, d, numberRest);
