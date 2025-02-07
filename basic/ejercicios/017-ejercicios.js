/*
Clase 32 - Ejercicios: Funciones
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
    return a + b
}
console.log(sum(3, 4))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function numeroMayor(array) {
    if (array.length === 0) return undefined

    let maximo = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i]
        }
    }
    return maximo
}
console.log(numeroMayor([1, 2, 3, 4, 5, 6, 1231]))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(texto) {
    let contador = 0
    let vocal = ["a", "e", "i", "o", "u"]

    for (let i = 0; i < texto.length; i++) {
        if (vocal.includes(texto[i])) {
            contador++
        }
    }
    return contador
}
console.log(contarVocales("gola"))
//
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function mayus(array) {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i].toUpperCase())
    }
    return nuevoArray
}

console.log(mayus(["jamon", "otro", "palabra"]))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(n) {
    if (n <= 1) return false;
    if (n === 2) return true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
    }
    return true

}
console.log(esPrimo(2))
console.log(esPrimo(5))

//---se crea una funcion, donde recibe un parametro. se analiza si ese numero e menor o igual a uno, dara false. y si es 2, da true. 
//---luego se hace un bucle por cada elemento recibido, si el resultado del modulo da 0, indica q no es un numero primo, dando como retorno de vlor "false", caso contrario, da True


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function inCommon(arr1, arr2) {
    return arr1.filter(elemento => arr2.includes(elemento))
}

console.log(inCommon(["1", "2", "3"], ["4", "3", "1", "8"]))
console.log(inCommon(["a", "e", "v"], ["v", "c", "a", "e"]))


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function numero(array) {

    let suma = 0;//crea variable para almacenar el resultado, dandole valor por defecto = 0
    for (let i = 0; i < array.length; i++) {//se recorre todo el array
        if (array[i] % 2 === 0) {//se analiza todos los numeros del array,  para ver si da =0(o es numero par)
            suma += array[i] //se suma el numero analizado, por el que ya esta o fue sumado
        }
    }
    return suma //pedimos el restulado, y lo mostramos en el console
}
console.log(numero([2, 6, 54, 42, 24, 3]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function sqrNum(arr2) {
    let resultado = []

    for (let i = 0; i< arr2.length; i++) {
        resultado.push(arr2[i]**2)
    }
    return resultado
}

console.log(sqrNum([2, 6, 54, 42, 24, 3]))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado