import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCartCard } from '../../components'
import './cartpage.css'
import chilavert from './chilavert.png'
import { NavLink } from 'react-router-dom'

const CartPage = () => {
 const {cart, getTotal} = useCustomContext()
    console.log(getTotal())
  return (
    <div> {cart.length > 0 
        ?
        <>
          <div className='listaProductos'>
              {cart.map(product =>(
                  <ProductCartCard key={product.id} producto={product}/>

              ))}
        </div>
        
        <div>
           <div className="linkCart"><NavLink to='/' aria-label='Home'>Seguir comprando</NavLink></div>
        </div>
          
        <div className="grid-item">
            Subtotal: ${getTotal()}
          </div>

        </>
        :
      <>
        <div className='emptyCart'>
      <h1>Tu no has comprado nada</h1>
      
          <img src={chilavert} alt="chilavert" />

 <div>
           <div className="linkCart"><NavLink to='/' title='Home'>Home</NavLink></div>
        </div>

          </div>
        </>
        }
    </div>
  )
}

export default CartPage