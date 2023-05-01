import React from 'react';
import './Intro.css';
import Me from '../../img/image_me.png'
import { BsPersonWorkspace } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { AiTwotoneFolderOpen } from 'react-icons/ai';

const Intro = () => {
  return (
    <section className="container intro" id='intro'>
      <h5>Get to know more</h5>
      <h2>ABOUT ME</h2>
      <div className="container intro__container">
        <div className="intro__about">
          <img src={Me} alt="me" />
        </div>
        <div className="intro__content">
          <div className="intro__cards">
            <article className="intro__card">
              <BsPersonWorkspace className="intro__icon"/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="intro__card">
              <FaUsers className="intro__icon"/>
              <h5>Clients</h5>
              <small>80+ Worldwide</small>
            </article>
            <article className="intro__card">
              <AiTwotoneFolderOpen className="intro__icon"/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>
            I am innovative, task-driven professional web design and developer
            with 3+ years of experience in the field. I have a strong passion for
            consistently identifying and implementing new technologies to maximize
            efficiency and productivity. I am proficient in developing databases,
            user interfaces, and back-end services. I have experience in writing
            and executing test plans, debugging, and documenting code.
            I am a quick learner and a team player.
          </p>
          <a href="#contact" className="button button-primary">Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default Intro;
