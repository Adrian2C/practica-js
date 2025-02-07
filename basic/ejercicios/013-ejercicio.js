//guardar un listado de algo--> un array

//datos de usuario, y saber cuando acceder a cada uno, para modificarlo, editarlo o eliminarlo --> un map

//listado de elementos, que no se pueda repetir --> un set



//- Ejericio -

// 1. Crea un array que almacene cinco animales

let myArray = ["perro","gato","chacarron","pato","chacajamon"]

console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("al principio")

myArray.push("otro mas")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2,1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros
/* let elSet = new Set()
elSet = */
let mySet = new Set(["uno","dos","tres","cuatro","cinco"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("juan")
console.log(mySet)
mySet.add("dos")
mySet.add("doss")
console.log(mySet)
// 6. Elimina uno concreto a tu elección
mySet.delete("juan")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombreñ

/* let myMap = new Map() */
let myMap =new Map ([
    ["1","enero"],
    ["2","febrero"],
    ["3","marzo"],
    ["4","abril"],
    ["5","mayo"]
])

console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.has("5"))
console.log(myMap.get("5"))


// 9. Añade al mapa una clave con un array que almacene los meses de invierno
myMap.set("6","junio")
myMap.set("7","julio")
myMap.set("8","agosto")
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2 = new Array("juan","nico","jamon")
console.log(myArray2)

myArray2 = new Set(myArray2)
console.log(myArray2)