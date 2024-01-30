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
import Map from './Map';

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

  const [activeTab, setActiveTab] = useState('tab1');


  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

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
<br></br>
  
   <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab1"
          checked={activeTab === 'tab1'}
          onChange={() => handleTabChange('tab1')}
        />
  <label for="tab1" class="tabs__label">Data Download</label>
  <div class="tabs__content">


<p class = "exlink">
The data from Project Vaani is available under license: <a href = "https://creativecommons.org/licenses/by/4.0/legalcode" >cc-by-4.0 </a>
</p>

<p class = "exlink" >
19 Dec, 2022:<br/>
Click here to download the json file to access the data.
(for complete audio data download click here)
<br/>
22 Jun, 2023:<br/>
Click here to download the json file to access the data.
(for complete audio data download click here)
<br/>
<b>09 Jan, 2024:</b><br/>
Click <a  class="mainlink" href ="data_09jan.tar.gz" download onMouseUp={incrementCount} >here</a> to download the json file to access the data.<br/>
For audio data download, click on the given links: <br/>
<a  class="mainlink" href ="Audios.tar.gz.aa" download>Part1  </a>  
<a  class="mainlink" href ="Audios.tar.gz.ab" download>Part2  </a>  
<a  class="mainlink" href ="Audios.tar.gz.ac" download>Part3  </a>  
<a  class="mainlink" href ="Audios.tar.gz.ad" download>Part4  </a>  
<a  class="mainlink" href ="Audios.tar.gz.ae" download>Part5  </a>
<br/>
To download the Image Dataset, Click <a class='mainlink' href="Images.tar.gz" download>here</a>.
<i> <br></br>(by clicking the link you are agreeing to download the data under license: cc-by-4.0)</i><br></br><br></br><div class = "downtext" >Number of downloads: 
{count}
 
	<br></br>
</div>
</p>

 <Footer />
  </div>

	   <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab2"
          checked={activeTab === 'tab2'}
          onChange={() => handleTabChange('tab2')}
        />
  <label for="tab2" class="tabs__label">Data Summary</label>
  <div class="tabs__content">
  <br></br>
<div>
<Map />
</div>

  <Footer />
  <br></br>
</div>
</div>
</html>
  </>);
}