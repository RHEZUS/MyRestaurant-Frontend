import React from 'react';
import {SubHeading } from '../../components'


import {images } from '../../constants'
import './Header.css';



const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'style={{ 
    backgroundImage: `url(${images.welcome})`, 
      width: '100%',
      height: '100vh',
      backgroundSize: 'cover',
      // backgroundPosition: 'center'
    
    }} >
    <div className="app__wrapper_info">
      <SubHeading title='Chase the new flavour' />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>

      <p className="p__opensans" style={{ margin: '2rem 0' }}>Our menu, crafted by award-winning chefs, blends classic favorites with innovative creations using locally sourced ingredients. Whether for a romantic dinner or a festive gathering, Gusto offers an unforgettable dining experience in an elegant ambiance. Join us to discover the key to fine dining</p>
      <button type='button' className='custom__button'>Explore Menu</button>

    </div>
    <div className="app__wrapper_img">
    </div>
  </div>
);

export default Header;
