//* callstack -> refere-se a todo código síncrono
//* microtask -> refere-se a promises, async/await, .then, .catch, .finally
//* macrotask -> refere-se a setTimeout ou callback functions
//* o motor javascript executa SEMPRE na seguinte ordem:
//? código síncrono -> microtask -> macrotask

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
  console.log("Call stack ou Código síncrono");
}
callstack();
