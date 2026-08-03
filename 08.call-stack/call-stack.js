//* onde o javascript executa funções
//* cada instrução javascript é síncrona e bloqueadora
//? código síncrono -> callstack -> microtask -> macrotask

console.log("Mensagem N° 1: sincronização"); // código síncrono

setTimeout(() => {
  // macrotask
  console.log("Mensagem N° 2: sincronização dentro do setTimeout");

  Promise.resolve().then(() => {
    // microtask
    console.log("Mensagem N° 3: promisse dentro do setTimeout");
  });
}, 0);

const promise = new Promise((resolve, reject) => {
  resolve();
});

promise
  .then((resolve) => {
    // microtask
    console.log("Mensagem N° 4: 1ª promise");
  })
  .then((resolve) => {
    // microtask
    console.log("Mensagem N° 5: 2ª promise");
  });

console.log("Mensagem N° 6: sincronização"); // código síncrono
