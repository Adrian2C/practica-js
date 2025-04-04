//crear plantillas de objetos, para dar los valores mas tarde
class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//sintaxis
let chango = new Person("Brais", 38, "mouredev")
let chango2 = new Person("Juan", 38, "elchangoneitor")
console.log(chango)
console.log(chango2)

//valores por defecto
class defaultPerson {
    constructor(name = "default name", age = 0, alias = "sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}
let chango3 = new defaultPerson("jamon", "3", "el alias")
console.log(chango3)

//acceso a propiedades
console.log(chango3["name"])
console.log(chango3.name)

chango3.alias = "el jamonsiño"
console.log(chango3)


//funciones en clases

class ChangoConMetodo {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk() {
        console.log("la persona camina")
    }
}

let chango4 = new ChangoConMetodo("kike", 29, "el kike")
console.log(chango4)
chango4.walk()//aca se ejecuta el metodo(funcion de la clase)


//--tambien hay propieaddes que se pueden acceder de manera distinta, como algun tipo de dato privado para que nadie pueda acceder

class ChangoPrivado {

    #bank //con eel hashtag, se define como privada essa propiedad y no se puede ver ni modificar

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay() {
        this.#bank
    }
}


//si se quiere poder ver y no modificar una propiedad se usa get y set
//GETTER y SETTER

class GetChango {
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name() {
        return this.#name
    }
    set bank(bank) {
        this.#bank = bank
    }
}

chango6 = new GetChango("kiko", 34, "kikinsio", "IBAN1929183825")

console.log(chango6)
console.log(chango6.name)

console.log(chango6.bank)
chango6.bank = "new IBAN2323"
console.log(chango6.bank)


//el get permite que podamos leer una propiedad especifica, no nos deja escribir ni crear, pero si podemos verlo si buscamos puntual podemos leer


//pero si queremos crear un dato, poder escribirle ensima pero no verlo,(como un banco, poder ver ciertos datos, pero no complto, o ninguno...y si poder escribir sobre ese dato) aca se usa el SET


/* ---------------- */
//HERENCIA
/* sirve para heredar propiedades y comportamiento de una clase */

//---si queremos que una clase herede un comportamieento pero que se peuda personalizar
//se usa extend y la clase de la cual se hereda

class Animal {
    constructor(name) {
        this.name = name
    }
    sound() {
        console.log("emite un sonido generico")
    }
}


class Dog extends Animal {
    sound(){
        console.log("guau")
    }
    run() {
        console.log("El perro corre")
    }
}

let myDog = new Dog("moureDog")
console.log(myDog)
myDog.run()
myDog.sound() //--> luego de ponerle una funcion propia al perro, deja de hacer lo heredado para hacer lo indicado 

class Fish extends Animal {
    constructor(name, size) {
        //super llama a la clase padre
        super(name)//aca trae el "nombre" de la clase animal
        this.size = size
    }
    swim() {
        console.log("el pez nada")
    }
}


let myFish = new Fish("moureFish", 10)
//myFish.run() --> este no anda xq el pez no tiene funcino de correr
myFish.swim()
myFish.sound() //--> este funciona xq recibe la herencia de la clase de Animal
console.log(myFish.size)

//---metodos estaticos
//----se puede llamar a la clase misma sin necesidad de hacer una instancia o paso intermedio(sirve x ejem, operaciones matematicas)
//se puede hacer operaciones mixtas, creando funciones o constructores

//se encapsula una clase predefinida y se ua el paquete completo para hacer algo ya predefinido

class MathOperations{
    static sum(a,b){
        return a+b
    }
}

console.log(MathOperations.sum(3,20))