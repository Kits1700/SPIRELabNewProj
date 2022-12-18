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
  <td>4.376</td>
  <td>33</td>
  </tr>
  <tr >
  <td>Begusara</td>
   <td>0.036</td>
   <td>3</td>
  </tr>
  <tr>
  <td>Begusarai</td>
    <td>3.690</td>
    <td>100</td>
  </tr>
  <tr>
  <td>Darbhang</td>
  <td>0.024</td>
  <td>1</td>
  </tr>
  <tr>
<td>Darbhanga</td>
<td>1.053</td>
<td>6</td>
  </tr>
  <tr>
    <td>EastCham</td>
    <td>0.010</td>
    <td>1</td>
  </tr>
  <tr>
    <td>
    EastChamparan
    </td>
    <td>4.908</td>
    <td>56</td>
  </tr>
  <tr>
    <td>Gopalgan</td>
    <td>4.910</td>
    <td>41</td>
  </tr>
  <tr>
    <td>Gopalganj</td>
    <td>3.343</td>
    <td>37</td>
  </tr>
  <tr>
    <td>Jahanabad</td>
    <td>0.529</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Jamui</td>
    <td>1.837</td>
    <td>18</td>
  </tr>
  <tr>
    <td>Kishanga</td>
    <td>4.122</td>
    <td>28</td>
  </tr>
  <tr>
    <td>Kishanganj</td>
    <td>0.805</td>
    <td>22</td>
  </tr>
  <tr>
    <td>Muzaffar</td>
    <td>0.021</td>
    <td>4</td>
  </tr>
  <tr>
    <td>Muzaffarpur</td>
    <td>2.182</td>
    <td>22</td>
  </tr>
  <tr>
    <td>Purnia</td>
    <td>1.211</td>
    <td>12</td>
  </tr>
  <tr>
    <td>Samastip</td>
    <td>3.484</td>
    <td>34</td>
  </tr>
 
   <tr>
    <td>Samastipur</td>
    <td>4.351</td>
    <td>39</td>
  </tr>
  <tr>  
    <td>Saran</td>
     <td>0.671</td>
    <td>32</td></tr>
  
 
  <tr>
    <td>Sitamarh</td>
    <td>0.808</td>
    <td>23</td>
  </tr>
  <tr>
    <td>Sitamarhi</td>
    <td>1.444</td>
    <td>72</td>
  </tr>
  <tr>
    <td>Supaul</td>
    <td>0.408</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Vaishali</td>
    <td>0.117</td>
    <td>8</td>
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
  <td>Aurangabad</td>
  <td>0.119</td>
  <td>5</td>
  </tr>
  <tr>
   <td>Dhule</td>
   <td>0.691</td>
   <td>5</td>
  </tr>
  <tr>
   
  </tr>
  <tr>
  <td>Nagpur</td>
  <td>3.996</td>
  <td>33</td>
  </tr>
  <tr>
<td>Pune</td>
<td>0.993</td>
<td>9</td>
  </tr>
  <tr>
    <td>Solapur</td>
    <td>0.602</td>
    <td>10</td>
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
  <td>Balrampur</td>
  <td>0.003</td>
  <td>5</td>
  </tr>
  <tr>
   <td>Bastar</td>
   <td>0.166</td>
   <td>1</td>
  </tr>
  <tr>
    <td>Bilaspur</td>
    <td>5.218</td>
    <td>111</td>
  </tr>
  <tr>
  <td>Jashpur</td>
  <td>2.845</td>
  <td>19</td>
  </tr>
  <tr>
<td>Kabirdha</td>
<td>0.037</td>
<td>1</td>
  </tr>
  <tr>
    <td>Raigarh</td>
    <td>2.116</td>
    <td>16</td>
  </tr>
  <tr>
    <td>
    Rajnandgaon
    </td>
    <td>0.216</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Sarguja</td>
    <td>0.156</td>
    <td>3</td>
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
  <td>Belgaum</td>
  <td>1.146</td>
  <td>11</td>
  </tr>
  <tr>
   <td>Bijapur</td>
   <td>0.408</td>
   <td>7</td>
  </tr>
  <tr>
    <td>Chamrajn</td>
    <td>3.683</td>
    <td>29</td>
  </tr>
  <tr>
  <td>Chamrajnagar</td>
  <td>0.064</td>
  <td>2</td>
  </tr>
  <tr>
<td>Dakshin Karnataka</td>
<td>0.477</td>
<td>6</td>
  </tr>
  <tr>
    <td>Dharwad</td>
    <td>5.142</td>
    <td>51</td>
  </tr>
  <tr>
    <td>
    Gulbarga
    </td>
    <td>2.021</td>
    <td>15</td>
      </tr>
      <tr>
        <td>Mysore</td>
        <td>0.769</td>
        <td>17</td>
      </tr>
      <tr>
        <td>Shimoga</td>
        <td>3.802</td>
        <td>49</td>
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
  <td>Budaun</td>
  <td>2.188</td>
  <td>58</td>
  </tr>
  <tr>
   <td>Deoria</td>
   <td>3.123</td>
   <td>82</td>
  </tr>
  <tr>
    <td>Etah</td>
    <td>1.377</td>
    <td>10</td>
  </tr>
  <tr>
  <td>Ghazipur</td>
  <td>0.852</td>
  <td>17</td>
  </tr>
  <tr>
<td>Gorakhpur</td>
<td>1.374</td>
<td>35</td>
  </tr>
  <tr>
    <td>Hamirpur</td>
    <td>2.677</td>
    <td>38</td>
  </tr>
  <tr>
    <td>
    Jalaun
    </td>
    <td>
      0.196
    </td>
    <td>6</td>
  </tr>
  <tr>
    <td>JyotibaP</td>
    <td>4.020</td>
    <td>29</td>
  </tr>
  <tr>
    <td>JyotibaPhuleNagar</td>
    <td>1.013</td>
    <td>7</td>
  </tr>
  <tr>
    <td>Muzzaffarnagar</td>
    <td>2.544</td>
    <td>91</td>
  </tr>
  <tr>
    <td>Varanasi</td>
    <td>2.461</td>
    <td>25</td>
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
  <td>Chittoor</td>
  <td>0.020</td>
  <td>1</td>
  </tr>
  <tr>
   <td>Vishakapatnam</td>
   <td>0.008</td>
   <td>1</td>
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
  <td>Churu</td>
  <td>5.031</td>
  <td>42</td>
  </tr>
 
  <tr>
    <td>Nagaur</td>
    <td>4.851</td>
    <td>64</td>
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
  <td>Dakshin Dinajpur</td>
  <td>1.094</td>
  <td>32</td>
  </tr>
  <tr>
   <td>Jalpaiguri</td>
   <td>0.820</td>
   <td>32</td>
  </tr>
  <tr>
    <td>Jhargram</td>
    <td>0.870</td>
    <td>50</td>
  </tr>
  <tr>
  <td>Kolkata</td>
  <td>6.674</td>
  <td>89</td>
  </tr>
  <tr>
<td>North24P</td>
<td>0.407</td>
<td>6</td>
  </tr>
  <tr>
    <td>North24Parganas</td>
    <td>2.842</td>
    <td>63</td>
  </tr>
  <tr>
    <td>
    Paschim Medinipur
    </td>
    <td>1.323</td>
    <td>63</td>
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
  <td>Karimnagar</td>
  <td>0.173</td>
  <td>4</td>
  </tr>
  <tr>
   <td>Nalgonda</td>
   <td>1.417</td>
   <td>12</td>
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
  <td>NoSoGoa</td>
  <td>0.212</td>
  <td>2</td>
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
  <td>Tehri Garhwal</td>
  <td>5.982</td>
  <td>58</td>
  </tr>
  <tr>
   <td>Uttarkas</td>
   <td>0.282</td>
   <td>2</td>
  </tr>
  <tr>
    <td>Uttarkashi</td>
    <td>1.954</td>
    <td>27</td>
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
