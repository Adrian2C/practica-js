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
    age:29,
    alias:"comida rica",
    walk: function (){
        console.log("la persona camina")
    }
}

console.log(person2.walk())


let person3 = {
    name: "jamon",
    age:29,
    alias:"comida rica",
    walk: function (){
        console.log("la persona camina")
    },
    job:{
        name:"programador",
        exp:15
    }
}
console.log(person3)