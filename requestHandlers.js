function iniciar () {
  console.log("Invocando el handler de iniciar");

  var horaInicio = new Date().getTime();
  while (new Date().getTime() < horaInicio + 1000);

  return "Iniciar";
}

function subir() {
  console.log("Invocando el handler de subir");
  return "Subir";
}

export.iniciar = iniciar;
export.subir = subir;
