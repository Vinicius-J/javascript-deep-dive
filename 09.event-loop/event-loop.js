//* Event Loop é responsável por checar a call stack
//* queueMicrotask() => agenda uma função de callback para ser executada logo após o código síncrono, e tem prioridade máxima sendo executada até mesmo antes das Promises
//* independente da ordem que for escrito o código, a executação mantém sendo
//? call stack -> microtask -> macrotask
//* mesmo que uma função com macrotask seja executada antes, ela irá gerar o resultado apenas quando a call stack estiver vazia

function macrotask() {
  setTimeout(() => {
    console.log("Macrotask");
  }, 0);
}
macrotask();

function microtask() {
  queueMicrotask(() => {
    console.log("Microtask");
  });
}
microtask();

function microtaskPromise() {
  Promise.resolve().then(() => {
    console.log("Microtask Promise");
  });
}
microtaskPromise();

function callstack() {
  console.log("Call stack");
}
callstack();
