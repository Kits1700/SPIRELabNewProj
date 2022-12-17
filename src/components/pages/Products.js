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
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" />
  <label for="tab1" class="tabs__label">Data Summary</label>
  <div class="tabs__content">
  <HS1 />
   
  </div>
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab2" checked/>
  <label for="tab2" class="tabs__label">Data Download</label>
  <div class="tabs__content">
  
   <br>
   </br>
   <p class = "extlink">
  
      </p>
    {/* <a href='https://www.bhashini.gov.in/en/'>
    <div class="ca">
       
	  <img class = "one" src="/images/Bhas.png"  width="300" height="300" alt="img" />
	  <div class="ta">
	  
	  </div>
  </div>
  
  </a> */}

<p class = "exlink">
The data from Project Vaani is available under license: <a href = "https://creativecommons.org/licenses/by/4.0/legalcode" >cc-by-4.0 </a>
</p>
<p class = "exlink">Click <a href ="/var/www/vaani.com.html/data.json ">here </a>to download the json file.</p>


   
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
