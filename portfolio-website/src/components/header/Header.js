import React from 'react'
import "./Header.css"
import SubHeader from './SubHeader'
import SubHeaderSocials from './SubHeaderSocials'
import ProfilePic from "../../static/profile.jpeg"

const Header = () => {
  return (
    <>
    <header>
        <div className='container header__container'>
            <h5>
                Hello I'm
            </h5>
            <h1>
                Pratik Joseph Dabre
            </h1>
            <h5 className='text-light'>Full Stack Developer</h5>
            <SubHeader/>
            <SubHeaderSocials/>
            <div className='me'>
                <img src={ProfilePic} alt="me"></img>
            </div>
            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>

    </header>
    </>
  )
}

export default Header