//* método call() é usadio para chamar e executar uma função com um this específico
//* call() não cria uma nova função, ele executa a função apenas uma vez com o this passado
//* o primeiro argumento sempre vai ser o objeto desejado que seja o this
//* os argumentos seguintes vão ser os parâmetros da função que foi chamadam sendo que podem existir ou não

const person1 = { fName: "John", lName: "Doe" };
const person2 = { fName: "Paul", lName: "Doe" };
const person3 = { fName: "Ringo", lName: "Doe" };

function greet(greeting) {
  return greeting + " " + this.fName;
}

const greetPerson3 = greet.call(person3, "Hello");
console.log(greetPerson3);

const person = {
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};

const fullNamePerson1 = person.fullName.call(person1);
console.log(fullNamePerson1);

const createPerson = {
  fullName: function (city, country) {
    return this.fName + " " + this.lName + ", " + city + ", " + country;
  },
};

const cityPerson = createPerson.fullName.call(person2, "Oslo", "Norway");
console.log(cityPerson);
