/* 
Recorrer Arreglo
  Podemos acceder a cada dato de un arreglo a travéz de su índice. Ya sea para obtener el dato o hacer algo con ese índice
*/

/* Definir Array */

let colores = ["Rojo" , "Negro" , "Morado" , "Azul" , "Naranja"]
//      Indice:  0 ,      1 ,         2

console.log(colores)

// Imprimimos por consola los colores

/* console.log(colores[0])
console.log(colores[1])
console.log(colores[2]) */

colores.push("magenta");
/* Recorrer el Array con el bucle for */

/* for ( let i = 0 ; i <= colores.length ; i++ ){
  console.log( colores[i])
} */


/* 

Bucle for... of
  Es una manera simple y moderna de recorrer arrays en JS. Este bucle nos permite recorrer o accerder al valor de cada elemento sin necesidad de índices
Sintaxis

  for ( const elemento of nombreArray){
    // código a ejecutar
  }
*/

for (const color of colores){
  console.log(`Colorcito: $[color]`)
}