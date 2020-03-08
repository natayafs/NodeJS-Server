function route(path, handle) {
  console.log("Routeando un request a " + path);
  if (typeof handle[path] === "function") {
    return handle[path]();
  } else {
    console.log("No hay handler definido para " + path);
    return "Error 404";
  }
}

export.route = route;
