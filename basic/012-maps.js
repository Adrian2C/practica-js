//Maps

//coleccion de elementos que esta formado por un key y un value

//declaracion
let myMap = new Map()
console.log(myMap)

myMap = new Map ([
    ["name","Brais"],
    ["email","braismouredev@mail.com"],
    ["age",37]
])

console.log(myMap)

//Metoods y propiedades
//se necesita un elemento key, que es unico, y el elemento valor, que se puede repetir


//set  --> sirve para asignarr una key y un valor al map
myMap.set("alias","mouredeve")
console.log(myMap)
myMap.set("name","jimenes")
console.log(myMap)

//get --> sirve para buscar una key en el map

console.log(myMap.get("name"))

//has --> si un mapa tiene una clave

console.log(myMap.has("age"))
console.log(myMap.has("jamon"))

//delete
console.log(myMap)
myMap.delete("email")
console.log(myMap)


//keys, values y entries

//este retorna los id del map
console.log(myMap.keys())
//retorna los valores que estan contenidos en los id del map
console.log(myMap.values())
//entries todas las claves y valores del map
console.log(myMap.entries())

//clear --> blanquear un mapa

myMap.clear()
console.log(myMap)