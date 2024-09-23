/*
Tipos de datos en Javascript

Los tipos de datos se dividen en dos categorías: Primitivos y Complejos

1. Tipos de datos primitivos
  Datos básicos que no se concideran "objetos" y no tienen "métodos".

* Number o Número
  Representación de valores númericos ya sea enteros o con decimáles (punto flotante)

* String o Cadena de Caracteres
  Se usa para representar el texto. El texto se coloca entre comillas simples o dobles "texto" 'texto'

* boolean o Boleanos
  Estos representan un valor lógico que puede ser "true" o "false"

* Underfined o Indefinido
  Es el valor que se le asigna a una variable que ha sido declarada pero no inicializada}

2. Tipos de datos complejos

*Array o Arreglo
  Es un conjunto de datos que los almacena en una lista ordenada de elementos. Los datos dentro de los arreglso se escriben entre corchetes [] y separados por comas ,

*Object
  Es un objeto de multiples datos en pares ¨clave¨- "valor". Se escriben entre llaves {} y separadas por comas , 

*Funtions o funciones 
  Es un tipo de dato que puede ser "invocado". Se declaran con la palabra reservada "funtion" y el codigo que ejecutan entre llave {"codigo"}
 */

/* Números */
let miNumero = 6;
let miNumeroDecimal = 0.5;

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */
let miNombre = "Alejandra";
let miApellido = "Camara";

console.log(miNombre);
console.log(miApellido);

/* Boolean */
let miVerdad = true;
let miMentira = false;

console.log(miVerdad);
console.log(miMentira);

/* Undefined */

let x; //Esto es declarar una variable sin inicializarla

console.log(x);

x = prompt("Cual es tu número favorito?");
console.log(x); //Valor que el usuario introduzca


/* Array */
let misFrutasFavoritas = ["Durazno","Uvas","Manzana"];
let misNumerosSuerte = ["5","10","15","1600"];
let otroArray = ["Puchunguito","56","true"];

console.log(misFrutasFavoritas[0]);
console.log(misNumerosSuerte[1]);
console.log(otroArray[2]);

/* Objeto */

let persona = {
  //clave : valor, 
  nombre : "Alejandra",
  edad : 20,
  colorCabello : "castaño",
  colorOjos : "cafes",
  altura : 1.77,
  peso : undefined,
  vivo : true,
  novio : true,
}

console.log(persona);
// Accedemos al valor de una clave dentro dw un objeto
// Con la notación de punto .
console.log(persona.nombre);
console.log(persona.altura);
console.log(persona.novio);

/* Function */

let mensajito = function () {
  // Pasamos el codigo qie ejecuta la función
  console.log("Este mensaje es lanzado por una función");
}

//invocamos la función 
mensajito ();