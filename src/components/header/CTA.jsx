import React from 'react'
import Portafolio from '../../assets/quienes_somos.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={Portafolio} download className='btn'>Descargar Portafolio</a>
        <a href="#contact" className='btn btn-primary'>Contactanos</a>
    </div>
  )
}

export default CTA