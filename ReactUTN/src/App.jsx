import React from 'react'
import './button.css'

import { Button, Input } from './components/'


const App = () => { 

  const saludar = () => {
  alert('Hola')  
  }
  
  return (
  <>
      <div classname="titulo">
        <Background>
        <h1 style></h1>

        </Background>
        <h1>Hola desde React</h1>
      </div>
      
      <div>
        <Button accion={saludar} />
      <Input/>
      </div>
      
      
      <label htmlFor=""></label>
  </>
  )
}

export default App


