//* ao criar métodos dentro da class, eles podem ser acessador por todos objetos criado atráves desse modelo
//* para criar um método dentro de uma class, faça como se fosse em um objeto

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const car1 = new Car("Civic", 1999);
console.log(car1);
console.log(car1.age());

const car2 = new Car("Gol", 1980);
console.log(car2);
console.log(car2.age());
