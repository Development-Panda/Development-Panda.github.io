import React from 'react'
import './about.css'
import US from '../../assets/Asset_2.png'
import{BsAward} from 'react-icons/bs'
import {HiOutlineUsers} from 'react-icons/hi'
import {RiFolderChartLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id="about">
      <h5>Conocenos</h5>
      <h2>Sobre Nosotros</h2>
      <div className="container about__container">
        <div className="about__us">
          <div className="about__us-img">
            <img src={US} alt="logopanda" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>+4 años</small>
            </article>

            <article className='about__card'>
              <HiOutlineUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>+50 Clientes </small>
            </article>

            <article className='about__card'>
              <RiFolderChartLine className='about__icon'/>
              <h5>Proyectos</h5>
              <small>+30 Proyectos </small>
            </article>
          </div>

          <p>
          Somos un grupo de personas altamente motivadas y dedicadas que trabajan juntas para brindar servicios de programación y desarrollo web de alta calidad para nuestros clientes. Tenemos una amplia experiencia en diseño y desarrollo de sitios web, soluciones de comercio electrónico, desarrollo de aplicaciones móviles, diseño web receptivo, Wordpress y otras plataformas CMS, creación de videos personalizados, Fotografia  y mucho más.
          </p>
          <a href="#contact" className='btn btn-primary'>Cuentanos tu Proyecto</a>
        </div>
      </div>
    </section>
  )
}

export default About