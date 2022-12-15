import React from 'react';

import Cards from '../Cards';
import HeroSection from '../HeroSection';
import HS1 from '../HS1';
import Footer from '../Footer';
import '../pages/about.css'

export default function About() {
  return(<>
  
<div class = "flow">
  <h1 class ="Title">A simple flowchart to showcase the process</h1>

<div id="container">

  <div class="flow1" id="no1"><a href="" title='Click to know more'>Image collection</a></div>
 
  <div id="line1"></div>
  {/* <div id="line2"></div>
  <div id="line3"></div>
  <div id="line4"></div>
  <div id="line5"></div>
  <div id="line6"></div> */}
  <div class="flow2" id="no1"><a href="" title='Click to know more'>Image curation</a></div>

  <div id="line1"></div>

  <div class ="flow3"id="no1"><a href="" title='Click to know more'>Speech recording</a></div>
  <div id="line1"></div>

  <div class ="flow4" id="no1"><a href="" title='Click to know more'>Speech Quality control</a></div>
  <div id="line1"></div>
  <div class = "flow5"id="no1"><a href="" title='Click to know more'>10% transcription</a></div>

  
  


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
