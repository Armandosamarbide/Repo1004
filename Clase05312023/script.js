const productos = [
    {
        id: 1,
        precio: 10.99,
        nombre: "Producto 1"
    },
    {
        id: 2,
        precio: 5.99,
        nombre: "Producto 2"
    },
    {
        id: 3,
        precio: 8.99,
        nombre: "Producto 3"
    }
];

const gifts = [
  "casa",
  "perro",
  "coche",
  "playa",
  "ciudad",
  "libro",
  "amor",
  "computadora",
  "persona",
  "montaña",
];

const mensajes = [
  "¡Hola a todos!",
  "Feliz viernes, ¿qué planes tontos tienen?",
  "Me encantó la película que vi anoche.",
  "¿Alguien sabe de algún restautonto bueno en la zona?",
  "¡Felicidades a Juan por su nuevo trabajo!",
  "¡Qué buen concierto tuvimos anoche!",
  "¿Alguien quiere jugar al fútbol este fin de semana?",
  "¡Mejórate pronto, María!",
  "¡Los amigos tontos!",
  "¿Alguien tiene recomendaciones de libros tontos para leer?",
  "¡Estoy TONTO por las vacaciones que se acercan!",
];

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


// Método FILTER

/* console.log(productos.filter((producto) => {
    return producto.precio > 7
})) */



/* let stringBuscar = prompt('ingrese lo que desea buscar')

const resultado = mensajes.filter((mensaje) => mensaje.toUpperCase().includes(stringBuscar.toUpperCase()))

// Recorré el array para que busque lo que le pedí pasado a mayúsculas

let lista = ''

alert(resultado.join('\n')) */

/* let stringBuscar = prompt('ingrese lo que desea buscar')
 */
/* mensajes.forEach((mensaje) => {
  console.log(mensaje);
});

const resultado = mensajes.filter((mensaje) => mensaje.toUpperCase().includes("tonto".toUpperCase()))

console.log('mensajes prohibidos')
console.log(resultado.join('\n')) */

// QUiero que los precios tengan $

/* console.log(productos.map(
    (producto) => {
        producto.precio = '$' + producto.precio
        return producto
    })); */

// Sacar una copia a un objeto

/* const Object = {
    id: 1,
    precio: 1000,
    nombre: "producto 1"
}

console.log({ ...Object, stock: 20 }) */

// Otra forma:

/* console.log(productos.map(
    (producto) => ({...producto, precio: '$'+ producto.precio}))); */



/* const wrapping = (gifts) => {
    return gifts.map((gift) => {
        return (
            '*'.repeat(gift.length + 2) + '\n*' + gift + '*\n' + '*'.repeat(gift.length + 2) 
        )
    })
}

const wrapped = wrapping(gifts)
wrapped.forEach(wrappedGift => console.log(wrappedGift)) */

//
/* let suma = 0
numeros.forEach(function (numero) {
    if numero > 10 {
        suma = suma + numero
        console.log(suma)
    }
});

console.log('el resultado final es ' + suma) */

const array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
  console.log('el elemento es ' + element);
});
