import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {FaGithubAlt} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'
import {SiDribbble} from 'react-icons/si'
const HeaderSocials = () => {
  return (
   <div className="header__socials">
    <a href="https://linkedin.com" target="_blank"><SiLinkedin/></a>
    <a href="https://github.com" target="_blank"><FaGithubAlt/></a>
    <a href="https://instagram.com" target="_blank"><SiInstagram/></a>
    <a href="https://dribble.com" target="_blank"><SiDribbble/></a>
   </div>
  )
}

export default HeaderSocials