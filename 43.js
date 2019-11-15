const alumnasOnline = [ 
  ["Maria", "Abihaggle", 23],
  ["Noe", "Potrero", 32],
  ["Sol", "Alvarez", 26],
];

// alta baja modificacion 

let accion = prompt("Por favor, indique que accion desea tomar");

if (accion === "BORRAR") {
  let usuarioABorrar = prompt("Indique que usuario desea borrar")
 
  for (let i = 0; i < alumnasOnline.length; i++) {
    for (let j = 0; j < alumnasOnline[i].length; j++) {
      
      if (alumnasOnline[i][j] === usuarioABorrar) {
        alumnasOnline.splice(i, 1);
        alert("Hemos borrado al usuario identificado como" + usuarioABorrar)
      }
      
    }
  }
  console.log(alumnasOnline)
};

if (accion === "EDITAR") {
  let usuarioAEditar = prompt("Indique que dato desea editar")

  for (let i = 0; i < alumnasOnline.length; i++) {
    for (let j = 0; j < alumnasOnline[i].length; j++) {
      
      if (alumnasOnline[i][j] === usuarioAEditar) {
        let datoAModificar = prompt("Por cual dato queres modificarlo?")
        alumnasOnline[i][j] = datoAModificar;
      }
    }
  }
}

if (accion === "AGREGAR") {
  // a completar por ustedes
}

console.log(alumnasOnline)


