//* função recursiva é uma técnica javascript para resolver problemas dividido-o em partes
//* caso base: quando ela para de chamar a si mesma
//* caso recursivo: quando ela continua chamando a si mesma
//* "o problema possuí uma estrutura que se repete dentro dela mesma?"

//* função recursiva funciona chamando ela mesmo e colocando no topo da callstack, ou seja, a primeira chamada é sempre a última a ser excutada
//* uma analogia é: uma nova chamada -> uma nova caixa no topo da pilha
//* quando a função recursiva chega no caso base, ela "volta" resolvendo as funções que foram chamadas antes

// function countdown(number) {
//   if (number < 0) return;

//   console.log(number);

//   countdown(number - 1);
// }

// countdown(5);

function factorial(number) {
  if (number === 1) return 1; // caso base

  const newFactorial = factorial(number - 1); // nova chamada -> topo da call stack -> repete até o caso base

  console.log(newFactorial); // volta resolvendo do final para o início -> 1 ao n!

  return number * newFactorial; // retorna o resultado ou usa ele para alguma coisa
}

console.log(factorial(5));

// const categories = {
//   name: "Backend",

//   children: [
//     {
//       name: "Node",

//       children: [{ name: "Express" }, { name: "Nest" }],
//     },
//   ],
// };

// function print(category) {
//   console.log(category.name);

//   if (!category.children) return;

//   for (const child of category.children) {
//     print(child);
//   }
// }

// print(categories);

// const tasks = [
//   {
//     id: 1,
//     title: "Projeto",

//     subtasks: [
//       {
//         id: 2,
//         title: "Backend",

//         subtasks: [
//           {
//             id: 3,
//             title: "Criar API",
//           },
//         ],
//       },
//     ],
//   },
// ];

// function showTask(arrTask) {
//   for (const objTask of arrTask) {
//     for (const key in objTask) {
//       if (Array.isArray(objTask[key])) {
//         showTask(objTask[key]);
//       } else {
//         console.log(objTask[key]);
//       }
//     }
//   }
// }

// showTask(tasks);
