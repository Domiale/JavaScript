// Evaluación

/* 
Practica Clases y Objetos 
  1. Crear una clase llamada "Arma"
  Debe incluir las siguientes propiedades:
    * Nombre (string): nombre del arma
    * Tipo (sting): tipo de arma (ej. "espada","pistota","arco")
    * Daño (número): cantidad de daño que puede causar.
  
  Agrega un método llamado describir que imprima en consola:
    `Arma: Galadhrim | Tipo: arco | daño: 40`

  2. Crea un objeto llamado arsenal que contenga:
    * Una propiedad armas que sea un array vacío
    * Un método agregarArma que recibe un arma como parámetro y la agrega al array de armas
  
  3. Instancia Armas
    * Crea tres armas usando la clase Arma con diferentes valores para nombre, tipo y daño

   4. Agréga las armas al Arsenal
    * Usa el método agregar del objeto arsenal para agregar cada una de las armas al array de armas

   5. Muestra en la descrtipción de las Armas:
    * Usa un bucle for para recorrer el array armas dentro del objeto arsenal.

   * En cada interacción, llama al método describir de cada arma para mostrar sus detalles en la consola
*/

class Arma {
  constructor(nombre,tipo,daño) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.daño = daño;
  }
  descripcion(){
    console.log(`Arma: ${this.nombre} | Tipo: ${this.tipo} | Daño: ${this.daño}`)
  }
}

let arma1 = new Arma("Revolver","fuego",1500);
let arma2 = new Arma("Escopeta","fuego",2500);
let arma3 = new Arma("Espada","cortante",1000);

/* arma1.descripcion();
arma2.descripcion();
amra3.descripcion(); */

// objeto 

let arsenal = {
  armas : [],

  agregarArma : function(arma){
    this.armas.push(arma);
  }
}

arsenal.agregarArma(arma1);
arsenal.agregarArma(arma2);
arsenal.agregarArma(arma3);

// Bucle

for (let i = 0; i <= 2; i++){
  arsenal.armas[i].descripcion()
}