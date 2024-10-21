/* 
Practica Arreglos - Boku no Hero

1. Definir un arreglo llamado "Superheroes" que contenga 5 nombres de personajes de Boku no Hero y muestralo en la consola.
2. Agregamos un nuevo héroe al final de array.
3. Eliminar el primero Heroe.
4. Cambiamos al 3r héroe por otro más poderoso.
5. Ordenar alfabeticamente el array "heroes".
6. Crear un nuevo array llamado enemigos, con los ultimos heroes del array.
7. Mostrar por consola: heroes y enemigos
*/

let Superheroes = ["Aoyama", "Midoriya", "Bakugou","Todoroki","Kirishima"]; 
/* console.log(Superheroes);
 */
Superheroes.push("Sero");
/* console.log(Superheroes);
 */
let quitarPrimero = Superheroes.shift();
/* console.log(Superheroes);
console.log(quitarPrimero); */

Superheroes[3] = "All Might";
/* console.log(Superheroes); */

Superheroes.sort();
/* console.log(Superheroes);
 */
let enemigos = Superheroes.splice(2, 5);
console.log(enemigos);

console.log(Superheroes);