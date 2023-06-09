import React from 'react';
import './Header.css';
import CardActions from './CardActions';
import Me from '../../img/boaz_me.png'
import HSocials from './HSocials';

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello! I am</h5>
        <h1>Boaz Geoffrey</h1>
        <h5 className='text-light'>FullStack Web Developer / UI/UX / Product Designer</h5>
        <CardActions />
        <HSocials />
        
        <div className="header__img">
          <img src={Me} alt="Boaz Geoffrey" />
        </div>       
        
        <a href="#contact" className="scroll__bar">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;