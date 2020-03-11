var http = require("http");
var url = require("url");

function iniciar(route, handle){
	function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
		console.log("Request a "+ pathname + "recibido");

		route(pathname, handle, response);
}

    http.createServer(onRequest).listen(8080);
    console.log("Servidor iniciado");
}

export.iniciar = iniciar;
