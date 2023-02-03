import React from 'react'
import './header.css'
import CTA from './CTA'
import US from '../../assets/Asset_5.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello We are</h5>
        <h1>Panda Development</h1>
        <h5 className="text-light">Fullstack Developers</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="us">
          <img src={US} className="logo" alt="logo Panda" />
        </div>

        <a href="#contact" className='scroll-down'>Desliza al Final</a>


      </div>
    </header>
    )
}

export default Header