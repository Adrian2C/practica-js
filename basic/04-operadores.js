//operador aritmetico

console.log(1 + 3); // suma
let a = 5
let b = 10
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b) //modulo
console.log(a**b)
a++
console.log(a)//decremento
b--
console.log(b)

let myVariable = 2
myVariable;

//operadores de comparacion

console.log(a > b)
console.log(a < b)
console.log(10 <= 10)
console.log(10 == "10")


//operadores logicos

//AND (&&)

console.log(5 > 10 && 20 > 30)
console.log(5 < 10 && 20 < 30)


//OR ((||))
console.log(5 < 10 || 20 > 30)
console.log(5 < 10 || 20 < 30)
console.log(5 > 10 || 20 > 30)
console.log(5 > 10 || 20 < 30)

//NOT (!)
console.log(!true)
console.log(!false)

console.log(!(5 > 10 || 20 < 30))
console.log(!(5 < 10 && 20 < 30))

//ternarios
let isRaining = true
isRaining ? console.log("esta lloviendo") : console.log("no esta lloviendo") 

isRaining = false
console.log(isRaining)