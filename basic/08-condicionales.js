//condicionales

//if , else if, else

//if (si pasa esto, pasa esto)
//se declara variable
let age = 30
//se inicia el condicional, con su condicion, y se pone el resultado
if (age == 37) {
    console.log("la edad es 37")
}

//else (si no)

if (age == 37) {
    console.log("la edad es 37")
} else {
    console.log("la edad no es 37")
}

//else if (sino, si)

if (age == 37) {
    console.log("la edad es 37")
} else if (age < 18) {
    console.log("la edad es menor a 18")
} else {
    console.log("la edad no es 37")
}

//Ternarios --> forma compacta de escribir un if/else

const message = age == 37 ? "edad es 37" : "no es 37"
/* el resultado de la variable age, se guarda en la constante message, y se realiza la pregunta -> si la sentencia es true, sale la primer oracion, si es false, se imprime la segunda oracion. */

console.log(message)

//SWITCH - alternativa a if/else con muchas variantes

/* util si tenemos muchas opciones que comparar pero contra una unica cosa */

let day = 0
let dayName

switch (day) {
    case 0:
        dayName = "lunes"
        break
    case 1:
        dayName = "martes"
        break
    case 2:
        dayName = "miercoles"
        break
    case 3:
        dayName = "jueves"
        break
    case 4:
        dayName = "viernes"
        break
    case 5:
        dayName = "sabado"
        break
    case 6:
        dayName = "domingo"
        break
    default:
        dayName="numero de dia incorrecto"
}

