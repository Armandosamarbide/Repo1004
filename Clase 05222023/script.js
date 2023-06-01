// Bucle FOR

/*console.log("Imprimir los números de 1 al 10")

for (let i = 1; i <= 10; i ++) {
console.log(i)
}

console.log("Imprimir los números de 2 al 20")

for (let i = 2; i <= 20; i = i + 2) {
console.log(i)
}

console.log("Imprimir los números de 1 al 19")

for (let i = 1; i <= 19; i = i + 2) {
console.log(i)
}

console.log("Imprimir los números de 10 al 1 en orden inverso")

for (let i = 10; i >= 1; i --) {

console.log(i)
}

console.log("Imprimir número del 2 al 20: otra forma")

for (i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
    console.log(i)
}

}*/

/*for (i = 1; i <= 20; i++) {
    let nombre = prompt("Ingrese nombre")
    if (nombre === "Pepe") {
        console.log("El nombre Pepe ha sido ingresado")

        break
    }
}*/

/*for (i = 1; i <= 20; i++) {

    if (i === 5 || i === 6) {
        continue
    }
        console.log(i)
    
}*/

/*console.log("Imprime los números del 1 al 10, pero se detiene al llegar al 5")

for (i = 1; i <= 10; i++) {

    if (i === 5) {
        break
    }
        console.log(i)
    
}


console.log("Imprime los números del 1 al 10, pero salta el 5")

for (i = 1; i <= 10; i++) {

    if (i === 5) {
        continue
    }
        console.log(i)
    
}*/

// Bucle WHILE
// Se utiliza cuando no se sabe la cantidad de iteraciones

/*let decision = prompt("Ingrese SI para continuar el programa")
while (decision === 'SI') {
    
    alert('el programa se está ejecutando')
    prompt("Ingrese SI para continuar el programa")
}*/

/* Crear una calculadora:
Solicitaremos al usuario una decision 'Si desea usar la calculadora escriba SI'
Luego si se presiono SI, se solcitara una operacion y 2 numeros, y se resolvera segun la operacion correspondiente (+ o -) Si la operacion no existe entonces se dira 'ERROR: operacion no valida'
Al finalizar el programa de la calculadora se volvera a solictar una decision que dira 'Escriba SI si desea usar la calculadora
 */

/*let decision = prompt("Ingrese SI para continuar el programa")

while (decision === 'SI') {
    let numero1 = Number(prompt("Ingrese primer número"))
    let numero2 = Number(prompt("Ingrese segundo número"))
    let operacion = prompt("Ingrese la operación: suma (+), resta (-), producto (*), división (/)") 
    
    if (operacion === '+') {
        alert("El resultado de la suma es " + (numero1 + numero2))
    } else if (operacion === '-') {
        alert("El resultado de la resta es " + (numero1 - numero2))
    } else if (operacion === 'x') {
        alert("El resultado del producto es " + (numero1 * numero2))
    } else if (operacion === '/') {
        alert("El resultado de la división es " + (numero1 / numero2))
    } else {alert("ERROR: Operación no válida")}
    decision = prompt("Ingrese SI para seguir utilizando la calculadora")
    
}
alert("La calculadora ha finalizado")*/

// MÉTODOS DE STRING

/*let nombre = 'pepe'

console.log("La cantidad de caracteres del string " + nombre + " es " + nombre.length)*/

/*let mensaje = prompt("Ingrese un mensaje")
if (mensaje.includes('trolo')) {
console.log("Hemos detectado que tu respuesta tiene contenido inapropiado")
} else {console.log("Mensaje enviado")}*/

/*let mensajeCodificado = "I'm%20interested%20in%20your%20ass"

let mensajeDeCodificado = mensajeCodificado.replaceAll('%20', ' ')
console.log("El mensaje decodificado es " + mensajeDeCodificado)*/

/* let rating = 5
console.log("El bar Ideal tiene " + '👌'.repeat(rating))*/
// Emojis: tecla de Windows + punto

let mensaje = "hola mundo" //Quiero que quede Hola mundo, capitalizar la primera letra
console.log(mensaje[0])
let resultado = mensaje[0].toUpperCase()

for (let i = 1; i < mensaje.length; i = i + 1) {
    resultado = resultado + mensaje[i]
    console.log(resultado)
}

console.log(resultado)