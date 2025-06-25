import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Carousel } from '@mantine/carousel';
import { Button, Group } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './EventDetail.css';
import { useMediaQuery } from '@mantine/hooks';

import image2 from '../assets/image.png'
import { useParams } from 'react-router-dom';
const EventDetail = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const {id}=useParams()
  const [activeTab, setActiveTab] = useState('about');

  const images = [
    { src: 'path_to_image1.jpg', alt: 'Person 1', name: 'Person 1' },
    { src: 'path_to_image2.jpg', alt: 'Person 2', name: 'Person 2' },
    { src: 'path_to_image3.jpg', alt: 'Person 3', name: 'Person 3' },
  ];

  const content = {
    about: (
      <>
        <h2>Venue: Booth on the Left of the IB Entrance</h2>
        <p>Families shattered. Bloodied hands. A hidden killer.</p>
        <p>A murder mystery without compare.</p>
        <p>Enter a world filled with secrets, intrigue, and murder galore. As you find yourself in the midst of two feuding families and a murder that threatens their very legacies, you must maneuver around veils of deceit and concealed motives to uncover the one true murderer. Their fate lies in your hands - the last chance to piece together a shattered bloodline.</p>
        <p>Find the killer or die trying.</p>
      </>
    ),
    rules: (
      <>
        <h2>Event Rules</h2>
        <ul>
          <li>Walk in registrations only!!!</li>
          <li>Team Size: Individual</li>
          <li>Additional rules will be explained at the venue.</li>
        </ul>
      </>
    ),
    brochures: (
      <>
        <h2>Brochures</h2>
        <p>Download our event brochure for more detailed information about the murder mystery and what to expect.</p>
        <Button variant="outline" color="orange">Download Brochure</Button>
      </>
    )
  };

  return (
    <Container fluid className="event-detail">
      <h1 className="main-title">{id}</h1>
      
      <Carousel
        height={420}
        loop
        slideSize={isMobile ? '100%' : '50%'}
        align="start"
      >
        {images.map((image, index) => (
          <Carousel.Slide key={index}>
            <div className="carousel-slide">
              <img src={image2}  alt={image.alt} />
              <p className="person-name">{image.name}</p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      
      <Group justify="center" className="hotbar">
        <Button 
          variant={activeTab === 'about' ? 'filled' : 'outline'} 
          onClick={() => setActiveTab('about')}
          color="orange"
        >
          About
        </Button>
        <Button 
          variant={activeTab === 'rules' ? 'filled' : 'outline'} 
          onClick={() => setActiveTab('rules')}
          color="orange"
        >
          Rules
        </Button>
        <Button 
          variant={activeTab === 'brochures' ? 'filled' : 'outline'} 
          onClick={() => setActiveTab('brochures')}
          color="orange"
        >
          Brochures
        </Button>
      </Group>
      
      <div className="content">
        {content[activeTab]}
      </div>
    </Container>
  );
};

export default EventDetail;