"use strict";
let num1;
let num2;
let array_resultados = [];
let resultadosMap = new Map(); // Map para guardar los resultados con índices
let resultado;

function calculadora(){
    do 
    {
        num1 = parseInt(prompt("Introduce el primer número"));
        num2 = parseInt(prompt("Introduce el segundo número")); 
    } 
    while (isNaN(num1) || isNaN(num2));
    return {num1, num2};  // Devolvemos los dos números como un objeto
}

function actualizarMap(resultado) {
    let indice = resultadosMap.size + 1; // Índice basado en el tamaño actual del Map
    resultadosMap.set(indice, resultado); // Guardamos el índice y el resultado
}

function suma () {
    let {num1, num2} = calculadora();  // Llamamos a calculadora dentro de suma
    resultado = num1 + num2;
    console.log(`Resultado de la suma de ${num1} y ${num2} es ${resultado}`);
    array_resultados.push(resultado);
    actualizarMap(resultado); // Guardamos el resultado en el Map   
    return resultado;
    
}

function resta () {
    let {num1, num2} = calculadora();  // Llamaos a calculadora dentro de resta
    resultado = num1 - num2;
    console.log(`Resultado de la resta de ${num1} y ${num2} es ${resultado}`);
    array_resultados.push(resultado);
    actualizarMap(resultado); // Guardamos el resultado en el Map
    return resultado;
    
}

function multiplicacion () {
    let {num1, num2} = calculadora();  // Llamamos a calculadora dentro de multiplicacion
    resultado = num1 * num2;
    console.log(`Resultado de la multiplicacion de ${num1} y ${num2} es ${resultado}`);
    array_resultados.push(resultado);
    actualizarMap(resultado); // Guardamos el resultado en el Map
    return resultado;
}

function division () {
    let {num1, num2 } = calculadora(); // Llamamos a calculadora dentro de division
    if (num2 === 0) {
        console.error("No se puede dividir entre cero.");
        return null;
    }
    resultado = num1 / num2;
    console.log(`Resultado de la division de ${num1} y ${num2} es ${resultado}`);
    array_resultados.push(resultado);
    actualizarMap(resultado); // Guardamos el resultado en el Map
    return resultado;
}

function raiz_cuadrada() {
    let numero;
    do 
    {
        numero = parseInt(prompt("Introduce el número para calcular la raíz cuadrada"));
    } 
    while (isNaN(numero));
    if (numero < 0) {
        console.error("No se puede calcular la raíz cuadrada de un número negativo.");
        return null;
    }
    resultado = Math.sqrt(numero);
    console.log(`Resultado de la raíz cuadrada de ${numero} es ${resultado}`);
    array_resultados.push(resultado);
    actualizarMap(resultado); // Guardamos el resultado en el Map
    return resultado;
}

function resultados() {
    console.log("Historial de resultados (Array):");
    for (let i = 0; i < array_resultados.length; i++) {
        console.log(`Resultados: ${array_resultados[i]}`);
    }

    console.log("Historial de resultados (Map):");
    for (let [indice, resultado] of resultadosMap) {
        console.log(`Operación ${indice}: ${resultado}`);
    }
}
