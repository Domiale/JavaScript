/* 
Ejemplos de condicionales if/else
  1. Declarar una variable edad y le asignamos un valor númerico.
  2. Comprobamos si edad es igual o mator que 18 mostramos el mensaje "Eres mayor de edad".
  3. Si edad no es mayor que 18, mostramos el mensaje: "Eres un bebé"
*/

/* let edad = 14;

if (edad >= 18) {
  console.log("Eres mayor de edad")
} else {
  console.log("Eres un bebé")
} */

/* 
El operador ternario es una forma más concisa de escribir una condicion if/else.

Trabaja con tres operandos:
  1. Una condicion
  2. La expresion si es verdadera.
  3. La expresion si es falsa.

Sintaxis:
condicion ? expresionSiVerdadera : expresionSiFalsa
*/

let edad = 19;

let resultado = edad >= 18 ? "Eres mayor de edad" : "Eres un bebé";

console.log(resultado)