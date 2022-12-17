import React, { useState, useEffect } from 'react';

import Cards from '../Cards';
import HeroSection from '../HeroSection';
import HS1 from '../HS1';
import Footer from '../Footer';
import '../pages/signup.css'

export default function SignUp() {
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
  return(<>
  
<div class = "flow">
  {/* <h1 class ="Title">A simple flowchart to showcase the process</h1> */}
<br>
</br>
<br>
</br>
<br>
</br>
<h2 class = "hovertext">A simple flowchart of the process used in the data collection in Project Vaani.</h2>

<div id="cardcontainer">


  {/* <div class="flow1" id="no1"><a href="" title='Click to know more'>Image collection</a></div> */}
<div class = "cardtitle">
  <h2>Image Collection</h2>
</div>
  <div class="cardabout1">
 
       
        <div class="card__innerabout1">

 
             
<p>Images collection by crowdsource users.
            </p>

 
        </div>
        
    </div>
  <div class ="arr1">
  <p> &#8595;</p>
  </div>


  <div class = "cardtitle">
  <h2>Image Curation</h2>
</div>
    <div class="cardabout2">

       
 <div class="card__innerabout2">


      
<p>
Filter out collected images to remove problematic ones.
     </p>

 </div>
</div>

  {/* <div id="line1"></div> */}
  <div class ="arr2">
  <p> &#8595;</p>
  </div>

  <div class = "cardtitle">
  <h2>Speech recording </h2>
</div>
  <div class="cardabout3">
 
       
 <div class="card__innerabout3">
  

      
<p>Record when people are asked to speak about images one by one.
     </p>

 </div>
</div>

{/*   
  <div id="line1"></div> */}
   <div class ="arr3">
  <p> &#8595;</p>
  </div>
  <div class = "cardtitle">
  <h2>Speech Quality control </h2>
</div>
  <div class="cardabout4">
 
       
 <div class="card__innerabout4">


      
<p>Filter out low quality speech recordings.
     </p>

 </div>
</div>
{/* <div id="line1"></div> */}
<div class ="arr4">
  <p> &#8595;</p>
  </div>
  <div class = "cardtitle">
  <h2>10% transcription </h2>
</div>
<div class="cardabout5">
 
       
 <div class="card__innerabout5">
  

      
<p>
Select 10% of all recordings and transcribe.
     </p>

 </div>
</div>

  
  
  {/* <div id="no2"><a href="#">Sales &amp; Marketing Director</a></div>
  <div id="no3"><a href="#">Production Director</a></div>
  <div id="no4"><a href="#">Human Resources Director</a></div>
  <div id="no5"><a href="#">Finance Director</a></div>
  <div id="line7"></div>
  <div id="line8"></div>
  <div class="clear"></div>
  <div id="no6"><a href="#">Factory Manager</a></div>
  <div id="line9"></div>
  <div id="line10"></div>
  <div id="no7"><a href="#">Management Accountant</a></div>
  <div id="line11"></div>
  <div id="line12"></div>
  <div class="clear"></div>
  <div id="line13"></div>
  <div id="line14"></div>
  <div class="clear"></div>
  <div id="no8"><a href="#">Quality Control Manager</a></div>
  <div id="line15"></div>
  <div id="line16"></div>
  <div id="no9"><a href="#">Financial Accountant</a></div>
  <div id="line17"></div>
  <div id="line18"></div> */}

</div>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
<Footer />
</div>
<br>
</br>


  </>);
}
