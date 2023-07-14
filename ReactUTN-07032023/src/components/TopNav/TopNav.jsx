import React from 'react'
import './topnav.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavLink, Routes, Route } from 'react-router-dom'

const TopNav = () => {
  return (
    <>
    
    <nav className='barra'>
    
    <div className="grid-container">
    <div className="grid-item"><NavLink to='/'><i className="bi bi-apple"></i></NavLink></div>
    <div className="grid-item"><NavLink to='/contact/'><i className="bi bi-chat-dots-fill"></i></NavLink></div>
    <div className="grid-item"><NavLink to='/cart'><i className="bi bi-cart-fill"></i></NavLink></div>
        </div>
    </nav>
    
    </>
  )
}

export default TopNav

