//* o bloco try é responsável por "tentar" executar um código que possa lançar uma exceção (erro)
//* o bloco catch é responsável por capturar a exceção (erro) e tratar essa exceção
//* o bloco finally sempre será executado logo após a conclusão do bloco try ou se houver uma exceção logo após o bloco catch

try {
  function sum(a, b) {
    return a + b;
  }

  const result = sum("ls", 8);
  if (typeof result !== "number") throw "not a number";
  console.log("Sum is " + result);
} catch (err) {
  console.log("Sum is " + err);
} finally {
  console.log("Execution finally");
}
