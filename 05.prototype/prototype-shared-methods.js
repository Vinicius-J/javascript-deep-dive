//* são métodos compartilhados entre a superclass com as subclasses
//* as subclasses tem acesso a todos os métodos que pertencem a superclass

function Car(name, color, speed) {
  this.name = name;
  this.color = color;
  this.speed = speed;
  this.showInfo = function () {
    return `${this.name} is ${this.color} and your speed is ${this.speed}`;
  };
  this.showColor = function () {
    return this.color;
  };
  this.showSpeed = function () {
    return this.speed;
  };
}

const bmw = new Car("BMW", "blue", "80km/h");
const civic = new Car("Civic", "black", "120km/h");
const corsa = new Car("Corsa", "red", "600km/h");

Object.setPrototypeOf(bmw, Car);
Object.setPrototypeOf(civic, Car);
Object.setPrototypeOf(corsa, Car);

console.log(bmw.showInfo());
console.log(bmw.showColor());
console.log(bmw.showSpeed());
console.log(Object.getPrototypeOf(bmw));
console.log();

console.log(civic.showInfo());
console.log(civic.showColor());
console.log(civic.showSpeed());
console.log(Object.getPrototypeOf(civic));
console.log();

console.log(corsa.showInfo());
console.log(corsa.showColor());
console.log(corsa.showSpeed());
console.log(Object.getPrototypeOf(corsa));
