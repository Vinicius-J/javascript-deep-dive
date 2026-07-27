//* o método bind() serve para definir um this específico de uma função
//* ele NÃO executa a função imediatamente
//* ele retorna uma NOVA função que pode ser usada posteriormente com o this definido anteriormente
//* a diferencça de bind(), call() e apply() é que diferente de call() e apply() que são executadas imediatamente, o método bind() retorna uma NOVA função
//* ele pode ser usado para definir valores fixos para os argumentos
//? Obs.: Quando for definido um argumento fixo, NÃO pode ser alterado na função nova que foi retornada

const person1 = { fName: "John", lName: "Doe" };
const person2 = { fName: "Paul", lName: "Doe" };
const person3 = { fName: "Ringo", lName: "Doe" };

function greet() {
  return "Hello," + " " + this.fName + "!";
}
const greetJohn = greet.bind(person1);
console.log(greetJohn());

const person4 = {
  fName: "John",
  lName: "Doe",
  fullName: function () {
    // console.log(this);
    return this.fName + " " + this.lName;
  },
};

const member = {
  fName: "Hege",
  lName: "Nilsen",
};
let fullName = person4.fullName.bind(member);
console.log(fullName());

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5));
console.log(double(5, 10, 20, 30, 40));

const triple = multiply.bind(null, 3, 6);
//? argumentos definidos fixos, não podem ser alterados
console.log(triple(5));
console.log(triple(5, 10, 20, 30, 40));
