"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.
function esPar(numero) {
    return numero % 2 === 0;
}

let numero1 = parseInt(prompt("Ingrese el primer número entero:"));
let numero2 = parseInt(prompt("Ingrese el segundo número entero:"));
let numero3 = parseInt(prompt("Ingrese el tercer número entero:"));

for (let i = 0; i < 3; i++) {
    let numero = [numero1, numero2, numero3][i];
    if (esPar(numero)) {
        alert(`El número ${numero} es par.`);
    } else {
        alert(`El número ${numero} es impar.`);
    }
}