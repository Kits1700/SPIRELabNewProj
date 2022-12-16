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
<h2 class = "hovertext">Hover over each card to understand our process!</h2>
<div id="cardcontainer">


  {/* <div class="flow1" id="no1"><a href="" title='Click to know more'>Image collection</a></div> */}
  <div class="cardabout1">
 
       
        <div class="card__innerabout1">
            <h2>Image Collection </h2>
 
             
<p>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>

 
        </div>
        
    </div>
  <div class ="arr">
  <p> &#8595;</p>
  </div>



    <div class="cardabout2">

       
 <div class="card__innerabout2">
     <h2>Image curation</h2>

      
<p>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
     </p>

 </div>
</div>

  {/* <div id="line1"></div> */}
  <div class ="arr">
  <p> &#8595;</p>
  </div>

  <div class="cardabout3">
 
       
 <div class="card__innerabout3">
     <h2>Speech recording </h2>

      
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
     </p>

 </div>
</div>

{/*   
  <div id="line1"></div> */}
   <div class ="arr">
  <p> &#8595;</p>
  </div>
  <div class="cardabout4">
 
       
 <div class="card__innerabout4">
     <h2>Speech Quality control </h2>

      
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
     </p>

 </div>
</div>
{/* <div id="line1"></div> */}
<div class ="arr">
  <p> &#8595;</p>
  </div>
<div class="cardabout5">
 
       
 <div class="card__innerabout5">
     <h2>10% transcription </h2>

      
<p>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
