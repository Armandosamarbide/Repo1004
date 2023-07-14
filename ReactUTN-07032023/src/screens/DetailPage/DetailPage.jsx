import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'
import './detailpage.css'

const DetailPage = () => {
  const { id } = useParams()
  const {getProductById, addProductCart, isInCart, getProductCartById} = useCustomContext()

    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))

  return (
    <div className='detalleCard'>
        <div className='imagenDestacada'><img src={productDetail.thumb}></img></div>
        <h1>{productDetail.nombre}</h1>
        <h2>${productDetail.precio}</h2>
      <h3>Descripcion:</h3> 
        <p>{productDetail.descripcion}</p>
     {
          isInCart(id) 
          ? 
          <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id}/> 
          : 
          <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>
        }

    </div>
  )
}
export default DetailPage