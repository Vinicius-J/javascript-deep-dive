//* super se refere ao construtor da classe pai
//* ao chamar super, obtemos acesso as propriedades e métodos da classe pai

class Product {
  constructor(model, value, estoque) {
    this._model = model;
    this._value = value;
    this._estoque = estoque;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  get estoque() {
    return this._estoque;
  }

  sell(x) {
    this._estoque = this.estoque - x;
  }

  add(y) {
    this._estoque = this._estoque + y;
  }
}

class Shirt extends Product {
  constructor(model, value, estoque) {
    super(model, value, estoque);
  }
}

const shirt1 = new Shirt("Nike", 80, 60);
console.log(shirt1);
console.log(Object.getPrototypeOf(shirt1));
console.log(Object.getPrototypeOf(shirt1).constructor.name);
shirt1.sell(8);
console.log(shirt1.estoque);
shirt1.add(20);
console.log(shirt1.estoque);
