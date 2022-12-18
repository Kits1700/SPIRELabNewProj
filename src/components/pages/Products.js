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
<br></br>
<img src = "/images/bihar.gif" width="250" height ="250"></img>
<br></br>
 <h2>Bihar</h2>
  <br>
  </br>
  <table>
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr >
  <td>Araria</td>
  </tr>
  <tr >
   <td>Begusarai</td>
  </tr>
  <tr>
    <td>Darbhanga</td>
  </tr>
  <tr>
  <td>Gopalganj </td>
  </tr>
  <tr>
<td>Jahanabad</td>
  </tr>
  <tr>
    <td>Jamui</td>
  </tr>
  <tr>
    <td>
    Sitamarhi
    </td>
  </tr>
</table> 

<br>
</br>
<img src = "/images/maha.gif" width="250" height ="250"></img>
<br>
</br>
<h2>Maharashtra</h2>
<table>
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr>
  <td>Araria</td>
  </tr>
  <tr>
   <td>Begusarai</td>
  </tr>
  <tr>
    <td>Darbhanga</td>
  </tr>
  <tr>
  <td>Gopalganj </td>
  </tr>
  <tr>
<td>Jahanabad</td>
  </tr>
  <tr>
    <td>Jamui</td>
  </tr>
  <tr>
    <td>
    Sitamarhi
    </td>
  </tr>
</table> 
<br>
</br>
<img src = "/images/chhattisgarh.gif" width="250" height ="250"></img>
<br>
</br>
<h2>Chhattisgarh</h2>
<table>
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr>
  <td>Araria</td>
  </tr>
  <tr>
   <td>Begusarai</td>
  </tr>
  <tr>
    <td>Darbhanga</td>
  </tr>
  <tr>
  <td>Gopalganj </td>
  </tr>
  <tr>
<td>Jahanabad</td>
  </tr>
  <tr>
    <td>Jamui</td>
  </tr>
  <tr>
    <td>
    Sitamarhi
    </td>
  </tr>
</table> 
<br>
</br>
<img src = "/images/karnataka.gif" width="250" height ="250"></img>
<br></br>
<h2>Karnataka</h2>
<table>
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr>
  <td>Araria</td>
  </tr>
  <tr>
   <td>Begusarai</td>
  </tr>
  <tr>
    <td>Darbhanga</td>
  </tr>
  <tr>
  <td>Gopalganj </td>
  </tr>
  <tr>
<td>Jahanabad</td>
  </tr>
  <tr>
    <td>Jamui</td>
  </tr>
  <tr>
    <td>
    Sitamarhi
    </td>
  </tr>
</table> 
<br>
</br>
<img src = "/images/uttar05s.gif" width="250" height ="250"></img>
<br></br>
<h2>Uttar Pradesh</h2>
<table>
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr>
  <td>Araria</td>
  </tr>
  <tr>
   <td>Begusarai</td>
  </tr>
  <tr>
    <td>Darbhanga</td>
  </tr>
  <tr>
  <td>Gopalganj </td>
  </tr>
  <tr>
<td>Jahanabad</td>
  </tr>
  <tr>
    <td>Jamui</td>
  </tr>
  <tr>
    <td>
    Sitamarhi
    </td>
  </tr>
</table> 
<br>
</br>
<img src = "/images/andhra09s.gif" width="250" height ="250"></img>
<br></br>
<h2>Andhra Pradesh</h2>
<table>
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr>
  <td>Araria</td>
  </tr>
  <tr>
   <td>Begusarai</td>
  </tr>
  <tr>
    <td>Darbhanga</td>
  </tr>
  <tr>
  <td>Gopalganj </td>
  </tr>
  <tr>
<td>Jahanabad</td>
  </tr>
  <tr>
    <td>Jamui</td>
  </tr>
  <tr>
    <td>
    Sitamarhi
    </td>
  </tr>
</table> 
<br>
</br>
<img src = "/images/uttar05s.gif" width="250" height ="250"></img>
<br></br>
<h2>Rajasthan</h2>
<table>
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr>
  <td>Araria</td>
  </tr>
  <tr>
   <td>Begusarai</td>
  </tr>
  <tr>
    <td>Darbhanga</td>
  </tr>
  <tr>
  <td>Gopalganj </td>
  </tr>
  <tr>
<td>Jahanabad</td>
  </tr>
  <tr>
    <td>Jamui</td>
  </tr>
  <tr>
    <td>
    Sitamarhi
    </td>
  </tr>
</table> 
<br>
</br>

<img src = "/images/bengale09s.gif" width="250" height ="250"></img>
<br></br>
<h2>West Bengal</h2>
<table>
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr>
  <td>Araria</td>
  </tr>
  <tr>
   <td>Begusarai</td>
  </tr>
  <tr>
    <td>Darbhanga</td>
  </tr>
  <tr>
  <td>Gopalganj </td>
  </tr>
  <tr>
<td>Jahanabad</td>
  </tr>
  <tr>
    <td>Jamui</td>
  </tr>
  <tr>
    <td>
    Sitamarhi
    </td>
  </tr>
</table> 
<br>
</br>
<img src = "/images/telangana.gif" width="250" height ="250"></img>
<br>
</br>

<h2>Telangana</h2>
<table class = "last">
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr>
  <td>Araria</td>
  </tr>
  <tr>
   <td>Begusarai</td>
  </tr>
  <tr>
    <td>Darbhanga</td>
  </tr>
  <tr>
  <td>Gopalganj </td>
  </tr>
  <tr>
<td>Jahanabad</td>
  </tr>
  <tr>
    <td>Jamui</td>
  </tr>
  <tr>
    <td>
    Sitamarhi
    </td>
  </tr>
</table> 

<br>
</br>
<img src = "/images/goa09s.gif" width="250" height ="250"></img>
<br>
</br>

<h2>Goa</h2>
<table class = "last">
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr>
  <td>Araria</td>
  </tr>
  <tr>
   <td>Begusarai</td>
  </tr>
  <tr>
    <td>Darbhanga</td>
  </tr>
  <tr>
  <td>Gopalganj </td>
  </tr>
  <tr>
<td>Jahanabad</td>
  </tr>
  <tr>
    <td>Jamui</td>
  </tr>
  <tr>
    <td>
    Sitamarhi
    </td>
  </tr>
</table> 
<br></br>
<img src = "/images/uttarakhand05s.gif" width="250" height ="250"></img>
<br></br>
<h2>Uttarakhand</h2>
<table class = "last">
  <tr>
    <th>District</th>
    <th>Duration(hrs)</th>
    <th>No. of Speakers</th>
  </tr>
  <tr>
  <td>Araria</td>
  </tr>
  <tr>
   <td>Begusarai</td>
  </tr>
  <tr>
    <td>Darbhanga</td>
  </tr>
  <tr>
  <td>Gopalganj </td>
  </tr>
  <tr>
<td>Jahanabad</td>
  </tr>
  <tr>
    <td>Jamui</td>
  </tr>
  <tr>
    <td>
    Sitamarhi
    </td>
  </tr>
</table> 
<br></br>

<br></br>
  <Footer />
  <br></br>

<br></br>
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
