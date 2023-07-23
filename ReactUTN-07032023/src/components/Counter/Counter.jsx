import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './counter.css'

const Counter = ({initialValue, stock, id}) => {
    const {addProductCart } = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
        Swal.fire(
            `Producto añadido al carrito. 
             Muchas gracias por tu compra!`,
            
        )
    }
    return (
        <>
            <div className='counterBotonera'>
                <button className='botoneraIzq' onClick={() => setQuantity(quantity >1 ? quantity - 1 : quantity)} >-</button>
                <span>{quantity}</span>
                <button className='botoneraDer' onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
            </div>
            <button className='botoneraConfirmar' onClick={onClickAddProduct}>Confirmar</button>
        </>
    )
}

export default Counter