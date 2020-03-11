var exec = require("child_process").exec;

function iniciar (response) {
  console.log("Invocando el handler de iniciar");
  exec("find /",
    {timeout: 10000, max Buffer:20000*1024},
    function (error, stdout, stderr) {
      response.writeHead(200, {"Content-Type": "text-html"});
      response.write(stdout);
      responde.end();
    });
}

function subir(response) {
  console.log("Invocando el handler de subir");
  response.writeHead(200, {"Content-Type": "text-html"});
  response.write("Subir");
  responde.end();
}

export.iniciar = iniciar;
export.subir = subir;
