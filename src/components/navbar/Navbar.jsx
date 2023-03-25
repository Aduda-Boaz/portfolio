import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-logo">Geoffrey</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>About</li>
            <li>Work</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="n-button button">Say Hello!</button>
      </div>
    </div>
  )
}

export default Navbar;