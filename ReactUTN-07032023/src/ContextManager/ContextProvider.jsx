import React,{createContext, useContext, useState} from 'react'
const Context = createContext()
const ContextProvider = ({children}) => {
    
    
    
    const products = [
        {
            category: 'COMPUTADORA',
            nombre: 'iMac 24 Retina M1',
            precio: 944998,
            id:1,
            stock: 8,
            descripcion: "Apple iMac 24 Retina M1 256gb Ssd 8-core Cpu / 8-core Gpu; Color: amarillo; RAM: 8Gb; Disco: 256Gb SSD; Resolución: 4480x2520 mp",
            thumb: "https://http2.mlstatic.com/D_NQ_NP_972232-MLA52646442826_112022-O.webp"
        },
        {
            category: 'COMPUTADORA',
            nombre: 'iMac 2021 M1',
            precio: 944999,
            id:2,
            stock: 8,
            descripcion: "Apple iMac 2021 M1 Chip 8-core 8 Gpu/cpu; Color: naranja; RAM: 8Gb; Disco: 256Gb SSD; Resolución: 4480x2520 mp",
            thumb: "https://http2.mlstatic.com/D_NQ_NP_779028-MLA52646544350_112022-O.webp"
        },
        {
            category: 'COMPUTADORA',
            nombre: 'iMac I5 21.5',
            precio: 530000,
            id:3,
            stock: 10,
            descripcion: "Apple iMac I5 21.5; Color: plata; RAM: 4Gb; Disco: 500Gb; Resolución: 1920x1080 mp",
            thumb: "https://http2.mlstatic.com/D_NQ_NP_853179-MLA69842754556_062023-O.webp"
        },
        {
            category: 'NOTEBOOK',
            nombre: 'MacBook Pro M1',
            precio: 1530000,
            id:4,
            stock: 4,
            descripcion: "MacBook Pro 14''; Color: plata; RAM: 16Gb; Disco: SSD 500Gb; Resolución: 3024x1964 mp",
            thumb: "https://http2.mlstatic.com/D_NQ_NP_945710-MLA48354170509_112021-O.webp"
        },
        {
            category: 'NOTEBOOK',
            nombre: 'MacBook Air M2',
            precio: 702660,
            id:5,
            stock: 7,
            descripcion: "MacBook Air M2; Color: negra; RAM: 8Gb; Disco: SSD 256Gb; Resolución: 3024x1964 mp",
            thumb: "https://http2.mlstatic.com/D_NQ_NP_708839-MLA51356236557_082022-O.webp"
        },
        {
            category: 'NOTEBOOK',
            nombre: 'MacBook Pro 2002',
            precio: 1450000,
            id:6,
            stock: 8,
            descripcion: "Macbook Pro M2 10-Core; Color: plata; RAM: 8Gb; Disco: SSD 500Gb; Resolución: 2560x1600",
            thumb: "https://http2.mlstatic.com/D_NQ_NP_859839-MLA54266903844_032023-O.webp"
        },
        {
            category: 'MINI',
            nombre: 'Mac Studio',
            precio: 1500000,
            id:7,
            stock: 11,
            descripcion: "Mac Studio Chip M1 Max CPU 10-core GPU 24-core; Color: plata; RAM: 32Gb; Disco: 512Gb; Resolución: n/a.",
            thumb: "https://http2.mlstatic.com/D_NQ_NP_929069-MLU54978359435_042023-O.webp"
        },
        {
            category: 'MINI',
            nombre: 'Apple Mac Mini',
            precio: 499999,
            id:8,
            stock: 4,
            descripcion: "Mac Mini 2020 Chip Apple M1; Color: plata; RAM: 8Gb; Disco: SSD 256Gb;Resolución: n/a.",
            thumb: "https://http2.mlstatic.com/D_NQ_NP_866292-MLA50744174816_072022-O.webp"
        },
        {
            category: 'PERIFERICO',
            nombre: 'Teclado Apple A1843',
            precio: 109000,
            id:9,
            stock: 2,
            descripcion: "Teclado bluetooth Apple A1843 QWERTY; Color: plata y blanco; Idioma: inglés internacional.",
            thumb: "https://http2.mlstatic.com/D_NQ_NP_786900-MLA32721999047_102019-O.webp"
        },
        
    ]


    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }
    const getProductCartById =(id) => {
        return cart.find(producto => producto.id === Number(id))
    }

    /* El estado del array de objetos del carrito */
  const [cart, setCart] = useState([])
  const isInCart = (id) => cart.some(producto => producto.id === Number(id))

    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart(cart.map(product =>{
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    }

   return (
        <Context.Provider value={{ products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
            {children}
        </Context.Provider>
    )
}

export const useCustomContext = () => useContext(Context)
export default ContextProvider