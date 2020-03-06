var http = require("http");

function iniciar(){
	function onRequest(request, response){
		console.log("Request recibido");
    	response.writeHead(200, {"Content-Type": "text/html"});
    	response.write("Holis");
    	response.end();
      console.log("Request terminado");
    }).listen(8080);

    console.log("Servidor inicial");
}
export.iniciar = iniciar;
