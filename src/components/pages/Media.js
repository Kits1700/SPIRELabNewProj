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
         <h2>Articles</h2>
         <br></br>
         <a class="article" href='https://www.livemint.com/technology/tech-news/artparkiisc-google-to-bring-innovation-to-india-s-diverse-languages-11671445526332.html'><p><u>Artpark-IISc, Google to bring innovation to India’s diverse languages</u></p></a>

<a class="article" href='https://www.livemint.com/companies/start-ups/google-taps-ai-to-grasp-india-s-language-diversity-11671466688191.html?utm_source=pocket_mylist'><p><u>Google taps AI to grasp India’s language diversity</u></p></a>

<a class="article" href='https://www.thehindubusinessline.com/news/variety/project-vaani-scales-decibels-as-it-maps-language-landscape-of-india/article66304920.ece'><p><u>Project Vaani scales decibels as it maps language landscape of India</u></p></a>

<a class="article" href='https://www.ceoinsightsindia.com/business-inside/india-s-first-google-io-connect-the-future-of-user-experience-is-here-nwid-14737.html'><p><u>India's First Google I/O Connect: The Future of User Experience is Here</u></p></a>

<a class="article" href='https://dig.watch/updates/googles-efforts-to-enhance-indian-language-data-and-combat-ai-bias'><p><u>Google's Efforts to Enhance Indian Language Data and Combat AI Bias</u></p></a>

<a class="article" href='https://hindi.gstimes.in/current-affairs-in-hindi/google-launches-project-vaani-in-partnership-with-iisc/'><p><u>Google Launches Project Vaani in Partnership with IISc</u></p></a>

<a class="article" href='https://thetechnisk.in/news/vaani/'><p><u>Google’s Vaani to collect languages from 773 Indian District</u></p></a>

<a class="article" href='https://trak.in/stories/google-indias-big-ai-ml-push-language-samples-from-700-districts-will-be-collected-grants-rs-8-crore-to-iisc/'><p><u>Google India's Big AI/ML Push: Language Samples from 700 Districts Will Be Collected, Grants Rs 8 Crore to IISc</u></p></a>

<a class="article" href='https://upsccurrentaffairs.net.in/2023/01/04/project-vaani-will-be-implemented-jointly-by-the-indian-institute-of-sciences-iisc-artpark-ai-and-robotics-technology-park-and-google/'><p><u>Project Vaani Will Be Implemented Jointly by the Indian Institute of Sciences (IISc), Artpark AI and Robotics Technology Park, and Google</u></p></a>

<a class="article" href='https://economictimes.indiatimes.com/tech/technology/project-vaani-how-google-plans-to-collect-dialects-across-773-districts-in-india/videoshow/96339407.cms?from=mdr'><p><u>Project Vaani: How Google Plans to Collect Dialects Across 773 Districts in India</u></p></a>

<a class="article" href='https://timesofindia.indiatimes.com/business/india-business/google-announces-ai-projects-in-indian-languages-agri/articleshow/96359903.cms'><p><u>Google Announces AI Projects in Indian Languages and Agriculture</u></p></a>

<a class="article" href='https://unorthodoxacademy.com/project-vaani-how-google-aims-to-comprehend-all-dialects-and-languages-spoken-in-india/'><p><u>Project Vaani: How Google Aims to Comprehend All Dialects and Languages Spoken in India</u></p></a>

<a class="article" href='https://www.mybrandbook.co.in/redirect.php?p=33793'><p><u>Google to partner with IISC for Project Vaani</u></p></a>


<a class="article" href='https://www.sanskritiias.com/pt-cards/project-vaani-45'><p><u>Project Vaani</u></p></a>

<a class="article" href='https://www.financialexpress.com/jobs-career/education-google-vaani-google-for-india-iisc-iit-iitm-ai-ml-education-2919264/'><p><u>Education: Google Vaani - Google for India - IISc, IIT, IITM - AI & ML Education</u></p></a>

    <br></br>
 
      <h2>Blog</h2>
      <br>
      </br>
      <div class = "titlemain">
      <h2 class= "art_title">Why capturing the language landscape of India is important?</h2>
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