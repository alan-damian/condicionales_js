"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// En este ejercicio les pediremos que investiguen por su cuentan
// algunas propiedades de javascript para manipular números
// usando la librería "Math":
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

// Realice un programa que solicite ingresar tres valores de temperatura
// De las temperaturas ingresadas por consola determinar:
// 1 - ¿Cuáles de ellas es la máxima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.max",
// investigue y busque como utilizarla.
// 2 - ¿Cuáles de ellas es la mínima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.min",
// investigue y busque como utilizarla.

// En cada caso imprimir en pantalla el resultado


let temperatura1 = parseFloat(prompt("Ingrese la primera temperatura:"));
let temperatura2 = parseFloat(prompt("Ingrese la segunda temperatura:"));
let temperatura3 = parseFloat(prompt("Ingrese la tercera temperatura:"));

let temperaturaMaxima = Math.max(temperatura1, temperatura2, temperatura3);
let temperaturaMinima = Math.min(temperatura1, temperatura2, temperatura3);

alert(`La temperatura máxima ingresada es: ${temperaturaMaxima}`);
alert(`La temperatura mínima ingresada es: ${temperaturaMinima}`);