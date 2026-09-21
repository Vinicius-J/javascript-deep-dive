//* async/await é uma forma de simplificar o uso de promises
//* async antes de uma função faz com que a função retorne uma promise
//* await aguarda a resolução de uma promise
//* enquanto a função async aguarda, o restante (código sincrono) pode continuar em execução
//? apenas a função atual do await que "pausa" por um momento

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function main() {
//   console.log("A");

//   await delay(1000);

//   console.log("B");
// }

// main();

// console.log("C");

//* exemplo da diferença na legibilidade da função async/await

//? forma antiga de resolver, mas muito aninhado
function step1() {
  return Promise.resolve("A");
}

function step2(value) {
  return Promise.resolve(value + "B");
}

function step3(value) {
  return Promise.resolve(value + "C");
}

// step1()
//   .then(function (value) {
//     return step2(value);
//   })
//   .then(function (value) {
//     return step3(value);
//   })
//   .then(function (value) {
//     console.log(value);
//   });

//? forma usando async/await

async function run() {
  let v1 = await step1();
  let v2 = await step2(v1);
  let v3 = await step3(v2);
  console.log(v3);
}

run();
