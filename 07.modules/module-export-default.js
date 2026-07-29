class Person {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }
  fullName() {
    return `${this.fName} ${this.lName}`;
  }
}

const person1 = new Person("Vinícius", "Joaquim", 23);

export default person1;
