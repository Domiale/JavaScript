/* 
  Variables
  Las variables son contenedores que almacenan datos.
  Las variables se declaran usando las palabras reservadas:

  var -> Es la forma tradicional, pero ya no se recomienda.
  let -> Es la forma moderna, es la recomendada.
  const -> el dato almacenado no puede cambiar.

  para declarar una variable:
  var [nombreVariable] = [valor];
*/

var nombre = "Alejandra Camara";
let edad = 35;
const vivo = true;
console.log(nombre);
console.log(edad);
console.log(vivo);

/* 
  Las variables declaradas con "va"r y "let" pueden cambiar a lo largodel codigo, siempre y cuando su alcance lo permita.

  las variables declaradas son "const" no pueden cambiar.
  Si lo intentamos, marca error.

  Para cambiar el valor de la variable:
  [NombreVariable] = [NuevoValor]
*/

nombre = "Puchunguito";
edad = "24";

//mostrar nuevos datos
console.log(nombre);
console.log(edad);