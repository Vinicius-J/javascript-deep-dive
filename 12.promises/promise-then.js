//* promise.then(fulfilled(), rejected())
//* fulfilled() -> função a ser executada quando a promessa é concluída
//* rejected() -> função a ser executada quando a promessa é rejeitada

function promise(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 !== 0) reject("rejected");
    resolve("fulfilled");
  });
}

const newPromise = promise(2);

newPromise.then(
  (fulfilled) => {
    //fulfilled()
    console.log(fulfilled);
    return fulfilled;
  },
  (rejected) => {
    // rejected()
    console.log(rejected);
    return rejected;
  },
);
