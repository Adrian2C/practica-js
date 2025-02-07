//string

let myName ="Brais"
let greeting =" hola " + myName + " !"
console.log(greeting);
console.log(typeof myName)

//longitud

console.log(greeting.length)

//acceso a los caracteres

console.log(greeting[1])
console.log(greeting[8])
console.log(greeting[12])

//metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.indexOf(("Brais")))

console.log(greeting.includes("Brais")) //para mostrar si esta o no en la cadena
console.log(greeting.includes("moure"))
console.log(greeting.slice(0,10))
console.log(greeting.replace('Brais','mouredev')) //si encuentras una palabra, cambiala por otra
greeting

//template literals ( plantilla literales)

let message = "Hola, este es mi mensaje de curso javascript"
console.log(message)

let email="ejntelnj@mail.com"
console.log(`hola, ${myName} como estsssaA?. tu email es ${email}`);