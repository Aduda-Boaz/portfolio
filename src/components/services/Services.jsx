import React from 'react';
import './Services.css';
import Card from '../card/Card';
import Design from '../../img/design.png';
import Development from '../../img/web-dev.png';
import UX from '../../img/ui-ux.png';
import { motion } from 'framer-motion';

const Services = () => {

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="mywork" id="services">
      {/* left-side */}
      <div className="awesome-works">
        <span>My Awesome</span>
        <span>Services</span>
        <span>I am innovative, task-driven professional web design and developer
        <br/> with 3+ years of experience in the field. I have a strong passion for <br/> consistently identifying
          and implementing new technologies to maximize <br/> efficiency and productivity. I am proficient in
          developing databases, <br/> user interfaces, and back-end services. I have experience in writing <br/> and
          executing test plans, debugging, and documenting code. <br/> I am a quick learner and a team player. 
        </span>
        <a href="#">
        <button className="button s-button">Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right-side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
          >
            <Card
              figure={Design}
              heading={"Design"}
              detail={"Figma, Photoshop, Adobe Illustrator, AdobeXD, Adobe InDesign"}
            />
          </motion.div> 
          <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "0.5rem" }}
          transition={transition}
          >
            <Card
              figure={Development}
              heading={"Developer"}
              detail={"JavaScript, React, NodeJs, Ruby on Rails, TypScript, Solidity"}
            />
          </motion.div>
          <motion.div
          initial={{ left: "20rem", top: "19rem" }}
          whileInView={{ left: "16rem" }}
          transition={transition}
          >
            <Card
              figure={UX}
              heading={"UI/UX Design"}
              detail={"Building the functionality and use cases of digital products such as mobile apps, websites, or software."}
            />
          </motion.div>   
      </div>
    </div>
  )
}

export default Services;
