/* 
Arreglos o Arrays
  Son una estructura de datos que permite almacenar multiples valores en una sola variable.

  Los elementos dentro del array tiene una posición o índice que permite acceder a ellos.

  Los indices de los datos comienzan en 0 

  los Arrays pueden contener datos de cualquier tipo; números, strings, booleanos, incluso arrays anidados.

Sintaxis 
  let nombreArray = [elemento1,elemento2,elemento3]
*/

let frutasFavoritas = ["sandia", "mango", "durazno"]; 

let numerosLoteria = [5, 10, 8, 16, 35];

let meQuiereNoMeQuiere = [true, false, true, false, true];

let misDatos = ["Alejandra", "Camara", 20, false];

let anidadoArrays = [[123, 345, 789], 
["gato", "perro", "jirafa"], 
[true, false, true]];


/* 
array -> ["sandia ", "manzana", "piña"]
indice ->    0           1        2

array -> [5, 10, 8, 16, 35]
indice -> 0  1   2  3   4
*/

/* 
Acceder a los elementos de un Array
  Para acceder a un dato que uamos la siguientr sintaxis 

  nombreArray[indice];
*/

console.log(frutasFavoritas[2]);
console.log(numerosLoteria [1]);
console.log(anidadoArrays[2][2]);

/* 
Modificar elementos del Array 
  Para cambiar el valor de cualquier elemento dentro del array usamos la siguente sintaxis:

  nombreArray[indice] = nuevoDato
*/

console.log(frutasFavoritas)
frutasFavoritas[0] = "pera";
console.log(frutasFavoritas)

/* 
Metodos utiles para arrays
  Los metodos son "funciones" que trabajan con los datos de los arrays su sintaxis es la siguiente:

1.nombreArray.nombreMetodo
2. nombreArray.nombreMetodo(parametro)
*/

/* 
  length nos dice cuantos elementos tiene un array
*/

console.log(frutasFavoritas.length);
console.log(numerosLoteria.length);
console.log(anidadoArrays[0].length);
console.log(anidadoArrays[0].length + anidadoArrays[1].length + anidadoArrays[2].length);

/* 
push() - Agarra un elemento al final del array.

nombreArray.push(dato)
*/
console.log(frutasFavoritas);

frutasFavoritas.push("maracuya");

console.log(frutasFavoritas);

/* 
pop() - Eliminamos el ultimo elemento del array y lo devuelve

nombre.Pop()
*/



/* 
unshift() - Agrega un elemento al inicio del array.

nombreArray.unshift(dato)
*/

console.log(frutasFavoritas);
frutasFavoritas.unshift("mandarina");
console.log(frutasFavoritas);

/* 
shift() - Elimina el primer elemento del array y lo devuelve.

nombreArray.shift()
*/

console.log(numerosLoteria);
let quitarPrimero = numerosLoteria.shift();
console.log(numerosLoteria);
console.log(quitarPrimero);

/* 
indexOf() - Encuentran el índice de un elemento en el array.

nombreArray.indexOf(dato);
*/

let indice = frutasFavoritas.indexOf("papaya");
console.log(indice);

/* 
splice()- Eliminar o agregar elementos al array desde una posición especifica.

Eliminar

nombreArray.splice(indiceInicio, indiceFinal);

Agregar 

nombreArray.splice(indiceInicio, pasos, valor1, valor2);
*/

console.log(frutasFavoritas);
frutasFavoritas.splice(1, 3);
console.log(frutasFavoritas);

frutasFavoritas.splice(1, 0, "fresa", "banana", "naranja", "aguacate" );


/* 
slice() - crear una copia de una porción del array. No modifica el original, se crea un nuevo array.

nombreArray.slice(indiceInicio, indiceFinal);
*/

let frutasCopia = frutasFavoritas.slice(3,6);

console.log(frutasCopia);

/* 
sort() - Ordena los elementos de un Array de mayor a menor

nombreArray.sort() - De primera no pasamos datos entre parentesis.


*/

console.log(frutasFavoritas);
frutasFavoritas.sort();
console.log(frutasFavoritas);

console.log(numerosLoteria);
numerosLoteria.sort();
console.log(numerosLoteria);