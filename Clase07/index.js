console.log(`3.Estoy en el archivo externo`);

// alert('Hola mundo')

var nombre
var apellido;

nombre = "Juan";
apellido = 'Pérez'

var provincia = "Entre Ríos"

console.log(provincia);

let capital = 'Buenos Aires';

console.log(capital);

capital = 'Viedma'

console.log(capital);

const dni = 24218555;

console.log(dni);

console.log("Mi nombre es " + nombre + " Mi DNI es " + dni);

console.log(`Mi nombre es ${nombre}`);

let numero1 = 1000;
let numero2 = 350;

suma = numero1 + numero2;

console.log(suma);

console.log("El resultado del producto es " + numero1 * numero2);

/* console.log("El resultado de la resta es " + numero1 - numero2); */

console.log("El resultado de la división es " + numero1 / numero2);

console.log("El resultado del módulo es " + numero1 % numero2); 


let verdadero = true;
let falso = false;

// Operadores relacionales
// < > == =! ! === <= >=

console.log(resultado = numero1 > numero2); //Debe devolver true

console.log(resultado = numero1 === numero2); //Debe devolver false

console.log(resultado = numero1 != numero2); //Debe devolver true

console.log(resultado = numero1 <= numero2); //Debe devolver false

//Condicionales

let edad = 18;

if (edad > 18) {
    
    console.log('Podés comprar alcohol');
} else { console.log('No podés comprar alcohol') };

let entradas = 80000;
let comprador = 80001;

if (comprador > entradas) {
    
console.log("no hay más asientos")
}

//OPeradores lógicos
// && || "Y inclusivo, si las dos condiciones son válidas" y "O, una o las dos son válidas"

let familia = true;

if (edad >= 18 || familia) {
    
    console.log("Podés comprar cerveza");
} else {
    
    console.log("No podés comprar cerveza");
}

if (edad >= 18 && familia) {
    
    console.log("Podés comprar cerveza");
} else {
    
    console.log("No podés comprar cerveza");
}