//* o método apply() é idêntico ao método call(), a única diferença é a forma como os argumentos são passados
//* no apply(), os argumentos são passados em um array
//* é possível usar o aplly() em métodos javascript que usem arrays de valores como argumentos
//* ele não retorna uma nova função, ele executa a função que foi chamada imediatamente

const person1 = { fName: "John", lName: "Doe" };
const person2 = { fName: "Paul", lName: "Doe" };
const person3 = { fName: "Ringo", lName: "Doe" };

function greet(greeting) {
  return greeting + " " + this.fName;
}

const greetPerson3 = greet.apply(person3, ["Hello"]);
console.log(greetPerson3);

const person = {
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};

const fullNamePerson1 = person.fullName.apply(person1);
console.log(fullNamePerson1);

const createPerson = {
  fullName: function (city, country) {
    return this.fName + " " + this.lName + ", " + city + ", " + country;
  },
};

const cityPerson = createPerson.fullName.apply(person2, ["Oslo", "Norway"]);
console.log(cityPerson);

const numbers = [5, 8, 6, 7, 22, 56, 1, 3];
const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber);

function sum(a, b) {
  return a + b;
}
console.log(sum.apply(null, [4, 5]));
