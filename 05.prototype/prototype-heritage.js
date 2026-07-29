//* subclasse que herda métodos da superclasse
function Animal(name) {
  this.name = name;
  this.eat = function () {
    return `${this.name} is eating`;
  };
}

function Cat(name) {
  Animal.call(this, name);
  this.noise = function () {
    return "Miau";
  };
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Dog(name) {
  Animal.call(this, name);
  this.bark = function () {
    return "Woof";
  };
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const cat = new Cat("Bigode");
console.log(cat.noise());
console.log(cat.eat());
console.log("Prototype:", Object.getPrototypeOf(cat));
console.log("Constructor:", Object.getPrototypeOf(cat).constructor.name);

console.log();

const dog = new Dog("Bob");
console.log(dog.bark());
console.log(dog.eat());
console.log("Prototype:", Object.getPrototypeOf(dog));
console.log("Constructor:", Object.getPrototypeOf(dog).constructor.name);
