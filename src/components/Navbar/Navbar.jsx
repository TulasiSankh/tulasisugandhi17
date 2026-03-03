import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scroll offsets
  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // This should match your navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Dev<span>Portfolio</span>
        </div>

        <ul className="nav-links">
          <li><a href="#hero" onClick={(e) => handleNavLinkClick(e, 'hero')}>Home</a></li>
          <li><a href="#skills" onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="nav-btn" onClick={(e) => handleNavLinkClick(e, 'contact')}>
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;