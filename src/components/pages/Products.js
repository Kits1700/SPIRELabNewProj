import React, { useState,useRef,useEffect } from 'react';
import '../pages/Products.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import HS1 from '../HS1';
import Footer from '../Footer';
import '../pages/part1.css'
import '../pages/Alerts'
import Alerts from '../pages/Alerts';
import { firestore,auth } from "./firebase";
import { getFirestore } from "@firebase/firestore";

import { addDoc,collection,doc,setDoc,getDoc } from "@firebase/firestore";
import "../Button";
import { async } from '@firebase/util';


export default function Products() {
  window.scrollTo(0, 0);

const messageRef = useRef();
const ref = collection(firestore,"track-clicks");

  var dataCounts = 0;
  const db = getFirestore();
  const docRef = doc(db, "track-clicks", "sameID" );
 
 

  useEffect(() =>{
    getData();
  });

  var [count, setCount] = useState(1016);
  let getData = () => {
  getDoc(doc(db, "track-clicks", "sameID")).then(docSnap => {
  if (docSnap.exists()) {
    var dataCount = docSnap.data().counts;
    count = dataCount;
   

  } else {
    console.log("No such document!");
  }
})

}

  
 
let incrementCount = async(e) => {

 
  e.preventDefault();
  
  setCount(count + 1);
  let data = {
 

    counts:count+1,
   
       }
       e.preventDefault();

  try{
    setDoc(docRef,data);
    
  }catch(e){
    console.log(e);
  }

};


  return (<>

<html>

<div id = "here">here</div>
  <div class="tabs">
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" checked/>
  <label for="tab1" class="tabs__label">Data Summary</label>
  <div class="tabs__content">
  <br></br>

    <table class = "con">
  <tr>
    <th>State</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
  </tr>
  <tr>
  <td><u><a href="#bihar">Bihar</a></u></td>
  <td>44.34</td>
  <td>575</td>
  </tr>
  <tr>
   <td><u><a href="#maha">Maharashtra</a></u></td>
   <td>6.4</td>
   <td>62</td>
  </tr>
  <tr>
   <td><u><a href="#chh">Chhattisgarh</a></u></td>
   <td>10.76</td>
   <td>158</td>
  </tr>
  <tr>
   <td><u><a href="#kar">Karnataka</a></u></td>
   <td>17.51</td>
   <td>187</td>
  </tr>
  <tr>
   <td><u><a href="#up">Uttar Pradesh</a></u></td>
   <td>21.82</td>
   <td>398</td>
  </tr>
  <tr>
   <td><u><a href="#ap">Andhra Pradesh</a></u></td>
   <td>0.028</td>
   <td>2</td>
  </tr>
  <tr>
   <td><u><a href="#raj">Rajasthan</a></u></td>
   <td>9.89</td>
   <td>106</td>
  </tr>
  <tr>
   <td><u><a href="#wb">West Bengal</a></u></td>
   <td>14.03</td>
   <td>335</td>
  </tr>
  <tr>
   <td><u><a href="#tel">Telangana</a></u></td>
   <td>1.60</td>
   <td>16</td>
  </tr>
  <tr>
   <td><u><a href="#goa">Goa</a></u></td>
   <td>0.212</td>
   <td>2</td>
  </tr>
  <tr>
   <td><u><a href="#uk">Uttarakhand</a></u></td>
   <td>8.22</td>
   <td>87</td>
  </tr>
  
  
  
  
  
  
  

 
 
 
  
</table> 

<br></br>

<div id = "bihar">
<img  src = "/images/bihar.gif" width="250" height ="250"></img>
<br></br>

 <h2>Bihar(44.34 hours from 575 speakers)<div class = "top"><a href="#here">Back to Top.</a></div></h2>
  <br>
  </br>
  <table>
  <tr>
    <th>District</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
  </tr>
  <tr >
  <td>Araria</td>
  <td>4.376</td>
  <td>33</td>
  </tr>
  <tr >
  <td>Begusarai</td>
   <td>3.726</td>
   <td>103</td>
  </tr>
 
  <tr>
  <td>Darbhanga</td>
  <td>1.077</td>
  <td>7</td>
  </tr>
<tr>
    <td>
    East Champaran
    </td>
    <td>4.918</td>
    <td>57</td>
  </tr>
 
  <tr>
    <td>Gopalganj</td>
    <td>8.253</td>
    <td>78</td>
  </tr>
  <tr>
    <td>Jehanabad</td>
    <td>0.529</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Jamui</td>
    <td>1.837</td>
    <td>18</td>
  </tr>
  <tr>
    <td>Kishanganj</td>
    <td>4.927</td>
    <td>28</td>
  </tr>
  <tr>
    <td>Muzaffarpur</td>
    <td>2.203</td>
    <td>26</td>
  </tr>

  <tr>
    <td>Purnia</td>
    <td>1.211</td>
    <td>12</td>
  </tr>
 
   <tr>
    <td>Samastipur</td>
    <td>7.835</td>
    <td>73</td>
  </tr>
  <tr>  
    <td>Saran</td>
     <td>0.671</td>
    <td>32</td></tr>
  
 
 
  <tr>
    <td>Sitamarhi</td>
    <td>2.252</td>
    <td>95</td>
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
</div>
<div id = "maha">
<img src = "/images/maha.gif" width="250" height ="250"></img>
<br>
</br>

<h2>Maharashtra(6.4 hours from 62 speakers)<div class = "top"><a href="#here">Back to Top.</a></div></h2>
<table>
  <tr>
    <th>District</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
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
</div>
<div id = "chh">
<img src = "/images/chhattisgarh.gif" width="250" height ="250"></img>
<br>
</br>
<h2>Chhattisgarh(10.76 hourse from 158 speakers)<div class = "top"><a href="#here">Back to Top.</a></div></h2>
<table>
  <tr>
    <th>District</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
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
<td>Kabirdham</td>
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
    <td>Surguja</td>
    <td>0.156</td>
    <td>3</td>
  </tr>
</table> 
<br>
</br>
</div>
<div id = "kar">
<img src = "/images/karnataka.gif" width="250" height ="250"></img>
<br></br>
<h2>Karnataka(17.51 hours from 187 speakers)<div class = "top"><a href="#here">Back to Top.</a></div></h2>
<table>
  <tr>
    <th>District</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
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
  <td>Chamrajnagar</td>
  <td>3.747</td>
  <td>31</td>
  </tr>
  <tr>
<td>Dakshin Kannada</td>
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
</div>
<div id = "up">
<img src = "/images/uttar05s.gif" width="250" height ="250"></img>
<br></br>
<h2>Uttar Pradesh(21.82 hours from 398 speakers)<div class = "top"><a href="#here">Back to Top.</a></div></h2>
<table>
  <tr>
    <th>District</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
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
    <td>Jyotiba Phule Nagar</td>
    <td>5.033</td>
    <td>36</td>
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
</div>
<div id = "ap">
<img src = "/images/andhra09s.gif" width="250" height ="250"></img>
<br></br>
<h2>Andhra Pradesh(0.028 hours from 2 speakers)<div class = "top"><a href="#here">Back to Top.</a></div></h2>
<table>
  <tr>
    <th>District</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
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
</div>
<br>
</br>
<div id = "raj">
<img src = "/images/uttar05s.gif" width="250" height ="250"></img>
<br></br>
<h2>Rajasthan(9.89 hours from 106 speakers)<div class = "top"><a href="#here">Back to Top.</a></div></h2>
<table>
  <tr>
    <th>District</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
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
</div>
<div id = "wb">
<img src = "/images/bengale09s.gif" width="250" height ="250"></img>
<br></br>
<h2>West Bengal(14.03 hours from 335 speakers)<div class = "top"><a href="#here">Back to Top.</a></div></h2>
<table>
  <tr>
    <th>District</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
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
    <td>North 24 Parganas</td>
    <td>3.249</td>
    <td>69</td>
  </tr>
  <tr>
    <td>
    Paschim Medinipur
    </td>
    <td>1.323</td>
    <td>63</td>
  </tr>
</table> 
<div id ="tel">
<br>
</br>
<img src = "/images/telangana.gif" width="250" height ="250"></img>
<br>
</br>
</div>

<h2>Telangana(1.60 hours from 16 speakers)<div class = "top"><a href="#here">Back to Top.</a></div></h2>
<table>
  <tr>
    <th>District</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
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
</div>
<br>
</br>
<div id = "goa">
<img id = "goap"src = "/images/goa09s.gif" width="250" height ="250"></img>
<br>
</br>

<h2>Goa(0.212 hours from 2 speakers) <div class = "top"><a href="#here">Back to Top.</a></div></h2>
<table >
  <tr>
    <th>District</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
  </tr>
  <tr>
  <td>North Goa</td>
  <td>0.212</td>
  <td>2</td>
  </tr>
  
</table> 
</div>
<br></br>
<div id = "uk">
  

<img src = "/images/uttarakhand05s.gif" width="250" height ="250"></img>

<br></br>
<h2>Uttarakhand(8.22 hours from 87 speakers)<div class = "top"><a href="#here">Back to Top.</a></div></h2>
<table>
  <tr>
    <th>District</th>
    <th>Record Duration(hrs)</th>
    <th>Speaker Count</th>
  </tr>
  <tr>
  <td>Tehri Garhwal</td>
  <td>5.982</td>
  <td>58</td>
  </tr>

  <tr>
    <td>Uttarkashi</td>
    <td>2.236</td>
    <td>29</td>
  </tr>
 
 
   
  
</table> 

</div>

<br></br>

<br></br>
  <Footer />
  <br></br>

<br></br>
  </div>
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab2" />
  <label for="tab2" class="tabs__label">Data Download</label>
  <div class="tabs__content">


<p class = "exlink">
The data from Project Vaani is available under license: <a href = "https://creativecommons.org/licenses/by/4.0/legalcode" >cc-by-4.0 </a>
</p>

<p class = "exlink" >Click <a  class="mainlink" href ="data.json" download onMouseUp={incrementCount} >here</a> to download the json file to access the data.
<i> <br></br>(by clicking the link you are agreeing to download the data under license: cc-by-4.0)</i><br></br><br></br><div class = "downtext" >Number of downloads: 
{count}
  
{/* <button title={"+"} onClick={incrementCount}>
ADD
</button>
<div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div> */}
</div>
</p>

 <Footer />
  </div>
</div>

</html>
  </>);
}
