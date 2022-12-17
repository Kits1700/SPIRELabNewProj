import React, { useState, useEffect } from 'react';

import './Cards1.css';
import CardItem from '../CardItem';
import '../Navbar.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
export default function Services() {
  return (<>
  <div className='cards'>
      <h2> Project Investigator</h2>
      <br>
      </br>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem class = "one"
              src='images/PKG1.jpeg'
              text='Prof. Prasanta Kumar Ghosh'
             
              path='/services'
            />
            {/* <CardItem
              src='images/brown.jpg'
              text=''
            
              path='/services'
            />
             <CardItem
              src='images/brown.jpg'
              text=''
             
              path='/services'
            /> */}
            
          </ul>
          <h2> Partners</h2>
         <br>
         </br>
          <a href='https://ee.iisc.ac.in/~prasantg/'>
          <CardItem class = "one"
              src='images/artpark.png'
              text = 'ARTPARK'
           
            />
            </a>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/brown.jpg'
              text='Lorem Ipsum Lorem Ipsum Lorem Ipsum'
              
              path='/services'
            />
            <CardItem
              src='images/brown.jpg'
              text='Lorem Ipsum Lorem Ipsum Lorem Ipsum'
           
              path='/products'
            />
            <CardItem
              src='images/brown.jpg'
              text=''
              
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  <Footer />
  </>);
}
