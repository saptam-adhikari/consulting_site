import React, { useState, useEffect } from 'react';
import './corousal.css';

const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 300; 
  const cardsToShow = 4; 
  const scrollSpeed = 1; 

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition - scrollSpeed;
        const maxScrollPosition = -(cardWidth * 1); 
        return newPosition <= maxScrollPosition ? 0 : newPosition;
      });
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='carousel-container'>
      <div
        className='carousel-wrapper'
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        <div className='service-pages'>
          <div className='service-section'>
            <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld34.webp' alt='Industries Pages'/>
            <p>Industries Pages</p>
          </div>
          <div className='service-section'>
            <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld35.webp' alt='Our Process Pages'/>
            <p>Our Process Pages</p>
          </div>
          <div className='service-section'>
            <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld36.webp' alt='Our Service Pages'/>
            <p>Our Service Pages</p>
          </div>
          <div className='service-section'>
            <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld37.webp' alt='About Us Pages'/>
            <p>About Us Pages</p>
          </div>

          <div className='service-section'>
            <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld34.webp' alt='Industries Pages'/>
            <p>Industries Pages</p>
          </div>
          <div className='service-section'>
            <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld35.webp' alt='Our Process Pages'/>
            <p>Our Process Pages</p>
          </div>
          <div className='service-section'>
            <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld36.webp' alt='Our Service Pages'/>
            <p>Our Service Pages</p>
          </div>
          <div className='service-section'>
            <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld37.webp' alt='About Us Pages'/>
            <p>About Us Pages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
