import React, { useState, useEffect } from 'react';
import './Sponsors.css';
import Image from '../assets/image.png';

const SponsorCard =({ name, description, logo }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(()=> {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleInteraction = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div 
      className={`sponsor-card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={() => handleInteraction()}
    >
      <div className="sponsor-card-inner">
        <div className="sponsor-card-front">
          <img src={logo} alt={`${name} logo`} className="sponsor-logo" />
          <h3>{name}</h3>
        </div>
        <div className="sponsor-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

const Sponsors = () => {
  const sponsors =[
    {
      name: "Sponsor 1",
      description:"Description for Sponsor 1. This text appears when the card is flipped.",
      logo: Image
    },
    {
      name:"Sponsor 2",
      description: "Description for Sponsor 2. This text appears when the card is flipped.",
      logo:Image
    },
  ];

  return (
    <div className="sponsors-page">
      <h1>IGNITE's Sponsors</h1>
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>
    </div>
  );
}
export default Sponsors;