/* 
Ejercicio funciones
  1. Vamos a definir una variable llamada "heroe" que tenga un dato en "string" con el nombre de un superheroe.

  2. Definimos una función llamada "obtener poder".

  3. Esta función recibe el parametro "heroe" que sera validado en el cuerpo de la función.

  4. En el cuerpo de la funsion 
    si heroe === "Todoroki" -> por consola "Tu poder es fuego y hielo"
    si heroe === "Izuku" -> por consola "Tu poder es One For All"
    si heroe === "Bakugou" -> por consola "Tu poder es Explosiones"
    si no, colocar "No fuiste invitado a la academia!"
  
  5. Invocar a la función con el parametro "heroe"

  6. Deben cambair el valor de variable "heroe"

Reto extra 
  Hacer que el valor de la variable "heroe" la asigne el usuario
*/

let miHeroe = prompt("Elige tu heroe!");

function obtenerPoder(heroe){
  if (heroe === "Todoroki"){
      console.log("Tu poder es fuego y hielo")
  } else if (heroe === "Izuku") {
    console.log("Tu poder es One For All")
  } else if (heroe === "Bakugou") {
    console.log("Tu poder es Explosiones")
  } else {
    console.log("No te invitaron a la academia!")
  }
}

obtenerPoder(miHeroe) // Invocar la función 