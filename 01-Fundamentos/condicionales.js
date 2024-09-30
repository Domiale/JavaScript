/* 
Condicionales
  Son estructuras que permiten ejecutar diferentes bloques de un código en función de si una condición (expresión) es verdadera o falsa.
  Estas estructuras controlan el flujo de los programas.

1. IF -> Si condicional
  El bloque if se ejecuta colo si la condicion que se le pasa es verdadera "true". Si la condicion es falsa "false" el código dentro de if se omite.

  if (condicion) {
    codigo que se ejecuta si es verdsdero.
  }

2. Este bloque ejecuta un código cuando las condiciones no son verdadras.

if (condicional) {
  Codigo que se ejecuta en caso de que la condicion sea verdadera
} else {
  Codigo que se ejecuta en caso de que la condicion anterior del if sea falso
 }

 3. else if -> si no 
  Nos ayuda a comprobar condiciones adicionales si la condicion "if" es falsa, podemos tener tantos "else if" cpmo necesitemos. Los "else if" se escriben entre el "if" y el "else"

if (condicional) {
  Codigo que se ejecuta en caso de que la condicion sea verdadera
} else if (condicional) {
  Codigo ejecutar
 } else if (condicional) {
  Codigo ejecutar
 } else {
  Codigo que se ejecuta en caso de que la condicion anterior del if sea falso
 }
*/

//Sentencia del bloque if

let numero = 300;

if (numero > 20) {
  console.log("Me ejecute porque la condicion es verdadera")
}

// Sentencia o bloque if

let numero2 = 300;

if (numero2 < 20 ) {
  console.log("Me ejecute porque la condicional es verdadera")
} else {
  console.log("Me ejecute porque la condicional es falsa")
}

// else if

let numero3 = 300;

if (numero3 < 20) {
  console.log("Me ejecute porque la condicional es verdadera")
} else if (numero3 > 20) {
  console.log("Me ejecute porque la segunda condicional es verdadera")
} else {
  console.log("Me ejecute porque la condicional es falsa")
}