//* destructuring pode ser usado em qualquer iterável

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

//* é possível definir valores padrões no objeto
//* é possível definir outro nome para a mesma propriedade
let { firstName: laName, lastName, country = "US" } = person;
console.log("Object destructuring:", laName + " " + lastName + " " + country);

const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

//* é possível ignorar valores usando vírgulas
let [fruit1, , , fruit2] = fruits;
console.log("Array destructuring:", fruit1, fruit2);

//* é possível selecionar valores de posições de índice específico
let { [2]: fruit3, [3]: fruit4 } = fruits;
console.log("Array destructuring:", fruit3, fruit4);

const numbers = [10, 20, 30, 40, 50, 60, 70];

//* operador rest armazena todos os valores restantesem um array
let [a, b, ...rest] = numbers;
console.log("Array destructuring:", a, b, rest);

const mapFruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

let text = "";
for (const [key, value] of mapFruits) {
  text += "\n" + key + " is " + value;
}
console.log("Map destructuring:", text);

//* troca de variáveis usando destructuring
let fName = "Vinícius";
let lName = "Joaquim";
[lName, fName] = [fName, lName];
console.log("Swapping variables:", fName + " " + lName);
