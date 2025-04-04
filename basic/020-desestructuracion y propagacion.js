// Desestructuracion y Propagacion (Destructuring y spread)

//destructuracion -->como trabajar con los valores de un array y un objeto
//permite extraer valor de un array u ojeto y asingarlos a  variables consisas

let myArray = [1, 2, 3, 4]

let person = {
    name: "brais",
    age: 38,
    alias: "mouredev"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

//destructuraicon

//sintaxis de arrays
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)

/* sintaxis arrays con valores predeterminados */


let [myValue5 = 3, myValue6 = 0, myValue7, myValue8, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

/* ignorar elementos */

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

/* sintaxis objects */
let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

//sintaxis de objetos con valores predeterminados
let { name2, age2, alias2, email = "mail@mail.com" } = person
console.log(name2)
console.log(age2)
console.log(alias2)
console.log(email)

//sintaxis con nuevos nombres de variables
let { alias: alias3, name: name3, age: age3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

//destructuracion con objetos anidados
let person3 = {
    name: "jamon",
    age: 29,
    alias: "comida rica",
    walk: function () {
        console.log("la persona camina")
    },
    job: {
        name: "programador",
        exp: 15,
        work: function () {
            console.log("trabaja")
        }
    }
}

//donde esta la propiedad,y donde la quiero ubicar
let { name: name4, job: { name: jobName } } = person3
console.log(name4)
console.log(jobName)

//propagacion (...)
// --permite expandir elementos de un array u objeto a otro array/objeto
/* sintaxis de arrays */
let myArray2 = [...myArray]//aca se hizo una copia en el array2

console.log(myArray2)


let myArray3 = [...myArray2,6,7]
console.log(myArray3)

//combinar arrays
let myArray4 = [...myArray,...myArray2,...myArray3]
console.log(myArray4)

//ssintaxis con objetcs

let person4 = {...person}
console.log(person4)


let person5 = {...person,mail:"brais@mail.com"}
console.log(person5)