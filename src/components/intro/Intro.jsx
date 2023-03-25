import React from 'react';
import Github from '../../img/icons8-github.svg';
import LinkedIn from '../../img/icons8-linkedin.svg';
import Twitter from '../../img/icons8-twitter.svg';
import Me from '../../img/boaz_me.png'
import FloatingDiv from '../floatingDiv/FloatingDiv';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello! I Am</span>
          <span>Geoffrey Aduda</span>
          <span>I'm a talented full-stack Web and UI/UX developer with vast experience with remote work.
            I am passionate about software development and testing. I am also passionate about
            Web3 and Blockchain Development. 
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/Aduda-Boaz"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/boaz-aduda/"><img src={LinkedIn} alt="" /></a>
          <a href="https://twitter.com/BoazAduda"><img src={Twitter} alt="" /></a>
        </div>
      </div>
      <div className="i-right">
        <div>
          <img src={Me} alt="" />
        </div>
        <div>
          <FloatingDiv />
        </div>
      </div>
    </div>
  )
}

export default Intro;