"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

const calculo = ()=> {
    if (num1 > num2) {
        let resultado = num1 - num2;
        alert(`resultado ${resultado}, es positivo `);
    } 
    else if (num1 < num2) {
        let resultado = num2 - num1;
        alert(`resultado ${resultado}, es negativo `);
    }
    else {
        let resultado = 0;
        alert(`resultado ${resultado}, es cero `)
    }
}

calculo();