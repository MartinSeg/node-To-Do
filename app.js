const argv = require("./config/yargs").argv;
const toDo = require("./to-do/to-do");
const colors = require("colors");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = toDo.crear(argv.d);
    console.log(tarea);
    break;

  case "listar":
    let listado = toDo.getListado();

    for (let tarea of listado) {
      console.log("==========POR HACER======".green);
      console.log(tarea.descripcion);
      console.log("Estado: ", tarea.completado);
      console.log("=========================".green);
    }

    console.log(listado);
    break;

  case "actualizar":
    let actualizacion = toDo.actualizar(argv.d);

    console.log(actualizacion);

    break;

  case "eliminar":
    let eliminar = toDo.eliminar(argv.d);
    
    if (eliminar === false) {
      console.log("No existe la tarea señalada");
    } else {
      console.log(eliminar);
    }

    break;

  default:
    console.log("Comando no conocido");
}
