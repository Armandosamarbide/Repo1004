import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCartCard } from '../../components'
import './cartpage.css'
import chilavert from './chilavert.png'

const CartPage = () => {
 const {cart, getTotal} = useCustomContext()
    console.log(getTotal())
  return (
    <div> {cart.length > 0 
        ?
        <>
          <div>
              {cart.map(product =>(
                  <ProductCartCard key={product.id} producto={product}/>

              ))}
          </div>
          <div>
            Total: ${getTotal()}
          </div>

        </>
        :
      <>
        <div className='emptyCart'>
      <h1>Tu no has comprado nada</h1>
      
          <img src={chilavert} alt="chilavert" />
          </div>
        </>
        }
    </div>
  )
}

export default CartPage