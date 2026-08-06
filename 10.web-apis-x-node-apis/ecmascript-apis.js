//* tudo que faz parte da sintaxe da linguagem pertence ao ECMAScript
//* funcionalidades que rodam em todos os ambientes javascript (Node.js/Navegador)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = arr.map((value) => value * 2);
console.log(double);

const separete = arr.filter((value) => value % 2 === 0);
console.log(separete);

console.log();

const strg = "Vinícius";

const len = strg.length;
console.log(len);

const upCase = strg.toLocaleUpperCase();
console.log(upCase);
