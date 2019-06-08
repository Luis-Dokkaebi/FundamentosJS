var luis = {
  nombre: 'Luis',
  apellido: 'Aguilar',
  edad: 22
}

var ramon = {
  nombre: 'Ramon',
  apellido: 'Arceo',
  edad: 24
}

function imprimirNombreEnMayusculas (persona) {
  console.log(persona.nombre.toUpperCase())
}

imprimirNombreEnMayusculas(luis)
imprimirNombreEnMayusculas(ramon)
