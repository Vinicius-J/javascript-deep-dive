//* função recursiva é uma técnica javascript para resolver problemas dividido-o em partes
//* caso base: quando ela para de chamar a si mesma
//* caso recursivo: quando ela continua chamando a si mesma
//* "o problema possuí uma estrutura que se repete dentro dela mesma?"

// function countdown(number) {
//   if (number < 0) return;

//   console.log(number);

//   countdown(number - 1);
// }

// countdown(5);

// function factorial(number) {
//   if (number === 1) {
//     return 1;
//   }

//   const newFactorial = factorial(number - 1);

//   console.log(newFactorial);

//   return number * newFactorial;
// }

// console.log(factorial(5));

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

const tasks = [
  {
    id: 1,
    title: "Projeto",

    subtasks: [
      {
        id: 2,
        title: "Backend",

        subtasks: [
          {
            id: 3,
            title: "Criar API",
          },
        ],
      },
    ],
  },
];

function showTask(arrTask) {
  for (const objTask of arrTask) {
    for (const key in objTask) {
      if (Array.isArray(objTask[key])) {
        showTask(objTask[key]);
      } else {
        console.log(objTask[key]);
      }
    }
  }
}

showTask(tasks);
