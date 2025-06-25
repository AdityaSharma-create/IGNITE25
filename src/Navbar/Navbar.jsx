import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="https://via.placeholder.com/50" alt="Logo" />
          <span>IGNITE</span>
        </div>
        {isMobile ? (
          <div className="hamburger" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="sponsors">Sponsors</Link></li>
            <li><Link to="merchandise">Merchandise</Link></li>
            <li><Link to="rules">Rules</Link></li>
          </ul>
        )}
      </div>
      {isMobile && (
        <ul className={`nav-menu mobile ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
          <li><Link to="/events" onClick={toggleNavbar}>Event</Link></li>
          <li><Link to="sponsors" onClick={toggleNavbar}>Sponsors</Link></li>
          <li><Link to="merchandise" onClick={toggleNavbar}>Merchandise</Link></li>
          <li><Link to="rules" onClick={toggleNavbar}>Rules</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;