const fs = require("fs");
// const colors = require("colors");

let listadoToDo = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoToDo);

  fs.writeFile("./db/data.json", data, (err) => {
    if (err) throw new Error("No se pudo guardar", err);
  });
};

const cargarDB = () => {
  try {
    listadoToDo = require("../db/data.json");
  } catch (error) {
    listadoToDo = [];
  }
};

const crear = (descripcion) => {
  let toDo = {
    descripcion,
    completado: false,
  };

  cargarDB();
  listadoToDo.push(toDo);
  guardarDB();
  return toDo;
};

const getListado = () => {
  cargarDB();
  return listadoToDo;
};

const actualizar  = (descripcion) => {
  cargarDB();

  let index =  listadoToDo.findIndex(tarea => tarea.descripcion === descripcion)

  if(index >= 0 ){
    listadoToDo[index].completado = !listadoToDo[index].completado;
    guardarDB()
    return listadoToDo
  }
  else{
    return false
  }
}

const eliminar = ( descripcion ) => {
  cargarDB();

  let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion)

  if( index >= 0 ){
    listadoToDo =  listadoToDo.filter(tarea => tarea.descripcion !== descripcion) 
    guardarDB();
    return listadoToDo;
  }else{
    return false;
  }
}

module.exports = {
  crear,
  getListado,
  actualizar,
  eliminar
};
