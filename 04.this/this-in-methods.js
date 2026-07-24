function createPerson1(fName, lName, age) {
  return {
    fName,
    lName,
    age,
    fullName: function () {
      return this.fName + " " + this.lName;
    },
  };
}
const person1 = createPerson1("Vinícius", "Joaquim", 23);
console.log(person1.fullName());

const person2 = {
  fName: "Vinícius",
  lName: "Joaquim",
  age: 23,

  fullName: function () {
    return this.fName + " " + this.lName;
  },
};
console.log(person2.fullName());

const person3 = {
  fName: "Vinícius",
  lName: "Joaquim",
  age: 23,

  fullName: function () {
    return () => this.fName + " " + this.lName;
  },
};

const person3FullName = person3.fullName();
console.log(person3FullName());
