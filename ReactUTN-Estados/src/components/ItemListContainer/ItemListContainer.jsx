import React from 'react'

const ItemListContainer = () => {
    const products = [

        {
            nombre: 'product1',
            precio: 200,
            id: 1
        },
        {
            nombre: 'product2',
            precio: 4200,
            id: 2
        },
        {
            nombre: 'product3',
            precio: 1000,
            id: 3
        },
        {
            nombre: 'product4',
            precio: 221,
            id: 4
        },
        {
            nombre: 'product5',
            precio: 20013,
            id: 5
        }

    ]
    return (
        <div>
            {products.map(producto => (
                <div key={producto.id}>
                    <h2>Nombre {producto.name}</h2>
                    <h3>Precio {producto.precio}</h3>
                    <button>Comprar: {producto.name}</button>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default ItemListContainer


