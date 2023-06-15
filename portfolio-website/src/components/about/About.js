import React from 'react'
import "./About.css"
import ProfilePic from "../../static/profile.jpeg"
import {FaAward} from "react-icons/fa"
import{FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ProfilePic} alt="me"/>
            </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>8 months</small>
              </article>
              <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>8+</small>
              </article>
              <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+</small>
            </article>
          </div>
          <p>
          The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href 
value. If you cannot provide a valid href,
 but still need the element to resemble a link,
  use a button and change it with appropriate styles.
   Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md          </p>
          <div className='btn btn-primary'>
            Let's Talk
          </div>
        </div>
      </div>
    </section>
  )
}

export default About