/* 
Objetos
  Es una coleccion de propiedades y métodos.

  Las propiedades describen las caracteristicas del objeto.

  Los métodos describen las comportamientos del objeto.

  Los objetos pueden contener distintos tipos de datos: strings, numbers, arrays, booleans, otros objetos e incluso funciones.

Sintaxis

  let nombreObjeto = {
   //Propiedades y Métodos
  };

Propiedades dentro dn objeto se describen en pares "clave": "valor"

  let nombre = "Yato" //Variable
  nombre : "Yato" //Propiedad

Las propiedades de un objeto se separan por las comas " , " después del valor.

Las claves de las propiedades pueden tener más de una palabra. Pero se deberan escrinir entre comillas "" o '' 

  "nombre real" = "Yato",

Tambien se pueden escribir en formato Camel Case y sin comillas

nombreReal = "Yatito",
*/

// Definir objeto

let personaje = {
  nombre : "Frodo Bolson",
  edad : 52,
  recidencia : "La Comarca",
  poderes : false,
  habilidadesHumanas : ["valor","determinación", "compañerismo"]
}

// Accedemos al valor de las propiedades del objeto

console.log(personaje.nombre);
// console.log(personaje["Habilidades humanas"][2] );
console.log(personaje.habilidadesHumanas[0]);

// Agregar y borrar propiedades de objetos

personaje.enemigos = ["Saurón","Gollum"]; //Agregar 

delete personaje.poderes; //Borrar.

/* 
Crear solitos y solitas un objeto llamado mascota que contenga 3 propiedades: nombre, tipo y edad con sus respectivos valores.

Anidamos objetos

Nombramos al objeto y lo definimos con las llaves {} -Dentro de las llaves 

Metodos
  Un metodo es una funcion que se define como propiedad de un objeto.

Sintaxis
  nombreClave : function(parametros) {
    //Codigo que se ejecuta
  }
this
  Es una palabra reservada que se refiere al objeto actual y sirve 
*/

let mascota = {
  nombre : "Kala",
  tipo : "perro",
  edad : 6,

// Objeto anidado
  fisico : {
  estatura : 40,
  peso : 30,
  color : "Cafe"
  },

// declaramos un metodo
  saludo : function(amo) {
    // Codigo que se ejecuta al invocar una funcion
    alert(`guau guau guau! Me llamo ${this.nombre} y mi ama es ${amo} ❤️`);
  } 

}

console.log(mascota.fisico.color);
console.log(mascota.fisico.estatura);
console.log(mascota.fisico.peso);

mascota.fisico.colorOjos = "negro"; // Agregar
delete mascota.fisico.color; // Eliminamos

// Accedemos al método saludo del objeto mascota

mascota.saludo("Ale");