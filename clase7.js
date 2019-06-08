var luis = {
  nombre: 'Luis',
  apellido: 'Aguilar',
  edad: 22
}


function imprimirNombreEnMayusculas (persona) {
  // var nombre = persona.nombre
  var {nombre} = persona
  console.log(persona.nombre.toUpperCase())
}

imprimirNombreEnMayusculas(luis)
