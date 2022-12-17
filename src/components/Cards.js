import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Cards.css';
import CardItem from './CardItem';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Cards() {
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
    <>
    <div class ="para">
      <br>
      </br>
      
    <p>
Project Vaani aims to capture the multilingual speech diversity in India by
collecting speech data across 773 selected districts in India with the main purpose to develop a national digital public platform for languages to provide universal access to content, i.e., boost the delivery of digital content in all Indic
languages. 

      </p>
      <p>
      The collected speech samples will cover linguistic, educational, urban-rural, age, and gender diversity in the population, among potentially other diversity characteristics. This dataset will enable developing speech and language technologies and products for Indic languages with 80K+ speakers. 
      </p>
      <p>
      VaaniData will be open sourced through platforms such as Github and Bhashini, India’s national language mission . 

The region-based collection will capture the true speech diversity in the country and will ultimately result in models which are more capable of handling ground realities such as data collection, curation, developing speech and language technologies (e.g., for automatic speech recognition, speech to speech translation, text to speech), and delivering solutions powered by open data, applications, and services.



      </p>
      <p>Google LLC is funding the Project Vaani.</p>
    <br>
    </br>
 

    </div>

    </>
  );
  // return (
  //   <div className='cards'>
  //     <h1>New Project Details</h1>
  //     <div className='cards__container'>
  //       <div className='cards__wrapper'>
  //         <ul className='cards__items'>
  //           <CardItem
  //             src='images/c2.jpg'
  //             text=''
  //             label='Know More'
  //             path='/services'
  //           />
  //           <CardItem
  //             src='images/c2.jpg'
  //             text=''
  //             label='Know More'
  //             path='/services'
  //           />
  //            <CardItem
  //             src='images/c2.jpg'
  //             text=''
  //             label='Know More'
  //             path='/services'
  //           />
            
  //         </ul>
  //         <ul className='cards__items'>
  //           <CardItem
  //             src='images/c1.jpg'
  //             text='Lorem Ipsum Lorem Ipsum Lorem Ipsum'
  //             label='Know More'
  //             path='/services'
  //           />
  //           <CardItem
  //             src='images/c1.jpg'
  //             text='Lorem Ipsum Lorem Ipsum Lorem Ipsum'
  //             label='Know More'
  //             path='/products'
  //           />
  //           <CardItem
  //             src='images/c1.jpg'
  //             text=''
  //             label='Know More'
  //             path='/sign-up'
  //           />
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Cards;
