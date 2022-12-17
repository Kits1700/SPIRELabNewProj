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
    <p>Capturing the language landscape of India  for an inclusive Digital India</p>
  </div>
  <img src="/images/indiapol.jpg" alt="bubbles from surf" class="hero-image"/> 
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
