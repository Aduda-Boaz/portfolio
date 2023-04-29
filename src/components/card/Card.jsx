import React from 'react';
import './Card.css';

const Card = ({figure, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}>
      <img src={figure} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  )
};

export default Card;
