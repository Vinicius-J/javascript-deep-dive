//* classes são modelos para objetos javascript
//* o constructor é executado toda vez que um objeto novo é criado
//* utilizado para iniciar novas propriedades em objetos
//* caso seja ocultado, javacript adicionará um método construtor invisível e vazio

class Person {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }
  falar() {
    return `${this.fName} está falando!`;
  }
}

const p1 = new Person("Vinícius", "Joaquim", 23);
const p2 = new Person("John", "Doe", 33);

console.log(p1);
console.log(p1.falar());
console.log("Prototype:", Object.getPrototypeOf(p1));
console.log("Constructor:", Object.getPrototypeOf(p1).constructor.name);

console.log();

console.log(p2);
console.log(p2.falar());
console.log("Prototype:", Object.getPrototypeOf(p2));
console.log("Constructor:", Object.getPrototypeOf(p2).constructor.name);

console.log();

class Car {}
const c1 = new Car();

console.log(c1);
console.log("Prototype:", Object.getPrototypeOf(c1));
console.log("Constructor:", Object.getPrototypeOf(c1).constructor.name);
