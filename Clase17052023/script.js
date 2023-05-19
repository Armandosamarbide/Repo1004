/*

Javascript es un lenguaje de programación interpretado, de alto nivel, debilmente tipado.
No hay un momento de compilación, es "en el momento"

*/

console.log('Hola')

// TIPOS DE DATOS PRIMITIVOS

// Numbers: dato numérico. Ex: 90, -90, 5.4, etc.
// Los datos numéricos NO van entre comillas.

// NO hay decimales en Javascript, hay FLOTANTES
// Infinity
// NaN = Not a Number

// Strings: cadena de texto.
// Va entre comillas, pueden ser '' o "". Ex: 'Menganito es un buen alumno'.

// Booleans
// Tipo de dato que puede ser verdadero o falso.
// Se escribe true o false, no hay otro.

// Undefined
// Es "undefined". Va a aparecer cuando un dato no esté definido. Ex: cuándo terminamos el curso es "undefined",

// NULL
// NULL es "ausencia de valor".

// Symbol (No es parte de la cursada, no lo vamos a ver)

// OPERADORES ARITMÉTICOS

// + - * / %, suma, resta, multiplicación, división, resto de la división.
// Siempre devuelven un tipo de dato numérico.
// typeof <argumento>: Devuelve el tipo de dato.

// +

// Si sumo dos strings, los concatena.

// COMPARADORES
// Necesita dos datos para funcionar, siempre devuelven boolean.

// ==, ===, !=, !==, >, <, =<

// == para comparar igualdad.

/* GUARDAR INFORMACIÓN */

// Variables: espacio reservado en memoria donde podemos guardar algo.
// Tres formas de hacerlo: var, let, const

// var: pertenece a ES5 para atrás, nace con el lenguaje, ya NO se usa.
// Uso: var <nombre> = 50
// Por ser JS un lenguaje débilmente tipado, no necesito aclarar el tipo de dato de la variable cuando la declaro.
// Inicialización implícita: las variables en JS van a tener un valor por defecto, undefined.
// var no necesita ser declarada, podemos poner por ej nombre = 'martín'.
// var tiene hoisting.
// Se permite la redeclaración. O sea, puedo tener dos variables con el mismo nombre.

/* var bateria = 100
bateria = 55
var edad = 48
edad = 49 */

// let: funciona distinto a var, pero con algunas diferencias. No puedo llamarla antes de declararla.
// NO tiene hoisting.
// Tiene inicialización implícita en undefined.
// Podemos reasignar.
// NO se puede redeclarar, no podemos tener dos variables con el mismo nombre.

/* let nombre
nombre = 'martin'
console.log(nombre) */

// CONST
// NO tiene hoisting
// NO tiene inicialización implícita
// NO tiene reasignación
// NO se puede redeclarar

/* const PI = 3.14
console.log(PI) */

// FUNCIONES NATIVAS: funciones ya integradas con JS

// console.log() es una función que me permite imprimir mensajes en el monitor. Es no bloqueante.
// alert('Hola'): es un código bloqueante.
// prompt("Ingrese su edad"): permite solicitar un mensaje al usuario.
// Number (en mayúscula): pasa un string numérico a un número.
// Typeof: devuelve el tipo de dato, lo vimos el 15/05.


/* let anios = Number(prompt("Edad"))
console.log(anios) */

// IF - Condicional

/* let edad = prompt("Ingrese su edad")
if (edad >= 18) {
    console.log('Puede pasar')
} else {
console.log('Usted es menor de edad, no puede pasar')
} */

// OPERADORES LÓGICOS

//AND, OR, NOT

/* if(nombre && isNan(nombre)) {
console.log("escribió un nombre")
} else { console.log("No escribió un nombre")} */

/* let estaprendida = false
estaprendida = !estaprendida Acá estás guardando el valor de estaprendida como true */

// AND: que se cumplan las dos condiciones,
/* let estarica = true
let espera = 20

if (estarica && espera <= 30) {
    console.log("Me quedo")
} else { console.log("Me voy") } */

// OR

/* let dinero = 300
let diaDelMes = 1
if (dinero >= 1000 || diaDelMes == 1) {
    console.log("Salgo de shopping")
} else {console.log("No voy a comprar")}*/

// Podés ir al ejército

/* let edad = 28
if (edad >= 18 && edad <= 24) {
    console.log("Podés entrar al servicio militar")
} else {    console.log("No Podés entrar al servicio militar")}*/

/* Si la factura es A, el IVA no está incluído, si la factura es B, el IVA está incluído, si es C, el IVA está excento */

/* let tipodefactura = 'B'
if (tipodefactura == 'A') {
    console.log("La factura no tiene el IVA incluído")
} else if (tipodefactura=='C') {
console.log("La factura incluye el IVA")
} else {console.log("La factura está excenta de IVA")} */

/* Crear una condicional que verifique que la edad sea mayor o igual a 18,
en caso de ser asi decir por consola "es mayor de edad" sino decir "es menor de edad"

let a = prompt("Ingrese la edad")
if (a >= 18) { console.log("Es mayor de edad") }
else if (a < 18 && a >= 1) { console.log("Es menor de edad") }
else {console.log("Edad inválida")} */

/* Crear un programa que solicite al usuario un precio, eso 
guardarlo en una variable.Si el precio es inferior a 3000 
entonces decir por consola "es barato", si el precio es superior 
a 3000 decir por consola es caro */

/* let a = prompt("Ingrese precio")
if (a > 3000) { console.log("Muy caro") }
else if (a <= 3000 && a > 0) { console.log("Es barato") }
else if (a == 0) { console.log("Regalado") } 
else {console.log("Precio inválido")} */

/* Solicitar al usuario 3 números y verificar cuál es 
el mayor de los 3(nos muestra el numero mayor por consola) */


/*let a = prompt("Ingrese primer valor")
let b = prompt("Ingrese segundo valor")
let c = prompt("Ingrese tercer valor")
if (a > b && a > c) { console.log(+ a" es el mayor") }
else if (b > a && b > c) {console.log(+ b" es el mayor") }
else if (c > a && c > b) { console.log(console.log(+ c" es el mayor")) }
else if (a==b==c) {console.log("Los tres números son iguales")} */


// Verificamos si el número es positivo, negativo o cero (nos dira por consola a que categoria pertenece)

/* let c = prompt("Ingrese la edad")
if (c >= 18 && c <= 65) { console.log("La persona está en edad laborable") }
else if (c = 0) { console.log("La persona no existe") }
else { console.log("la persona no está en edad laborable") } */

// Verificamos si la edad está en el rango de 18 a 65 años, si se cumple la condicion, se dira por consola
// Esta en edad laborable

/* Otra forma de comparar tres números bajado de CHATGPT ;)

var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
var numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Comparar los números para determinar el mayor
var mayor = numero1;

if (numero2 > mayor) {
  mayor = numero2;
}

if (numero3 > mayor) {
  mayor = numero3;
}

// Mostrar el resultado
console.log("El número mayor es: " + mayor); */

