import React, { useState, useEffect } from 'react';
import '../pages/Products.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import HS1 from '../HS1';
import Footer from '../Footer';
import '../pages/part1.css'
export default function Products() {
 
  

  
//   document
//   .getElementById('target')
//   .addEventListener('change', function () {
//     'use strict';
//     var vis = document.querySelector('.vis'),   
//       target = document.getElementById(this.value);
//     if (vis !== null) {
//       vis.className = 'inv';
//     }
//     if (target !== null ) {
//       target.className = 'vis';
//     }
// });
  return (<>


  <div class="tabs">
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" />
  <label for="tab1" class="tabs__label">Data Summary</label>
  <div class="tabs__content">
  <h2>Karnataka</h2>
  <table>
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr>
  
  </tr>
  <tr>
   
  </tr>
  <tr>
    
  </tr>
  <tr>
  
  </tr>
</table>

  <Footer />
   
  </div>
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab2" checked/>
  <label for="tab2" class="tabs__label">Data Download</label>
  <div class="tabs__content">


<p class = "exlink">
The data from Project Vaani is available under license: <a href = "https://creativecommons.org/licenses/by/4.0/legalcode" >cc-by-4.0 </a>
</p>
<p class = "exlink">Click <a href ="data.json " download>here</a> to download the json file to access the data</p>
{/* <a href="/images/img-7/artpark.png" download="img" target='_blank'>
<button type="button" class="btn btn-success btn-lg btn-block">Download Resume</button>
</a> */}


   
  {/* <br>
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
</br> */}
 <Footer />
  </div>
</div>


  </>);
}
