import React from 'react'
import "./Home.css"
import Countdown from './Countdown'
import { useRef } from "react";
import PictureCarousel from './pictureCarousel';
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {

  const targetDate = "2025-11-21T23:59:59";

  
  return (
    <div className='whole_home_page_div'>
      <div className='home_page_central_attraction'>
        <div className='home_page_logo'>
          <img src="https://via.placeholder.com/400" alt="Logo" />
        </div>
        <Countdown targetDate={targetDate} />
      </div>
      <div className='home_page_writeup_text_container'>
        <p className='home_page_writeup_text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* <div className='carousel_container'>
         <PictureCarousel/> 
        <Carousel>
          <Carousel.Item>
            <img src="https://via.placeholder.com/400" alt="Logo" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/400" alt="Logo" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/400" alt="Logo" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/400" alt="Logo" />
          </Carousel.Item>
        </Carousel>
      </div> */}
    </div>
    
  )
}
