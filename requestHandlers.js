var exec = require("child_process").exec;

function iniciar (response) {
  console.log("Invocando el handler de iniciar");

  var body = `
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html"; charset=UTF-8 />
    </head>
    <body>
      <form action="/subir" method="post">
        <textarea name="text" rows="20" cols="60"></textarea>
        <input type="submit" value="Enviar texto">
      </form>
    </body>
  </html>`;

  response.writeHead(200, {"Content-Type": "text-html"});
  response.write(stdout);
  response.end();
}

function subir(response, datos) {
  console.log("Invocando el handler de subir");

  response.writeHead(200, {"Content-Type": "text-html"});
  response.write("Datos recibidos: " +
    querystring.parse(datos)["text"]);
  response.end();
}

export.iniciar = iniciar;
export.subir = subir;
