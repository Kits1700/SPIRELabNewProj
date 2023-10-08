import React, { useState, useEffect } from 'react';

import './Cards1.css';
import CardItem from '../CardItem';
import '../Navbar.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
export default function Services() {
  window.scrollTo(0, 0)
  return (<>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>

<h1 class="h1-text">
People
</h1>
<div class="container">
   <div class="box1">
    {/* <div class="top-bar"></div>
    <div class="top">
      <i class="fa fa-check-circle" aria-hidden="true"></i>
 
      <label class="heart" for="heart-btn-1"></label>
    </div>
    <div class="content">
      <img src="https://images.pexels.com/photos/2570145/pexels-photo-2570145.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""/>
      <strong>David Warner</strong>
      <p>thewarner@gmail.com</p>
    </div>
    <div class="btn">
      <a href="#"><i class="fa fa-clipboard" aria-hidden="true"></i>Assign</a>
      <a href="#"><i class="fa fa-eye" aria-hidden="true"></i>View</a>
    </div> */}
  </div> 
  <div class="box">
    <div class="top-bar"></div>
    <div class="top">
      <div>
       
      </div>
      <div>
    
      </div>
    </div>
    <div class="content">
      <img src="https://i0.wp.com/language.artpark.in/wp-content/uploads/2022/12/image7.png?fit=300%2C270&ssl=1" alt=""/>
      <a href="https://eecs.iisc.ac.in/people/prasanta-kumar-ghosh/"><strong>Prof. Prasanta Kumar Ghosh</strong></a>
      <p>Project Investigator </p><p>EE, IISc, Bangalore</p>
    

    </div>
   
  </div>
  <div class="box">
    <div class="top-bar"></div>
    <div class="top">
  
      

    </div>
    <div class="content">
      <img class ="lastimg"src="https://i0.wp.com/language.artpark.in/wp-content/uploads/2022/12/image6.jpg?fit=415%2C415&ssl=1" alt=""/>
      <a href="https://www.linkedin.com/in/raghuramd/"><strong>Raghu Dharmaraju</strong></a>
      <p>President</p><p> ARTPARK</p>
     
    </div>
    
  </div>
  <div class="box4">
  
  </div>
  
</div>
<h1 class="h1-text">
Partners
</h1>


  
   <div class = "last">
   <img src="/images/al.png" alt=""/>
      <br></br>
      <a  class = "lin"href="https://www.artpark.in"><u>https://www.artpark.in</u></a>
   </div>
     <br>
     </br>
   
     <div class="box4">
  
  </div>
 
   
  
 
  <br></br>
  <Footer />
  </>);
}
