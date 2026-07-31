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

function Bmw(name, color, speed) {
  Car.call(this, name, color, speed);
}
Bmw.prototype = Object.create(Car.prototype);
Bmw.prototype.constructor = Bmw;

function Civic(name, color, speed) {
  Car.call(this, name, color, speed);
}
Civic.prototype = Object.create(Car.prototype);
Civic.prototype.constructor = Civic;

function Corsa(name, color, speed) {
  Car.call(this, name, color, speed);
}
Corsa.prototype = Object.create(Car.prototype);
Corsa.prototype.constructor = Corsa;

const bmw = new Bmw("BMW", "blue", "80km/h");
const civic = new Civic("Civic", "black", "120km/h");
const corsa = new Corsa("Corsa", "red", "600km/h");

console.log(bmw.showInfo());
console.log(bmw.showColor());
console.log(bmw.showSpeed());
console.log("Prototype:", Object.getPrototypeOf(bmw));
console.log("Constructor:", Object.getPrototypeOf(bmw).constructor);
console.log();

console.log(civic.showInfo());
console.log(civic.showColor());
console.log(civic.showSpeed());
console.log("Prototype:", Object.getPrototypeOf(civic));
console.log("Constructor:", Object.getPrototypeOf(civic).constructor);
console.log();

console.log(corsa.showInfo());
console.log(corsa.showColor());
console.log(corsa.showSpeed());
console.log("Prototype:", Object.getPrototypeOf(corsa));
console.log("Constructor:", Object.getPrototypeOf(corsa).constructor);
