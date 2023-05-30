/* /* /* const alumnos = ['pepe', 'juan', 'lucas',
    {
        nombre: 'Lucas',
        apellido: 'Suárez'
    }
] */

/* const alumnos = [

    {
        nombre: 'juan',
        apellido: 'pérez'
    },
    {
        nombre: 'oscar',
        apellido: 'martínez'
    },
        {
        nombre: 'rosa',
        apellido: 'meltrozo'
    }
]

console.log(alumnos[2].apellido) */

// Objeto literal

/* let nombreUsuario = 'Lucas'
let apellidoUsuario = 'Suárez'
let edadUsuario = 30 */

/* const usuario = {
    nombre: 'Lucas',
    apellido: 'Suárez',
    edad: 30,
    'pelo largo': false,
    tieneAmigos: true,
    amigos: [
        'pepe',
        'juana'
    ]
} */

// Key-Value

// Si quiero ver el nombre, tengo que escribir:

/* console.log(usuario.nombre)
console.log(usuario["pelo largo"]) */

// Nombre, apellido y edad son propiedades o llaves. */

// Template String

// Para los template Strings, se usan las comillas invertidas `` (Alt-96)

/* console.log(
    `Entrevistador: hola ${usuario.nombre} ${usuario.apellido}
${usuario.nombre}: hola, tengo ${usuario.edad}`
) */

// Recorrer el array y por cada elemento decir "Hola, me llamo"

/* const alumnos = [
    {
        nombre: 'Maria',
        apellido: 'Rodriguez'
    },
    {
        nombre: 'Lucas', 
        apellido: 'Suarez'
    },
    {
        nombre: 'Milton',
        apellido: 'Jurgiel'
    }
] */

// Una manera

/* for(const alumno of alumnos){
            console.log(`Hola me llamo ${alumno.nombre} ${alumno.apellido}`)
        }

// Otra manera (La que yo había pensado)

for(let i=0;i<3;i++)
{
    console.log(
        `Hola ${alumnos[i].nombre} ${alumnos[i].apellido}`
    )
} */

// Otra manera: con una función anónima.
// ForEach es una mejor manera de hacer un FOR OF. Sirve para recorrer un array.V
// Callback function: es una función que se pasa por parámetro

/* alumnos.forEach(alumno => {
    console.log(`Hola, me llamo ${alumno.nombre} ${alumno.apellido}`)
})

alumnos.forEach((alumno, index) => {
    console.log(`${index + 1} Hola, me llamo ${alumno.nombre} ${alumno.apellido}`)
}) */

/* alumnos.forEach((alumno, index, array) => {
    console.log(`${index + 1} Hola, me llamo ${alumno.nombre} ${alumno.apellido}`)
})  */

// Crear un array en base a otro array

// Map devuelve un array donde cada elemento es el return de la función

/* const numeros = [2, 5, 6, 8] */

// Le paso un array, lo convierto en array de arrays y me devuelve el producto de los elementos del array,
// multiplicado por dos.

/* const porDos = (arrayDeNumeros) => {
    return arrayDeNumeros.map((numero) => {
    return numero * 2
})

}

console.log(porDos([2,4,6])) */

// Mejorar porDos para que ahora sea la función por(numero, arrayNumeros), va a devolver el mismo array, pero
// multiplicando los números del array por el primer número que ingresé

/* const por = (porX,arrayDeNumeros) => {
    return arrayDeNumeros.map((numero) => {
    return numero * porX
})

}

console.log(por(4,[2,4,6])) */

// Dado un array de números, escribir una función que calcule la suma de todos los números del array

/* const sumaelementos = (arraynumerico) => {
    let resultado = 0
    for (let i = 0; i <= arraynumerico.length; i++) {
    let resultado = resultado + arraynumerico[i]
    }
    return resultado
}
console.log(sumaelementos([2,5,3,2,5,3])) */


/* 
1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array.

4)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares

26)Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.


32)definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.

 */
/* Sirve para recorrer un array */

/* Sirve para recorrer el array y generar un nuevo array en base al recorrido */
/* const nombresCompletos = alumnos.map((alumno) => {
    return `${alumno.nombre} ${alumno.apellido}`
}) */

/* Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares. */



/* const funzion = (nombre, apellido) => {
    return nombre + apellido
}

console.log(`El nombre y el apellido son ` + funzion('Juan','Perez') ) */

// 1) Dado un array de números, escribir una función que calcule la suma de todos los números del array.
// Vamos a usar forEach, porque devuelve un NÚMERO y no un ARRAY

// Yo lo hice así

const sumatoria = (arraynumerico) => {
    let resultado = 0
    for (let i = 0; i <= arraynumerico.length; i++) {
    resultado = resultado + arraynumerico[i]
    }
    return resultado
}

console.log(sumatoria([1, 2, 4, 5, 7, 9]))

// Forma correcta

const sumatoria2 = ( arrayDeNumeros ) =>{
    let total = 0
    arrayDeNumeros.forEach((numero) => {
        total = total + numero
    })
    return total
}

console.log(sumatoria2([8, 8, 8]))

// 4) Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.
// Si yo paso un array de 8 elementos, devuelve un array de 8. Sin embargo, en este caso solo va a sumar los pares

// Hecho por Maxi Aguilera, "La Base"

const sumaPares = (vector) => {
    let total = 0
    vector.forEach((numero) => {
        if (numero % 2 === 0) {
            total = total + numero
        }
    })
    
    return total
}

console.log(sumaPares([1, 2, 3, 4, 10]))

// 32)definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.

const calcularLongitudesDeFrases = (arrayDeFrases) => {
    return arrayDeFrases.map((frase) => {
        return frase.length 
    }
    
    
    )
}

console.log(calcularLongitudesDeFrases(['hola','el mundo se volvió gay']))
