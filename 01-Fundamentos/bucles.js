/* 
Ciclos o Bucles
  Nos permiten ejecutar un bloque de código varias veces.

  Facilita tareas 
*/

/* 
1. for
  Este buble tiene 3 partes: 
    1. Inicialización de una variable
    2. Condición que evalua el valor de la variable 
    3. Actuañización del valor de la variable 

  Sintaxis
    for (inicialización ; condición ; actualización) {
      // Código que se ejecuta.
    }
*/

for (let i = 1 ; i <= 10 ; i++ ) {
  // Código que ejecutara
  console.log("Mensaje: " + i)
}

for (let i = 10 ; i >= 0 ; i--) {
  console.log(i)
}

/* 
2. While 
  Ejecuta su bloque de código mientras la condición especificada sea verdadera.

  Sitaxis:
    Se define fuera del ciclo
    
      let nombreVariable = valor;

    while (condición) {
      // Código a ejecutar

      nombreVariable++ //Actualización
    }
*/

let contador = 0; //Definición

while (contador < 3) {
  console.log("Gato " + contador);
  contador++; //Actualización 
}

let veces = 5;

while (veces > 2) {
  console.log("Veces :" + veces);
  veces--;
}

/* 
3. do...while
  Es similar a while, pero garantiza que el bloque de código se ejecute al menos una vez.

  Primero se ejecuta el código y luego se verifica la condición.

  Sintaxis
    // La variable se define fuera del ciclo.
    let nombreVariable 
    do {
      // Código que se ejecuta
    } while (condición);
*/

let numero = 0; 

do {
  // codigo que se ejecuta al menos una vez
  console.log("El número es: " + numero)

  numero++;
} while (numero < 6);

//Practica

let contabilidad = 10; //Definición

while (contabilidad >= 0) {
  console.log("Pato " + contabilidad);
  contabilidad--; //Actualización 
}