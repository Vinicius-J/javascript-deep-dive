//* encadeamento opcional
//* retorna undefined se um objeto for undefined ou nulo em vez de gerar um erro

const people = {
  fName: "Vinícius",
  lName: "Joaquim",
  age: 23,
};

const peopleCountry = people?.country;
console.log(peopleCountry);
