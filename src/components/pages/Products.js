import React from 'react';
import '../pages/Products.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import HS1 from '../HS1';
import Footer from '../Footer';
import '../pages/part1.css'
export default function Products() {
  return (<>
  <div class="tabs">
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" checked/>
  <label for="tab1" class="tabs__label">Data Summary</label>
  <div class="tabs__content">
  <HS1 />
   
  </div>
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab2"/>
  <label for="tab2" class="tabs__label">Data Download</label>
  <div class="tabs__content">

   <br>
   </br>
   <p>
  Click on the below card to know more.
      </p>
    <a href='https://www.bhashini.gov.in/en/'>
    <div class="ca">
       
	  <img class = "one" src="/images/Bhas.png"  width="300" height="300" alt="img" />
	  <div class="ta">
	  
	  </div>
  </div>
  
  </a>

   
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
<br>
</br>
<br>
</br>
 <Footer />
  </div>
</div>


  </>);
}
