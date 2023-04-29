import React from 'react';
import './Header.css';
import CardActions from './CardActions';
import Me from '../../img/boaz_me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I am</h5>
        <h1>Boaz Geoffrey</h1>
        <h5 className='text-light'>FullStack Developer (React/RoR)</h5>
        <CardActions />
        
        <div className="header__img">
          <img src={Me} alt="Boaz Geoffrey" />
        </div>
        
      </div>
    </header>
  )
}

export default Header;