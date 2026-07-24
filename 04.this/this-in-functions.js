// "use strict";
//* this se refere ao objeto que foi chamado
//* quando não está em um objeto, ele se refere ao objeto global
//* no modo "use strict" o this fora de uma função vai sempre se referenciar ao objeto global
//* dentro de uma função dependedo do "use strict", o this pode ser o objeto global ou undefined
//* quando usando em manipuladores de elementos, o this se refere ao próprio elemento HTML
//* em uma arrow function o this não existe, ele herda o this do escopo circundante (pai)
//* this NÃO é uma variável, ele é uma palavra chave

function myFunction() {
  return this;
}
console.log(myFunction());

const person = {
  fName: "Vinícius",
  lName: "Joaquim",
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};
console.log(person.fullName());

const person2 = {
  fName: "Vinícius",
  lName: "Joaquim",
  fullName: () => {
    return this.fName + " " + this.lName;
  },
};
console.log(person2.fullName());

const person3 = {
  fName: "Vinícius",
  lName: "Joaquim",
  fullName: function () {
    return () => this.fName + " " + this.lName;
  },
};
const person3FullName = person3.fullName();
console.log(person3FullName());

let x = this;
console.log(x);

console.log(globalThis === global); //* true em Node.js
// console.log(globalThis === window); //* true em browsers
