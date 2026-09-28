//* promise.catch(rejected())
//* rejected() -> função a ser executada quando a promessa é rejeitada

function promise(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 !== 0) reject("rejected");
    resolve("fulfilled");
  });
}

const newPromise = promise(5);

newPromise
  .then((fulfilled) => {
    console.log(fulfilled);
    return fulfilled;
  })
  .catch((rejected) => {
    console.log(rejected);
    return rejected;
  });
