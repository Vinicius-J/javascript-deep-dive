//* push (empilhar) quando o programa chama a função ela é colocada no topo da callstack
//* pop (desempilhar) quando a função é finalizada ela é retirada do topo e o programa volta da função que parou

function fiveMessage() {
  fourMessage();
  console.log("Mensagem N° 5");
}

function fourMessage() {
  threeMessage();
  console.log("Mensagem N° 4");
}

function threeMessage() {
  twoMessage();
  console.log("Mensagem N° 3");
}

function twoMessage() {
  oneMessage();
  console.log("Mensagem N° 2");
}

function oneMessage() {
  console.log("Mensagem N° 1");
}

fiveMessage();
