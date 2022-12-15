import React, { useState, useEffect } from 'react';

import './Cards1.css';
import CardItem from '../CardItem';
import '../Navbar.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
export default function Services() {
  return (<>
  <div className='cards'>
      <h2>Meet The Team</h2>
      <br>
      </br>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/PKG1.jpeg'
              text='Prasanta Kumar Ghosh'
             
              path='/services'
            />
            <CardItem
              src='images/brown.jpg'
              text=''
            
              path='/services'
            />
             <CardItem
              src='images/brown.jpg'
              text=''
             
              path='/services'
            />
            
          </ul>
          <ul className='cards__items'>
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
          </ul>
        </div>
      </div>
    </div>
  <Footer />
  </>);
}
