//Loops o Bucles

//estructuras de bucles
//repetir un bucle de codigo mientras una condicion sea true.
//indice--> es la posicion del elemento en el listado en el que se encuentra


//bucle FOR --> se evalua cada vez que se realiza una iteracion o bucle.

//se le da un nombre (i), y se lo inicia a partir de cero, luego le indico cuantas veces(con valor menores a 5),
for (let i = 0; i < 5; i++) {
    console.log(`hola${i}`)
}

//usando el length --> se marca como limite, la cantidad de elementos que posea el array/contenedor
//y usando el array[i], se indica que se quiere el elemento contenido en cada indice
const numbers = [1, 2, 4, 5, 6, 7, 8]
for (let i = 0; i <= numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

//while --> primero evalua y luego se ejecuta
let a = 0

while (a < 5) {
    console.log(`hola ${a}`)
    a++
}

//DO- WHILe --> necesito que se ejecute aun q sea un avez

a = 0
do {
    console.log(`Hola ${a}`)
    a++
} while (a < 5)

//for - of --> recorrer valores de algo iterable (una estructura de datos o algun tipo de dato)
myArray = ["perro", "gato", "chacarron", "pato", "chacajamon"]
mySet = new Set(["brais", "moure", "mouredev", 37, true])
myMap = new Map([
    ["name", "Brais"],
    ["email", "braismouredev@mail.com"],
    ["age", 37]
])
myString = "!cadena de javascript"

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}
for (let valor of myString) {
    console.log(valor)
}

//break y continue

for (let x = 0; x < 10; x++) {
    if (x == 5){
        continue
    }else if( x == 7){
        break
    }
    console.log(`hola: ${x}`)
}