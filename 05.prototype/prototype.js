//* [[Prototype]] -> todo objeto possui um link interno chamado [[Prototype]]
//* prototype é usado para adicionar uma nova propriedade a todos os objetos de um determiado tipo

const Person = function (name) {
  this.name = name;
};

const person1 = new Person("Vinícius");
const person2 = new Person("John");
const person3 = new Person("Martin");

Person.prototype.age = 23;
Person.prototype.city = "Barbacena";
Person.prototype.country = "Brasil";

console.log(Person);
console.log(Person.prototype);
console.log(Object.getPrototypeOf(person1));
console.log(Object.getPrototypeOf(person1) === Person.prototype);
console.log(person1);
console.log(person2);
console.log(person3);
