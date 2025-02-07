//Array

//declarar el array
let myArray = []  //se llena directamente los huecos para usar
let myArray2 = new Array() // esta es una forma mas complicada, abre los espacios que luego hay que declarar para llenar

console.log(myArray)
console.log(myArray2)

myArray= [1]

myArray

//si al array le quiero dar un tamaño en especifico y luego asignar los elementos al array

myArray2 = new Array(3)//aca le digo que este array tiene 3 bloques disponibles

myArray2
myArray2[0] = "hola"
myArray2
myArray2[1] = "mundo"
myArray2
myArray2[2] = "hahaj!"

//aca el elemento 3 lo deja en reseva para proximo elemento
myArray2[4] = "hahaj!"
myArray2

myArray = []
myArray

myArray[1] ="Brais"
myArray[0] ="MOuredev"
myArray[2] ="MOurede"
myArray

//Metodos comunes

//--Push ((introducir elementos)) / Pop (( quitar elementoss))

myArray
myArray.push("gato")

myArray
myArray.push("pato")
myArray
myArray.pop() //elimina el ultimo elemento, y lo devuelve(se puede pedir este elemneto con un console.log)
myArray
myArray.pop()


//SHIFT ((elimina el primer elemento del Array y lo devuelve))
myArray
myArray.shift()

myArray
console.log(myArray.shift())

//UNSHIFT  ((agrega uno o mas elementos al principio del array))
myArray
myArray.unshift("principio","elemento")
myArray
console.log(myArray.unshift())

//length --> longitud del elemento

console.log(myArray.length)

//vaciar un contenedor de array

 //--forma politicamente correcta
 //-- -- reinicializando
 myArray = []
 myArray
 
 myArray=["hola"]
 myArray
 myArray.length= 0 //alternativa politicamente incorrecta
 myArray


 //slice --> devuelve una copia superficial de una porcion
 //armar un nuevo array con la porcion que quiero

 myArray2
 myArray2.push(37)
 myArray2

//splice

//elimina elementos en las posiciones selecionadas, y permite tmb agregar  o cambiar elementos en dichas posiciones

myArray2.splice(1,3,"hola")
console.log(myArray2)