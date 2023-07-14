import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { CartPage, ContactPage, DetailPage, HomePage } from './screens'
import { Route, Routes } from 'react-router-dom'
import { TopNav } from './components'
import { Footer } from './components'


function App() {
  return (
    <>
    <div>
    <nav>
    <TopNav />
    </nav>
      <Routes>
       <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>

    </div>
      <footer><Footer /></footer>
      </>
  )
}
export default App