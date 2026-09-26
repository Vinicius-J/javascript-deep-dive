//* pode ser usado para interpolação (junção de variáveis dentro de uma string)
//* pode ser usado para executar funções e recuperar seus resultados
//* pode ser usado para criar strings de multilinhas
//* pode ser usado para citações

const text1 = `Enim inventore perspiciatis eos error deserunt atque,`;
const text2 = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
${text1}
deleniti sunt laboriosam culpa dolore eveniet modi facere!
Obcaecati nisi a reiciendis ratione,
magni optio.`;
console.log(text2);

const randomNumber = `Random number: ${Math.random()}`;
console.log(randomNumber);
