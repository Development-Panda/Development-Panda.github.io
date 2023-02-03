import React from 'react'
import './footer.css'
import{AiOutlineFacebook}from 'react-icons/ai'
import{AiOutlineInstagram}from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#"className='footer__logo'>Panda Development</a>

      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Quienes somos</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/"><AiOutlineFacebook/></a>
        <a href="https://instagram.com/"><AiOutlineInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Panda Development. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer