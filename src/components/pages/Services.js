import React, { useState, useEffect } from 'react';

import './Cards1.css';
import CardItem from '../CardItem';
import '../Navbar.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
export default function Services() {
  return (<>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>

<h1 class="h1-text">
Team Members
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
      <strong>Prof Prasanta Kumar Ghosh</strong>
      <p>Project Investigator</p>

    </div>
    <div class="btn">

      <a href="https://eecs.iisc.ac.in/people/prasanta-kumar-ghosh/"><i class="fa fa-eye" aria-hidden="true"></i>View Profile</a>
    </div>
  </div>
  <div class="box">
    <div class="top-bar"></div>
    <div class="top">
  
      

    </div>
    <div class="content">
      <img src="https://i0.wp.com/language.artpark.in/wp-content/uploads/2022/12/image6.jpg?fit=415%2C415&ssl=1" alt=""/>
      <strong>Raghu Dharmaraju</strong>
      <p>Project</p>
     
    </div>
    <div class="btn">
     
      <a href="https://www.linkedin.com/in/raghuramd/"><i class="fa fa-eye" aria-hidden="true"></i>View Profile</a>
    </div>
  </div>
  <div class="box4">
  
  </div>
  
</div>
<div class = "container">
<div class="box">
    <div class="top-bar"></div>
    <div class="top">
     
      
     
    </div>
    <div class="content">
      <img src="/images/ap.jpeg" alt=""/>
      <strong>ARTPARK</strong>
      <p>Partner</p>
     
    </div>
    <div class="btn">
     
      <a href="https://www.artpark.in"><i class="fa fa-eye" aria-hidden="true"></i>View Website</a>
    </div>
  </div>
  </div>
  <br></br>
  <Footer />
  </>);
}
