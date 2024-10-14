/* 
Instrucciones Condicionales If / else if / else

1. Crear una variable día y asignarle un valor númerico
2.Con  la sentencias if, else if y else, evaluar el valor de la variable día con las siguientes condiciones:
- dia === 1 // Lunes
- día === 2 // Martes
- día === 3 // Miercoles
- día === 4 // Jueves
- día === 5 // Viernes
*/

/* let dia = 4;

if (dia === 1) {
  console.log("Lunes"); 
} else if (dia === 2) {
  console.log("Martes")
} else if (dia === 3) {
  console.log("Miercoles")
} else if (dia === 4) {
   console.log("Jueves")
} else if (dia === 5) {
  console.log("Viernes")
} else {
  console.log("Día no valido")
} */

/* 
Switch
  Es una estructura de control de flujo condicional, pero se utiliza cuando tenemos multiples casos posibles para evaluar una expresión.

   Es más eficiente y legible en situaiones donde se quiere comparar una sola variable con varios valores posibles. 

Sintaxis: 
  Switch (expresion) {
  case valor1: 
    // Codigo que se ejecuta
    break;
  case valor2:
    // Codigo que se ejecuta
    break;
  case valor3
    //Codigo que se ejecuta
    brak;
  default:
    //Codigo que se ejecuta por default
    }
*/

let dia = 1;

switch (dia) {
  case 1:
    console.log("Lunes")
    break;
  case 2:
    console.log("Martes")
    break;
  case 3:
    console.log("Miercoles")
    break;
  case 4:
    console.log("Jueves")
    break;
   case 5:
    console.log("Viernes")
    break;
  default:
    consoñe.log("Día no valido")
}

/* 
Ejercicio Switch

  1. Crear una variable pokemon y asignarle un valor en strings con el nombre de un pokemon
*/

let pokemon = "pikachu"

switch (pokemon) {
  case "pikachu":
    console.log(`Tu pokemon es ${pokemon} y es tipo electrico` );
    break;
  case "charmander":
    console.log(`Tu pokemon es ${pokemon} y es tipo fuego`);
    break;
  case "snorlax":
    console.log(`Tu pokemon es ${pokemon} y es tipo normal`);
  default:
    console.log("Quien es ese pokemon?")
}