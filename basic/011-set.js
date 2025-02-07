//set --> 


//declaracion

let mySet = new Set()

//inicializacion

mySet = new Set("brais", "moure", "mouredev", 37, true)//asi no se inicializa un set
console.log(mySet)

mySet = new Set(["brais", "moure", "mouredev", 37, true])//asi se inicializa un set con el numero de posicion de cada elemnto
console.log(mySet)


//metodos comunes

//Add y Delete

//add -> añadir un dato que quiera
//este metodo lo agrega con un hash unico de ID, y retorna true y si lo hizo o no

mySet.add("mouredev.com")
mySet

mySet.delete(1)
mySet
mySet.delete("mouredev.com")
mySet  //aca borro unicamente cuando di el hash id unico al elemento que queria borrar


//has --> si un elemento existe en un arreglo


console.log(mySet.has("moure"))
console.log(mySet.has("hola"))


//size

console.log(mySet.size)


//convertir set en array

let myArray= Array.from(mySet)
console.log(mySet)

//convertir un array en set

mySet = new Set(myArray)
console.log(mySet)

//Los Sets no admiten duplicados
//al minimo cambio en la letra (case sensitive) crea nuevo elemento

mySet.add("braismouredev@mouredev.com")
mySet.add("braismouredev@mouredev.com")
mySet.add("BraisMouredev@mouredev.com")
console.log(mySet)


