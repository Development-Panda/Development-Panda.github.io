import React from 'react'
import './contact.css'
import{SiMinutemailer} from 'react-icons/si'
import{RiMessengerLine} from 'react-icons/ri'
import{BsInstagram} from 'react-icons/bs'
import{TbBrandWhatsapp} from 'react-icons/tb'
import{ useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jdsduh9', 'template_zodb7cu', form.current, '1uYgn-m9OBGqTgogU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Hablemos</h5>
      <h2>Contactanos</h2>

      <div className="container contact__container">
       <div className="contact__options">
        <article className="contact__option">
          <SiMinutemailer className='contact__option-icon'/>
          <h4>Email</h4>
          <a href="mailto:panda-dev@gmail.com" target="_blank">Envianos un Mensaje</a>
        </article>

        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <a href="https:m.me/panda.dev"target="_blank">Envianos un Mensaje</a>
        </article>

        <article className="contact__option">
          <BsInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <a href="https://instagram.com/pandadev"target="_blank">Envianos un Mensaje</a>
        </article>

        <article className="contact__option">
          <TbBrandWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <a href="https://api.whatsapp.com/send?phone+573028428105"target="_blank">Envianos un Mensaje</a>
        </article>
       </div> 
       {/*fin de opciones de contacto*/}
       <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Tu Nombre' required/>
        <input type="email" name="email" placeholder="Tu Email" required/>
        <textarea name="message" placeholder='Tu Mensaje'rows="7"required></textarea>
        <button type='submit'className='btn btn-primary'>Enviar</button>
       </form>
      </div>
    </section>
  )
}

export default Contact