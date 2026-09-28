//* toda declaração de variável é elevada (hosted) mas a sua inicializaçãa NÃO
//* Temporal Dead Zone (TDZ) é o "espaço" entre o início do escopo onde a declaração da variável foi elevada até a sua inicialização, ou seja, até o javascript saber o valor da variável
//? Obs.: declarar uma variável é definir um nome para ela na memória no escopo atual
//? Obs.: inicializar é definir um valor para essa variável

{
  //* TDZ da variável idade
  //* TDZ da variável idade
  //* TDZ da variável idade
  //* TDZ da variável idade
  //* TDZ da variável idade
  let idade = 22; //* fim da TDZ da variável idade
  console.log(idade);
}
