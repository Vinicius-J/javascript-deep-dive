//* FunctionFather.call(this) => definir temporariamente e imediatamente o this da função pai como o da função que está herdando o método
//* FunctionSon.prototype = Object.create(FunctionFather.prototype) => define o prototype da função filha sendo um novo objeto vazio que tem o prototype idêntico a função pai
//* FunctionSon.prototype.constructor = FunctionSon => define o construtor da função filha sendo ela mesmo com o prototype da função pai

function Shape() {
  this.area = function () {
    return 0;
  };
  this.perimeter = function () {
    return 0;
  };
  this.toString = function () {
    return Object.getPrototypeOf(this).constructor.name;
  };
}

function Circle(r) {
  Shape.call(this);
  this.radius = r;
  this.area = function () {
    return Math.PI * this.radius ** 2;
  };
  this.perimeter = function () {
    return Math.PI * this.radius * 2;
  };
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Rectangle(w, h) {
  Shape.call(this);
  this.width = w;
  this.height = h;
  this.area = function () {
    return this.width * this.height;
  };
  this.perimeter = function () {
    return 2 * (this.width + this.height);
  };
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

const rectangle = new Rectangle(3, 7);

function cumulateShapes(shapes) {
  return shapes.reduce((sum, shape) => {
    if (shape instanceof Shape) {
      console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
      console.log(
        `Shape: ${shape.toString()} - perimeter: ${shape.perimeter()}`,
      );
      return sum + shape.area();
    }
    throw Error("Bad argument shape.");
  }, 0);
}

const shapes = [new Circle(3), new Rectangle(2, 3)];

console.log(cumulateShapes(shapes));
