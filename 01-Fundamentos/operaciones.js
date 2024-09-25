/* 
Operadores
  Son simbolos utilizados para realizar operaciones sobre valores y variables

1. Aritméticos
2. Asignación
3. Comparación
*/

/* 
1. Opradores Aritmeticos 
  Se utilizan para cálcular matemáticos.
*/

// Suma (+): Suma dos valores

let suma = 16 + 6; //22

console.log(suma);

// Resta (-): resta el segundo 
let resta = 54 - 15; //39
console.log(resta);

// Multiplicación (*): Multiplica los dos valores 
let multi = 4 * 8; // 32
console.log(multi);

// Division (/): Divide el primer valor por el segundo
let divi = 20/4; // 5
console.log(divi);

// Módulo (%): Devuelve el resto de la división entre dos valores.
let mod = 7 % 2; //1
let mod2 = 9 % 3; //0
console.log(mod);
console.log(mod2);

// Exponienciación (**). Eleva el número a la potencia del otro 
let expo = 3 ** 2;
let expo2 = 5 ** 12; 
console.log(expo);
console.log(expo2);

// Incremento (++) : Incrementa el valor en 1
let x = 2;
x++;
console.log(x);

// Decremento (--) : Decrementa el calor en 1 
let y = 6;
y--; //5
console.log(y);

/* 
2. Asignación
  Estos operadores asignan valores a las variables 
*/
// Asignacion (=): Asigna un valor a una variable.

let w = 45;

//Asignación con suma (+=): Suma el valor a una variable y la reasigna 

w += 5; // 50
console.log(w);

//Asignacion con resta (-=): Resta el valor a la variable y la reasigna 

w -= 15; //35
console.log(w);

//Asignación con multiplicación (*=): Mutipla una variable por un valor y la reasigna.

w *= 2; //70
console.log(w);

//Asignacion de división (/=): Divide una variable por un valor y la reasigna

w /= 10; //7
console.log(w);

/* 
3. COmparación 
  Estos operadores comparan dos valores y devuelven "true" o "false".
*/

// Igualdad (==): Compara dos valores para ver si son iguales. NOTA: Sin tener en cuenta el tipo de dato.

let valor = "5";
let compara = 5 == valor;
console.log(compara); //true

// Igualdad estricta (===): Comparar dos valores y su tipo, para ver si son exactamente iguales.

compara = 5 === valor; 
console.log(compara)//false

// Desigualdad (!=): Verifica si dos valores no son iguales. NOTA: No toma en cuenta el tipo de dato 

let valor1 = "10";
let valor2 = 10;

console.log(valor1 != valor2); //false

//Desigualdad estrictas (!==); Verifica si dos valores y sus tipos no son exactamente iguales

valor1 = "10";
valor2 = 10;

console.log(valor1 !== valor2); //true 

//Mayor que (>): Verifica si el promer valor es mayor que el segundo.

compara = 5 > 5;
console.log(compara);//false

//Mayos o igual que (>=): Verificar ai el primer valor es mayor o igual que el segundo.

compara = 5 >= 5; 
console.log (compara); //true

// Menor que (<): Verifica si el primer valor es menor que el segundo 

console.log(3 < 8); //true
console.log(10 < 8); //false
console.log ("5" < 5); //false

// Menor o igual que (<=): Verifica si el primer valor es menor o igual que el segundo valor.

console.log(4 <= 10); //true
console.log(20 <= 100); //true
console.log(45 <= 7);//flase
console.log(8 <= 8); //true