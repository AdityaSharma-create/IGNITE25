import React, { useState, useEffect } from 'react';
import './Merchandise.css';
import Image from '../assets/image.png'
const MerchandiseCard = ({ name, description, logo }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  return (
    <div 
      className={`merchandise-card ${isActive ? 'active' : ''}`}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      onClick={handleInteraction}
    >
      <img src={logo} alt={`${name} logo`}  className="merchandise-logo" />
      <h3>{name}</h3>
      {isActive && <p>{description}</p>}
    </div>
  );
};

const Merchandises = () => {
  const merchandise = [
    {
      name: "Merchandise 1",
      description: "Description for Merchandise 1. This text appears on hover or click.",
      logo: Image
    },
    {
      name: "Merchandise 2",
      description: "Description for Merchandise 2. This text appears on hover or click.",
      logo: Image
    },
    {
      name: "Merchandise 3",
      description: "Description for Merchandise 2. This text appears on hover or click.",
      logo: Image
    },
    
  ];

  return (
    <div className="merchandise-page">
      <h1>IGNITE's Merchandise</h1>
      <div className="merchandises-grid">
        {merchandise.map((merchandise, index) => (
          <MerchandiseCard key={index} {...merchandise} />
        ))}
      </div>
    </div>
  );
};

export default Merchandises;