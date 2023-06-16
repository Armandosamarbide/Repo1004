import React from 'react'
import './app.css'
import Button from './Button'


const App = () => { 

  const saludar = () => {
  alert('Hola')  
  }
  
  return (
  <>
      <div classname="titulo">
        <h1>Hola desde React</h1>
      </div>
      <div><Button/></div>
      <label htmlFor=""></label>
  </>
  )
}

export default App


