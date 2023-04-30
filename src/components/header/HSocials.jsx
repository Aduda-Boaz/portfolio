import React from 'react';
import Github from '../../img/icons8-github.svg';
import LinkedIn from '../../img/icons8-linkedin.svg';
import Twitter from '../../img/icons8-twitter.svg';

const HSocials = () => {
  return (
    <div className="i-icons">
      <a href="https://github.com/Aduda-Boaz" target='_blank' rel="noreferrer"><img src={Github} alt="" /></a>
      <a href="https://www.linkedin.com/in/boaz-aduda/" target='_blank' rel='noreferrer'><img src={LinkedIn} alt="" /></a>
      <a href="https://twitter.com/BoazAduda" target='_blank' rel='noreferrer'><img src={Twitter} alt="" /></a>    
    </div>
  )
}

export default HSocials;