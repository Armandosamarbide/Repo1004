/* DOM: Document Object Model*/

console.dir(document)

/* const tituloHTML = document.querySelector('titulo')

tituloHTML.innerText = "Hola Mundo Desde El DOM" */

/* Los elementos de un HTML se cargan en este orden:
index
defaultCSS
head
CSS
CSSBootstrap
Body
Script */

/* const containerHTML = document.querySelector('#container')

const usuario = {
    nombre: 'juan',
    apelido: 'pérez',
    edad: 33
}


containerHTML.innerHTML = `
<div>
<h2>${usuario.nombre} ${usuario.apellido}</h2>
<span><b>Edad:</b>${usuario.edad}</span>
</div>` */


/* const usuarios = [
  { nombre: "Juan", apellido: "Pérez", edad: 25 },
  { nombre: "María", apellido: "González", edad: 30 },
  { nombre: "Carlos", apellido: "López", edad: 40 },
  { nombre: "Ana", apellido: "Martínez", edad: 35 },
  { nombre: "Pedro", apellido: "Sánchez", edad: 28 }
];


usuarios.forEach((usuario) => {
containerHTML.innerHTML = `
<div>
<h2>${usuario.nombre} ${usuario.apellido}</h2>
<span><b>Edad:</b>${usuario.edad}</span>
</div>`
}) */

/* const usuarios = [
    {
        nombre: 'pepe',
        apellido: 'grillo',
        edad: 33
    },
    {
        nombre: 'juan',
        apellido: 'Sanchez',
        edad: 67
    },
    {
        nombre: 'lucas',
        apellido: 'Perez',
        edad: 70
    },
    {
        nombre: 'Vicente',
        apellido: 'Montes',
        edad: 30
    }
]

const containerHTML = document.querySelector('#container')

usuarios.forEach((usuario) =>{
    containerHTML.innerHTML = containerHTML.innerHTML +  `
    <div>
        <h2>${usuario.nombre} ${usuario.apellido}</h2>
        <span>
            <b>Edad:</b>${usuario.edad}
        </span>
        <hr>
    </div>`
}) */

const containerHTML = document.querySelector('#container')

productos = [
  { nombre: "Camiseta", precio: 15.99, stock: 10, id: 1 },
  { nombre: "Pantalón", precio: 29.99, stock: 5, id: 2 },
  { nombre: "Zapatos", precio: 49.99, stock: 8, id: 3 },
  { nombre: "Bolso", precio: 39.99, stock: 3, id: 4 },
  { nombre: "Sombrero", precio: 9.99, stock: 12, id: 5 }
];

productos.forEach((producto) =>{
    containerHTML.innerHTML = containerHTML.innerHTML +  `
     <div class="productCard">
            <h2>${producto.nombre}</h2>
            <span><b>Precio: </b> $${producto.precio}</span>
            <span><b>Stock disponible: </b> $${producto.stock}</span>
            <button class="btn">Ver Detalle de ${producto.nombre}</button>
        </div>`
})

const renderizarProductos = (productos) => {

    containerHTML.innerHTML = ''
    productos.forEach((producto) => {
        containerHTML.innerHTML = containerHTML.innerHTML + `
     <div class="productCard">
            <h2>${producto.nombre}</h2>
            <span><b>Precio: </b> $${producto.precio}</span>
            <span><b>Stock disponible: </b> $${producto.stock}</span>
            <button class="btn">Ver Detalle de ${producto.nombre}</button>
        </div>`

    })
}

const eliminarProducto = (id) => {
    const posicionProducto = productos.findIndex((producto) => producto.id === id)
    productos.splice(posicionProducto, 1)
    renderizarProductos(productos)
}

renderizarProductos(productos)