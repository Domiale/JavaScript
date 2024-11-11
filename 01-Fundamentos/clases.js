/* 
Un clase en Js es una plantilla para crear objeto.
Es una forma moderna y natural para trabajar con la programación orientada a objetos.

Es una forma 

Método constructor
  El método constructor es un método especial que se ejecuta automáticamente cuando se crea una nueva instancia de la clase.

  Dentro del método constructor, pasamos las propiedades y valores de las clases.

  Las propiedades pasan como parametros y luego se asignan con un "this"

Sitanxis Básicas

  class nombreClase {
    // Método Constructoe

    constructor (par1 , par2) {
      this.par1 = por1;
      this.par2 = par2;
    }
  }

Instancia de Clase
  Para crear un objeto usando la clase, se utiliza la palabra "new", esto invoca al cnstructor de la clase.

SIntaxis 
  new NombreClase(parte1, parte2);

Esta instancia se asigna a una variable 

*/

// Definir mascota
class Mascota {
  constructor(nombre,edad) {
    this.nombre = nombre; // propiedad nombre
    this.edad = edad; //propiedad edad
  }
  saludo(){
    console.log(`¡Hola! Me llamo ${this.nombre} y tengo ${this.edad} años!`)
  }
}

// Instancear la clase Mascota. Creamos un objeto con la plantilla mascota
let mascota1 = new Mascota("Kala", 12);
let mascota2 = new Mascota("Jade", 6)

// Accedemos a los datos de las instancias 
console.log(mascota2.nombre);
console.log (mascota2.edad);

//Lanzar los métodos de los pbjetos
mascota1.saludo();
mascota2.saludo();