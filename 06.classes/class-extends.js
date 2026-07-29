//* usado para criar uma herança entre as classes
//* uma classe filha herda todos os métodos da classe pai
//* é útil para reutilização de código

class Animal {
  constructor(name) {
    this.name = name;
  }

  noise() {
    return `${this.name} is make noise`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

const cat = new Cat("Bigode");
console.log(cat.noise());
