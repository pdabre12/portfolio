import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa";
const SubHeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/pdabre12/" target='__blank'><BsLinkedin/></a>
        <a href="https://github.com/pdabre12" target='__blank'><FaGithub/></a>
    </div>
  )
}

export default SubHeaderSocials