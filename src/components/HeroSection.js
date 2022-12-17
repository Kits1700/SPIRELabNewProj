import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    

    <div class="hero">
  <div class="hero-overlay">
    <h1>Project Vaani</h1>
    <p>Aims to capture the language landscape of India</p>
  </div>
  <img src="https://media.istockphoto.com/id/1019491810/photo/india-3d-render-topographic-map-color.jpg?s=612x612&w=0&k=20&c=BfIXKXE-6dw5pJUJPYoIR-1QPaJDORbDUZuTqNdBbXo=" alt="bubbles from surf" class="hero-image"/> 
</div>
    // <div className='hero-container'>
      
    //   <div class="hero-section-text">
    // <h1>Header</h1>
    // <h5>subtitle about anything you like</h5>
    // </div>
      /* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */
    //   <br>
    //   </br>
    //   <br>
    //   </br>
    // </div>
  );
}

export default HeroSection;
