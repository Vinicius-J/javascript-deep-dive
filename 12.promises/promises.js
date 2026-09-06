//* objeto promise pode ter 3 estados: -> pending -> reject -> fulfilled
//* pending -> estado inicial da promise
//* reject -> quando a operação falha
//* fulfilled -> operação concluída com sucesso

function evenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 !== 0) reject("reject");
    resolve("fulfilled");
  });
}

const number = evenNumber(5);

number
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.log(reason);
  })
  .finally(function () {
    console.log("finally");
  });
