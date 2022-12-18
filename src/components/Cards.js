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
    Digital India is marching ahead inexorably. Digital interfaces and communications have become critical for access to information, entertainment, economic opportunities and even essential services such as healthcare. 


 
      </p>
      <p>
      Project Vaani, by IISc and ARTPARK, is capturing the true diversity of India’s spoken languages to propel language AI technologies and content for an inclusive Digital India.





      </p>
      <p>
      We expect to create data corpora of over 150,000 hours of speech, part of which will be transcribed in local scripts, while ensuring linguistic, educational, urban-rural, age, and gender diversity (among other potential diversity characteristics). These diligently collected and curated datasets of natural speech and text from about 1 million people across all 773 districts of India will be open-sourced. The current version of the data is open-sourced <a href = "data">here</a>. Going forward, we hope to open source through platforms like Bhashini (under the National Language Translation Mission,MeiTY). 

</p>





   
      <p>
      This will boost the development of technologies such as automatic speech recognition (ASR), speech to speech translation (SST), and natural language understanding (NLU) that reflect the ground realities of how Indians speak.

      </p>
      <p>Google is funding the Project Vaani.
</p>
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
