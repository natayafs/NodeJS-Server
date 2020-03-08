function iniciar () {
  console.log("Invocando el handler de iniciar");
  return "Iniciar";
}

function subir() {
  console.log("Invocando el handler de subir");
  return "Subir";
}

export.iniciar = iniciar;
export.subir = subir;
