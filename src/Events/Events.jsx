import React, { useState, useEffect } from 'react';
import './Events.css';
import Image from '../assets/image.png'
import { Link } from 'react-router-dom';
const EventCard = ({ name, logo }) => {
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
    <>
    <Link to={`/${name}`} style={{ textDecoration: 'none' ,color: 'white' }}>
   
    <div 
      className={`event-main-card ${isActive ? 'active' : ''}`}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      onClick={handleInteraction}
    >
      <img src={logo} alt={`${name} logo`}  className="event-main-logo" />
      <h3>{name}</h3>
    </div>
    </Link>
    </>
  );
};

const Events = () => {
  const events = [
    {
      name: "Sports",
      logo: Image
    },
    {
      name: "Cultural",
      logo: Image
    },
  ];

  return (
    <div className="events-main-page">
      <h1>IGNITE's Events</h1>
      <div className="events-main-grid">
        {events.map((sponsor, index) => (
          <EventCard key={index} {...sponsor} />
        ))}
      </div>
    </div>
  );
};

export default Events;