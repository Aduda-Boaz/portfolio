import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUserSwitch } from 'react-icons/ai';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { AiOutlineImport } from 'react-icons/ai';
import { AiOutlineContacts} from 'react-icons/ai';

const Navbar = () => {
  const [activeNav, setActiveNav ] = useState('#header');
 return (
    <nav>
      <a href="#header" onClick={()=> setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#intro" onClick={()=> setActiveNav('#intro')} className={activeNav === '#intro' ? 'active' : ''}><AiOutlineUserSwitch/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><AiOutlineCloudServer/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineImport/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Navbar;