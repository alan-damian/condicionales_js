"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Investigación y desarrollo.
// Busque en la red qué es y cómo utilizar el método .length 
// Realice un programa que solicite por consola 3 palabras cualesquiera
// Luego el programa debe imprimir la cantidad de caracteres de cada palabra
// ingresada utilizando .length 

let palabra1 = prompt("Ingrese la primera palabra:");
let palabra2 = prompt("Ingrese la segunda palabra:");
let palabra3 = prompt("Ingrese la tercera palabra:");

let longitud1 = palabra1.length;
let longitud2 = palabra2.length;
let longitud3 = palabra3.length;

alert(`La primera palabra "${palabra1}" tiene ${longitud1} caracteres.
      La segunda palabra "${palabra2}" tiene ${longitud2} caracteres.
      La tercera palabra "${palabra3}" tiene ${longitud3} caracteres.`);
