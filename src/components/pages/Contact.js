import React from 'react';
import '../pages/Products.css'
import '../pages/Contact.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import HS1 from '../HS1';
import Footer from '../Footer';
export default function Contact() {
  return (<>
  
  <div class="container-fluid contact-form">
        <div class="contact-form-container">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvnxBXhOb3d7SrDzuNFsvD3K0tP6iuSPHa9f6y9E2-NubqqQ/viewform?embedded=true" width="300" height="900" frameborder="0" marginheight="0" marginwidth="10">Loading…</iframe>
  </div>
  </div>
  <p class = "sub">
SPIRE LAB, Room No. EE C 326 
Department of Electrical Engineering
Indian Institute of Science 
Bangalore-560012
  </p>
  <Footer />

  </>);
}
