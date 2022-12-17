import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
       
       
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a href ='https://iisc.ac.in/' className='social-logo'>
              IISC | SPIRE LAB | ARTPARK
              </a>
            
          </div>
          <small class='website-rights'>VAANI © 2022</small>
          <div class='social-icons'>
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link> */}
            {/* <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link> */}
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link> */}
            {/* <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link> */}
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
