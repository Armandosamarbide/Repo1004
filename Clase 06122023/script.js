// 'btn-comprar-3'.split('-')
// 'btn-comprar-3'.split('-').pop()
// Obtener último elemento de un array: POP
// Obtener elemento de un array: FILTER (Devuelve un array)
// Obtener elemento de un array: FIND (Devuelve un objeto)

const productos = [
    {
        name: 'PC Gamer',
        price: 400,
        id: 1
},
  {
        name: 'Parlantes',
        price: 600,
        id: 2
},
  {
        name: 'Mouse Logitech',
        price: 100,
        id: 3
}
]

const carrito = []
const ultimocarrito = JSON.parse(localStorage)

const productosHTML = document.getElementById('productos')

// Renderizar

const renderizarProductos = () =>{
    productos.forEach(product => {
    productos.innerHTML += `
    <div>
    <h1>Catálogo de productos</h1>
    <h2>${product.name}</h2>
    <span><b>Price:</b> ${product.price}</span><br/><br/>
    <button class='btn-comprar' id='btn-comprar-${product.id}'>Buy</button>
    </div>`
        

    })
    
// Llamo a cada botón para darle la funcionalidad
    const botonesComprar = document.getElementsByClassName('btn-comprar')
    console.log(botonesComprar)
    for (const boton of botonesComprar) {
        boton.addEventListener('click', () => {
            
            console.log(boton.id.split('-'))
            
            const idProduct = Number(boton.id.split('-').pop())

            // Quita el último elemento del array y nos lo devuelve

            carrito.push(productos.find(producto => producto.id === idProduct))
        })
    }
}

renderizarProductos()

const btnSave = document.getElementById('btn-save')
const btnSave.addEventListener('click', () => {
    localStorage.setItem('random', 'valor random')
} )

const btnDelete = document.getElementById('btn-delete')
btnDelete.addEventListener('click', () => {
localStorage.removeItem('random')
})

console.log(localStorage.getItem('carrito'))

JSON.stringify(carrito)
// JSON.stringify convierte un array/object a string


