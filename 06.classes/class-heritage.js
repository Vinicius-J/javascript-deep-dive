//* subclasses herdam métodos da superclass e podem ter métodos únicos

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  noise() {
    return "Miau";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    return "Woof";
  }
}

const cat = new Cat("Bigode");
console.log(cat);
console.log(cat.eat());
console.log(cat.noise());
console.log("Prototype:", Object.getPrototypeOf(cat));
console.log("Constructor:", Object.getPrototypeOf(cat).constructor.name);

console.log();

const dog = new Dog("Bob");
console.log(dog);
console.log(dog.eat());
console.log(dog.bark());
console.log("Prototype:", Object.getPrototypeOf(dog));
console.log("Constructor:", Object.getPrototypeOf(dog).constructor.name);
