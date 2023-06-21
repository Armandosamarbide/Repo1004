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

/* let mensaje = "hola mundo" //Quiero que quede Hola mundo, capitalizar la primera letra
console.log(mensaje[0])
let resultado = mensaje[0].toUpperCase() */

/*for (let i = 1; i < mensaje.length; i = i + 1) {
    resultado = resultado + mensaje[i]
    console.log(resultado)
}

console.log(resultado)*/

// ARRAYS

/* const listaDeAlumnos = ['pepe', 'juan', 'sergio', 'lucas']
 */
/* console.log(listaDeAlumnos[1])

console.log(listaDeAlumnos.length)

// Con push agregamos un elemento al final del array

console.log(listaDeAlumnos.push('yanina'))

// Con unshift agregamos un elemento al principio

listaDeAlumnos.unshift('daniel')

// Con pop quitamos el último elemento de un array y lo devuelve

listaDeAlumnos.pop()

// Con shift 

console.log(listaDeAlumnos.shift())

// Con splice borramos desde x posición, tantos elementos

listaDeAlumnos.splice(1, 2)

// También podemos borrar uno y agregar otro en el mismo paso
// Con SPLICE podemos hacer varias de las funciones descriptas anteriormente

listaDeAlumnos.splice(1, 2, 'jorge')

// Con IndexOf averiguamos la posición de un elemento en el array
// Devuelve el número de ubicación del elemento que busco.

console.log(listaDeAlumnos.indexOf['juan'])*/

// console.log(listaDeAlumnos.indexOf('juan'))

/* const listaDeJugadores = ['Messi', 'Modric','Vinicius','Otamendi','Di María','Neymar','Martínez']
 */
// Se debera eliminar a Neymar y se agregara al principio del array

/* console.log(listaDeJugadores)

listaDeJugadores.splice(5, 1)

console.log(listaDeJugadores)

listaDeJugadores.unshift('Neymar')

console.log(listaDeJugadores)*/

// Se debera reemplazar a Di Maria por Ronaldo

/* console.log(listaDeJugadores)

let posicionDiMaria = listaDeJugadores.indexOf('Di María')

listaDeJugadores.splice(posicionDiMaria,1,'Cristiano Ronaldo')

console.log(listaDeJugadores) */

// Se agregara despues de Modric a 'Gareth Bale'

/*console.log(listaDeJugadores)
let posicionModric = listaDeJugadores.indexOf('Modric')
listaDeJugadores.splice((posicionModric + 1),0,'Gareth Bale')
console.log(listaDeJugadores)*/

// Cómo recorro el array?

/* for (let i = 0; i < listaDeJugadores.length; i++) {
    console.log(listaDeJugadores[i])
} */

// Mostrar por consola a todos los que empiecen con 'M'

/*for (let i = 0; i < listaDeJugadores.length; i++) {
    if (listaDeJugadores[i][0] === 'M') {
        console.log(listaDeJugadores[i])
    }
}*/

// FIltrar los mensajes ofensivos. En este caso, los que incluyen 'trolo'

/* const mensajes = ['Buen día', 'Todo bien', 'Sos trolo', 'El mundo se volvió gay', 'Sos muy trolo', 'Chau', 'Chau trolo']
const mensajesOfensivos = [] */

/* for (let i = 0; i < mensajes.length; i++) {
    if (mensajes[i].includes('trolo')) {
        console.log("El mensaje " + mensajes[i] + ' contiene la palabra ofensiva trolo.')
        mensajesOfensivos.push(mensajes[i])
}
}*/

// Otra forma. Con el FOR - OF

/* for (let mensaje of mensajes) {
    if (mensaje.includes('trolo')) {
        console.log("El mensaje " + mensaje + ' contiene la palabra ofensiva trolo.')
        mensajesOfensivos.push(mensaje)
    } 
}  */

// SCOPES o ÁMBITOS

/* let nombre = 'juan'

if (true) {
    let nombre = 'pepe'
    console.log(nombre)
    if (true) {
        let nombre = 'paula'
        console.log(nombre)
    }
}

console.log(nombre) */

// FUNCIONES

/* //Declaración
const saludo = () => {
    let nombre = prompt('Cómo te llamás')
    console.log('hola ' + nombre)
}
//Invocación
saludo() */

/* const saludo = (x) => {
    console.log('hola ' + x)
}

saludo('Martín') */

/* const crearsaludo = (nombre = 'martin', apellido = 'salduna') => {
    return 'hola' + nombre + apellido
}

console.log(crearsaludo('juan','perez')) */

// Pasar horas a segundos

/* const hours2secs = (horas) => horas * 60 * 60

console.log("Caminé durante " + hours2secs(4) + " segundos") */

/* const pasaramay = (string) => {
    let resultado = string[0].toUpperCase()
    for (let i = 1; i <= string.length; i++) {
    resultado = resultado + string[i]
    }
    return resultado
} */

/* Generar una funcion llamada esVocal(letra) nos devolvera true o false dependiendo de si es vocal */

/* const esVocal = (string) => {
    const vocales = ['a','e','i','o','u']
    for (let i = 0; i <= vocales.length; i++) {
        if (string.toLowerCase() === vocales[i]) {
        return true
    } 
    } return false
}
 */

const nombres = ["juan", "pedro", "ana", "maría","patricia","prilidiano"]

/* let i=0
for (i; nombres.length; i++) {
    console.log(nombres[i])
} */

/* for (let i = 0; i < nombres.length; i++) {
    console.log('nombre: ' + nombres[i])
    if (nombres[i][0] === 'p') {
        console.log('Este nombre empieza con p: ' + nombres[i])
    }
} */

const frases = [
  "Eres un JERK con suerte.",
  "No lo hagas.",
  "El mundo está lleno de gatos.",
  "¡Qué vivo eres!",
  "La sabiduría del bobo es infinita.",
  "No subestimes a un bobo inteligente.",
  "Incluso los bobos tienen sus momentos brillantes.",
  "Andá pa' allá bobo.",
  "Los bobos también pueden tener éxito.",
  "Ser bobo no significa ser estúpido."
];

const mensajesbobos = []

for (let i = 0; i < frases.length; i++) {
    if (frases[i].includes("bobo")) {
        console.log('El mensaje "' + frases[i] + '" incluye la palabra "BOBO".')
        mensajesbobos.push(frases[i])
    } else {console.log('El mensaje "' +frases[i]+ '" NO incluye la palabra "BOBO".')}
}