import React from 'react';
import './Services.css';
import Design from '../../img/design.png';
import Development from '../../img/web-dev.png';
import UX from '../../img/ui-ux.png';

const Services = () => {
  return (
    <div className="mywork">
      {/* left-side */}
      <div className="awesome-works">
        <span>My Awesome</span>
        <span>Services</span>
        <span>I am innovative, task-driven professional web design and developer
        <br/> with 3+ years of experience in the field. I have a strong passion for <br/> consistently identifying
          and implementing new technologies to maximize <br/> efficiency and productivity. I am proficient in
          developing databases, <br/> user interfaces, and back-end services. I am also experienced in writing <br/> and
          executing test plans, debugging, and documenting code. <br/> I am a quick learner and a team player. 
        </span>
        <button className="button s-button">Download Resume</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right-side */}
      <div className="cards">
        All my services goes here     
      </div>
    </div>
  )
}

export default Services;