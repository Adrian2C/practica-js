//string ( cadena de texto)
const name = "adri el mejor";
let alias = "el adri";
let email = "adri@mail.com";

//number
let age = " 32";

//boolean

let isTeacher = true;
let isStudent = false;

//undefined

//variable sin valor, que luego se le puede agrgar o modificar el valor
let undefinedValue;
console.log(undefinedValue);

//null
//esta variable no va a tener valor
let nullValue = null;

//symbol
//valores unicos con valores epeciales a futuro
let mySymbol = Symbol();

//BigInt
//numeros tan grandes que un contenedor normal no puede contenerlo
let myBigInt = BigInt(30940537498539745982739817239848173481729812121421);

//otra manera de asignarlo es terminandolo en "n", y banca
let myBigInt2 = 29374239857283498713981n;


//Para mostrar el tipo de dato --> typeOf

console.log(typeof myBigInt)
console.log(typeof mySymbol);
console.log(typeof nullValue);
console.log(typeof isTeacher);