import React from 'react'
import './experience.css'
import {HiShieldCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Que Habilidades Tenemos</h5>
      <h2>Nuestra Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experimentados</small>
                </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experimentados</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experimentados</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experimentados</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermedio</small>
                </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
                <div>
                  <h4>Vue</h4>
                  <small className='text-light'>Intermedio</small>
                </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>Experimentados</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Inrermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>mySql</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Mongo Db</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Spring Boot</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience