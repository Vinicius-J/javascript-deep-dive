//* node.js é uma ferramenta que permite executar código javascript fora do navegador
//* utiliza um modelo orientado a objetos e não bloqueante

const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello World!");
  })
  .listen(8080);
console.log("CTRL + Clique em http://localhost:8080");

const os = require("os");
console.log(os.platform());
