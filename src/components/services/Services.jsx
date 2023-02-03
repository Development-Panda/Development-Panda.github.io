import React from 'react'
import './services.css'
import {HiCheckCircle} from 'react-icons/hi'

const Services = () => {
  return (
    <section id="services">
      <h5>Que Ofrecemos</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Diseno UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Historias del usuario.</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Diagramas de flujo de usuario.</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Desarrollo de marca y sistema de diseño.</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Consultoría en tecnología de diseño.</p>
            </li>
          </ul>
        </article>
            {/* fin de UX/UI */}
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Sistema de Reservas.</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Integración de redes sociales.</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Sitio web optimizado para dispositivos móviles.</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Páginas protegidas con contraseña / Área de clientes.</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Aplicación Web</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Alojamiento web.</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Testimonios Integración de la gestión de relaciones con los clientes.</p>
            </li>
          </ul>
        </article>
           {/* fin de web development */}
           <article className="service">
          <div className="service__head">
            <h3>Desarrollo Apps</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Progressive Web Apps.</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Flutter Apps</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Desarrollo de App Nativas</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Desarrollo Android.</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Desarrollo iOS</p>
            </li>
            <li>
              <HiCheckCircle className='service__list-icon'/>
              <p>Alojamiento web.</p>
            </li>
            
          </ul>
        </article>
           {/* fin de App development */}
      </div>
    </section>
  )
}

export default Services