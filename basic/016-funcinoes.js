/* para crear una funcion, se invoca function, y luego el nombre representativo */

function myFunc() {
    console.log("hola funcion")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}


//pueden tener parametros

function myFuncWithParams(name) {
    console.log(`hola ${name}`)
}
myFuncWithParams("brais")
myFuncWithParams("juan")

//funciones anonimas - o que no tienen un nombre definido
//puedo pasar un nombre cualquiera y valor cualquiera

//se guarda la funcion dntro de una constante, para poder crear una funcion generica y usable, donde se le brinda los valores por afuera como si fuera una funcino normal, solo que se evita darle los valores en el momento, en caso de que se deba crear la funcion pero todavia no se tenga los valores
const myFunc2 = function (name) {
    console.log(`hola ${name}`)
}
myFunc2("nombre de la personsa")

//arrow function

//si quiero una funcion que solo reciba un dato 
const myFunc3 = (name) => {
    console.log(`hola ${name}`)
}
const myFunc4 = (name) => console.log(`hola${name}`)

myFunc3("brais")
myFunc4("jamon crudo")

//uso de parametros
function sum(a, b) {
    console.log(a + b)
}
sum(4, 3)
sum(10, 4)
sum(3)

//si no quiero que haya errores, y quiero darle un valor por defecto ne caso que se brinden datos erroneos
function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}
defaultSum(1)
defaultSum(3, 5)

//retorno de valores

//si quiero que la funcion muestre el resultado pero no por consola

//--aca se crea la funcion
//--y se retorna el valor pero no se muestra
function mult(a, b) {
    return a * b
}
//--luego se realiza la funcion con los parametros
//--y se guarda el valor en una variable
//--esta se muestra luego por consola
let result = mult(5, 10)
console.log(result)//

//funciones anidadas

function extern() {
    console.log("funcion externa")
    function intern() {
        console.log("funcion interna")
    }
        intern()//si esta se ocultaa, el console del intern desaparecee
}
extern()

//funciones de orden superior
//--funciones que reciben otras funciones como argumentos
//---para que este tipo de funcion funcione
//---hay que crear la funcion, darle los parametros que seran
//---una funcion y sus parametros
//---se llama la funcion, adentro, pidiendo los datos de parmetro
//---y para hacerla funcionar, como parametro, se pone la funcion a llamar, y el parametro a mostrar
function applyFunc(Func, param) {
    Func(param)
}
applyFunc(myFunc4, "funcion de ordene superior")


//ForEach

myArray = [1,2,3,4]
myArray.forEach(function(value){
    console.log(value)
})
//--es lo mismo que

mySet = new Set(["brais", "moure", "mouredev", 37, true])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismouredev@mail.com"],
    ["age", 37]
])

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))