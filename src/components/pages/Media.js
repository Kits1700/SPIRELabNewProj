import React, { useState, useEffect } from 'react';

import './Media.css';
import CardItem from '../CardItem';
import '../Navbar.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

export default function Media()
{
  window.scrollTo(0, 0)
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
      <h2>Blog</h2>
      <br>
      </br>
      <div class = "titlemain">
      <h2>Why capturing the language landscape of India is important?</h2>
      <br></br>
    <small>Prof. Prasanta Kumar Ghosh, Raghu Dharmaraju | 18-12-2022</small>
      </div>
      
      <br></br>
  <p>
  As the second wave of Covid ravaged Bengaluru, Narsamma, a domestic worker in her 40s, was anxious to get her vaccination. Though she had a smartphone, her employer had to get her an appointment through CoWin. She could not type in any of the three languages – Kannada, Tamil, Telugu – in which she communicated verbally ‘well enough’ with her employers. She could barely read or write and feared digital interfaces. 




  </p>
  <p>
  As ‘digital’ becomes the default mode of accessing even essential services, it is important to note that only about 10% of Indians can speak or write English. Even generous estimates put English communicators at about 400M leaving out 1 Billion Indians. That is why, an inclusive Digital India requires language AI that can understand all Indians. 




  </p>
  <p>
  

  Language AI gathered speed in the last decade. Many readers may be regular users of Amazon Alexa or Google Translate. More recently, generative models like GPT-3 have captured the public imagination. But these are unlikely to be the path for Indian languages. 




  </p>
  <p>
  It is often said that India has 15 or 22 main languages. But that is an oversimplification. In reality, language varies continuously across geography. It does not change abruptly at state or district borders. What Narsamma, for example, speaks at home sounds like a mix of Kannada and Telugu. 




  </p>
  <p>
  The corpus of natural language data in digital forms, even in idealized forms of languages like Hindi and Marathi, is magnitudes smaller than that available in English or other Western languages. It is miniscule or almost non-existent in comparison if you take some variants spoken even by millions. As a result, automatic speech recognition (ASR) models trained on Hindi fails for Bhojpuri speakers of Bihar and eastern UP. When Bengali alone is said to have 50 variants, one can hardly expect data biased towards urban, young, male speakers to be good enough for training language models that understand rural, middle-aged, female speakers.



  </p>
  <p>
  Recognizing this, the Ministry of Electronics & Information Technology (MeiTY) has launched the National Language Translation Mission and Bhashini – a digital platform for language data and AI.



  </p>
  <p>
  IISc and ARTPARK have launched Project Vaani, with initial support from Google, to collect and curate language data that reflect how 100s of millions like Narsamma really speak. The current version of the Vaani data is open sourced <a href = "data">here</a>. Going forward, we hope to open-source in Bhashini and other platforms.


  </p>
  <p>
  In the coming months, we will launch challenges for researchers as well as application builders. Watch this space!




  </p>
    <br>
    </br>
 

    </div>
    <Footer />
      </>
    );
}