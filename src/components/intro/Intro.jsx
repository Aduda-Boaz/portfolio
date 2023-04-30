import React from 'react';
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
            Web3/Blockchain Development. 
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
      </div>
      <div className="i-right">
        <div style={{top: '-4%', left: '78%'}}>
       </div>
        <div style={{top: '18rem', left:'5rem'}}>
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro;
