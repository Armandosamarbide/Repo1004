import React from "react";
import './button.css'

const Button = () => {
    const saludar = () => {
    
        alert("Hola")
}
    return (
  <button onClick={accion} className={'btn ' + type} style={{height: 40px}}>Click</button>
    )

}

export default Button