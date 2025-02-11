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
        exp:15,
        work:function(){
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
    name:"bairs moiuies",
    alias:"el brais",
    mail:"mail@mail.com"
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person4 == person4)


console.log(person === person4)

console.log(person === person4)