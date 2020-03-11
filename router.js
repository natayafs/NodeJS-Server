function route(path, handle, response) {
  console.log("Routeando un request a " + path);
  if (typeof handle[path] === "function") {
    return handle[path](response);
  } else {
    console.log("No hay handler definido para " + path);
    response.writeHead(404, {"Content-Type": "text-html"});
    response.write("404 No Encontrado");
    responde.end();
  }
}

export.route = route;
