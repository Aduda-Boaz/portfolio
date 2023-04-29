import React from 'react';
import Resume from './Resume_Boaz.pdf';

const CardActions = () => {
  return (
    <div className="c-actions">
    <a href={Resume} download className='button'>Download CV</a>
    <a href="#Contact" className='button button-primary'>Let's Chat</a>
    </div>
  )
}

export default CardActions;