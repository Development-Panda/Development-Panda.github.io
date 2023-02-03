import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {FaUserAstronaut} from 'react-icons/fa'
import {GiClockwork} from 'react-icons/gi'
import {MdDesignServices} from 'react-icons/md'
import {TiMessageTyping} from 'react-icons/ti'
import { useState } from 'react'
const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
    return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')}className={activeNav =='#' ? 'active':''}><HiOutlineHome/></a>
      <a href="#about"onClick={()=> setActiveNav('#about')}className={activeNav ==='#about' ? 'active':''}><FaUserAstronaut/></a>
      <a href="#experience"onClick={()=> setActiveNav('#experience')}className={activeNav ==='#experience' ? 'active':''}><GiClockwork/></a>
      <a href="#services"onClick={()=> setActiveNav('#services')}className={activeNav ==='#services' ? 'active':''}><MdDesignServices/></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')}className={activeNav ==='#contact' ? 'active':''}><TiMessageTyping/></a>
    </nav>
  )
}

export default Nav