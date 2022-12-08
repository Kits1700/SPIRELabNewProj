import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>New Project Details</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/c2.jpg'
              text=''
              label='Know More'
              path='/services'
            />
            <CardItem
              src='images/c2.jpg'
              text=''
              label='Know More'
              path='/services'
            />
             <CardItem
              src='images/c2.jpg'
              text=''
              label='Know More'
              path='/services'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/c1.jpg'
              text='Lorem Ipsum Lorem Ipsum Lorem Ipsum'
              label='Know More'
              path='/services'
            />
            <CardItem
              src='images/c1.jpg'
              text='Lorem Ipsum Lorem Ipsum Lorem Ipsum'
              label='Know More'
              path='/products'
            />
            <CardItem
              src='images/c1.jpg'
              text=''
              label='Know More'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
