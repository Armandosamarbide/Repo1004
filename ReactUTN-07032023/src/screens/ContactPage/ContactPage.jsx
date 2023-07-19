import React from 'react'
import './contactpage.css'

const ContactPage = () => {
  return (
  <form className="contactForm">
  <h2 className='contactH2'>CONTÁCTENOS</h2>
  <p><input className='inputContact' placeholder="Nombre y Apellido"></input></p>
  <p><input className='inputContact'  placeholder="Correo Electrónico"></input></p>
  <p><input className='inputContact'  placeholder="Ingrese su mensaje aquí"></input></p>
  <div className='buttonContainer'>
      <button className='contactButton'>Enviar</button>
  </div>
</form>
  )
}

export default ContactPage