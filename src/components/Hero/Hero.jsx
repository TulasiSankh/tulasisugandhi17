import React from 'react';
import './Hero.css';
import Resume from '../../assets/Resume.pdf'; // correct path from Hero.jsx

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <div className="badge">Available in 15 Days</div>
        <h1 className="name">Tulasi Sugandhi</h1>
        <h2 className="tagline">Frontend Web Developer at ClickCrawl Media</h2>
        <p className="description">
          Building high-performance, responsive UI with <strong>1+ Years of Experience</strong>. 
          Specialized in React.js, REST API Integration, and modern CSS frameworks. 
          Expertise in HRMS, AMC, and E-Commerce enterprise solutions.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-filled">View My Projects</a>
          <a href="https://www.linkedin.com/in/tulasi-sugandhi/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn Profile</a>
          <a href={Resume} download className="btn btn-outline">Download Resume</a> {/* Resume Button */}
        </div>
      </div>
    </section>
  );
};

export default Hero;