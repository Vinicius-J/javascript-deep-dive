//* variáveis que pertecem ao escopo de uma função podem ser definidas como "privadas", pois o acesso existe somento no escopo da função
//* variáveis globais podem ser definidas como "públicas", pois podem ser acessadas por qualquer escopo no código
//* caso eu tente acessar a variáveis "privadas", irá gerar o erro de ReferenceError

function sayHello() {
  let name = "Vinícius";
  console.log(name); // => Vinícius

  return () => `Olá, ${name}!`;
}

// console.log(name); // ReferenceError

const hello = sayHello();

console.log(hello()); // => Olá, Vinícius!
