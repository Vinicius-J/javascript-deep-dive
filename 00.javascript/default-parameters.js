//* valor padrão pode ser atribuído para uma função onde caso não seja recebido um argumento o parâmetro não possa ser undefined

function myFunction(a, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") return "NaN";
  return a + b;
}

const sum = myFunction(4);

console.log(sum);
