import React from 'react'
import './style/global.css'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
import link from '../assets/linkedin.png'
const Footer = () => {
  return (
    <div className="icons">
            <div className="insta">
            <a href="https://www.facebook.com/afnan.fahim.1428" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={facebook} alt="Facebook" />
            </a>
            </div>
            <div className="linkin">
            <a href="" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={github} alt="Facebook" />
            </a>
            </div>
            <div className="git">
            <a href="https://www.linkedin.com/in/afnan-fahim/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={link} alt="Facebook" />
            </a>
            </div>
          </div>
  )
}

export default Footer
