//1. Crea un objeto con 3 propiedades
let pizza = {
    masa: "piedra",
    queso: "muza",
    extra: "ninguno"
}

//2. Accede y muestra su valor
console.log(pizza)

//3. Agrega una nueva propiedad
pizza.relleno = "jamon"
console.log(pizza)

//4. Elimina una de las propiedades del objeto
delete pizza.extra
console.log(pizza)

//5. Agrega una funcino e invocala
pizza.cocinar = function () {
    console.log("cocinandose")
}
console.log(pizza)
pizza.cocinar()

//6. Itera las propiedades del objeto
for (let value in pizza) {
    console.log(value)
}

//7. Crea un objeto anidado
let chef = {
    name:"juan",
    age:39,
    profesion:{
        name:"chef",
        especialidad:"pizza"
    }
    
}
console.log(chef)

//8. Accede y muestra el valor de las propieades anidadas
console.log(chef.profesion)
//9. Comprueba si los dos objetos creados son iguales


//10. Comprueba si dos propiedades diferentes son iguales