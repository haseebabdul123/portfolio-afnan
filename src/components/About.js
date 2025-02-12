import React from "react";
import img from '../assets/afnan.jpg'
import './style/global.css'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
import link from '../assets/linkedin.png'
import Experience from "./Experience";
import Education from "./Education";
const About = () => {
  return (
      <div className="about">
        
        {/* Hero Content - Left Side Image and Right Side Text */}
        <div className="about-section">
          <div className="person-img">
            <img src={img} alt="Afnan Fahim" />
            <div className="details">
            <h1 className="name">I am  <span>Afnan Fahim</span></h1>
            <p className="liP">Software Engineer | WordPress Guru | Voice-over Artist | Freelancer</p>
           <div className="btns"> <button>
             <a href="https://www.facebook.com/afnan.fahim.1428" target="_blank" rel="noopener noreferrer" className="social-icon">
                           <img src={facebook} alt="Facebook" />
                         </a>
              FaceBook
            </button>
            <button>
             <a href="https://www.facebook.com/afnan.fahim.1428" target="_blank" rel="noopener noreferrer" className="social-icon">
                           <img src={facebook} alt="Facebook" />
                         </a>
              GitHub
            </button>
            <button>
              <a href="https://www.linkedin.com/in/afnan-fahim/" target="_blank" rel="noopener noreferrer" className="social-icon">
                           <img src={link} alt="Facebook" />
                         </a>
              Linkedin
            </button>
            </div>
            <p className="text">Software Engineer - Flutter & MERN Stack | Founder & CEO at Wextrum.com | BS in Computer Science | WordPress Guru| Voice-over Artist | Freelancer</p>
          </div>
          </div>
        </div>
          <Experience/>
          <Education/>
      </div>
  );
};

export default About;
