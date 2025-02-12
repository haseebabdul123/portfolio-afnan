import React, { useEffect } from "react";
import { gsap } from "gsap";
import './style/global.css'
const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-text", { opacity: 0, y: -50, duration: 1 });
  }, []);

  return (
    <div className="hero">
      <h1 className="hero-text">Hi I'm Afnan Fahim</h1>
      <p className="hero-des">I'm is an experienced Flutter App Developer currently pursuing a BS in Computer Science. As the Founder & CEO of <a href="https://wextrum.com/" target="_blank" rel="noopener noreferrer">Wextrum</a>, I'm dedicated to driving innovation in the digital realm. My passion lies in expanding technological expertise and using it to empower others. Afnan is always eager to collaborate and explore new opportunities for growth. Let’s connect and create something impactful together!</p>
    </div>
  );
};

export default Hero;
