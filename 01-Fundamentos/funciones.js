/* 
Funciones 
  Son bloques de código reutilizables, ya que realizan una tarea especifica.

  En lugar de escribir el mismo codigo una y otra vez, podemos definir una funcion una sola vez y usarla siempre que la necesitemos.

Concepto de las funciones 
  *Definir: Creamos la función con un nombre y los datos llamamos parámetros. (opciones)

  *Invocan: Llamamos la función cuando queremos que ejecute su código, es decir que haga su tarea.

  *Retorna: Puede devolver un resultado la funcion (opcional) "return"

Sintaxis
  function nombreFuncion(param1, param2) {
    // Código que se va a ejecutar. (cuerpo de la función)
    return resultado;
  }

  function -> La palabra clave para declarar una función.

  nombreFuncion -> El nombre que le asignamos a la función. Este nombre lo usamos para invocarla.

  parm1, parm2 ... -> Son los datos que le pasamos a la función para que trabaje con ellos en su bloque de código.

  Cuerpo de la función -> El código que se ejecuta y realiza la tarea de función.

  return -> Devuelve o retorna un resultado. (opcional)
*/

function saludo(){
  console.log("Hola nariz de bola")
}

//saludo();

function saludoPersonalizado(nombre){
  console.log(`¡Hola ${nombre} Tienes nariz de bola`)
}

/* saludoPersonalizado("Alessita");
saludoPersonalizado("Miguelito")
saludoPersonalizado("Pepita") */

function sumar(a, b) {
  return a + b 
}

console.log( sumar(10,20))

let resultado = sumar(10,20)
console.log(resultado * 5);