//objetos

//todo lo que no es un dato primitivo, es un objeto
//coleccion de propiedades, que pueden contener dentro, datos primitivos, u otras cosas

let person = {
    name: "Brais",
    age: 37,
    alias: "mouredev"
}

//acceso a propiedades
// --con punto
console.log(person.name)
// --con corchetes
console.log(person["name"])


//modificacion

person.name = "jamon"
console.log(person.name)


console.log(person.age)
console.log(typeof person.age)
person.age = "37"
console.log(typeof person.age)

//borrar
delete person.age
console.log(person)

//añadir propiedades
person.mail = "braismoure@mail.com"
console.log(person)

//anidacion de ojects
//tmb se pueden crear objetos con funcion

let person2 = {
    name: "jamon",
    age: 29,
    alias: "comida rica",
    walk: function () {
        console.log("la persona camina")
    }
}

console.log(person2.walk())


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
console.log(person3)
console.log(person3.name)
console.log(person3.job.exp)
person3.job.work()

//igualdad de objetos
let person4 = {
    name: "bairs moiuies",
    alias: "el brais",
    mail: "mail@mail.com"
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person4 == person4)


console.log(person === person4)

console.log(person === person4)

//iteracion
for (let value in person4) {
    console.log(value + ": " + person4[value])
    console.log(person4[value])
}


//con IN, hacemos referencia a un valor dentro de un objeto
//ahora bien, si queremos un valor dentro de otro valor, de eun objeto, usmaos THIS


let person13 = {
    name: "Jonh Connor",
    age: 29,
    alias: "comida rica",
    walk: function () {
        console.log("la persona camina")
    },
    job: {
        name: "programador",
        exp: 15,
        work: function () {
            console.log(`${person13.name} de ${this.exp} años de experiencia trabaja como ${this.name}`)
        }
    }
}

console.log(person13)
person13.job.work()

//funciones como objetos

//---sirve para crear quiza una persona de forma generica, mediante una funcion

function Person(name, age) { //deberia ser una clase
    this.name = name
    this.age = age
}
let person5 = new Person("brais", 37)
console.log(person5)
console.log(person5.name)
console.log(typeof person5)
console.log(typeof person4)