/* 
Concatenacion
  La concatenacion es in proceso para unir p combinar dos o mas cadenas de texto en una semana 

Hay 2 formas de realizar la concatenación 

1. Operador (+) - Este es el texto del metodo más comun para concatenar cadenas de texto
2. template Strings, Plantilla de csdenas o litetales (``). Utilizamos los backtics o acentos invertidos, dentro podemos insertar cadenas de texto, variables y expresiones.
*/

// Concatenar con oerador (+
let nombre = "Alessita";
let apellido = "Camara";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//concatenar con template Strings
let saludo = `${nombre} ${apellido}! ¿Cómo estas? Sabias que para entender la historia de Five Nights at Freddys`;
console.log(saludo);