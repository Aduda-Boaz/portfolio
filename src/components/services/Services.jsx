import React from 'react';
import './Services.css';
import Design from '../../img/design.png';
import Development from '../../img/web-dev.png';
import Backend from '../../img/back_end.jpg';
import UX from '../../img/ui-ux.png';
import { AiFillCheckCircle } from 'react-icons/ai';

const Experience = () => {

  return (
    <section id="services">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <img src={Development} alt="frontend" className="skill__figure"/>
          <h2>Frontend Development</h2>
          <div className="skill__content">
            <article className="skill__details">
              <AiFillCheckCircle className="skill__icon"/>
              <div>
                <h5>HTML-5</h5>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <AiFillCheckCircle className="skill__icon"/>
              <div>
                <h5>CSS3</h5>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <AiFillCheckCircle className="skill__icon"/>
              <div>
                <h5>Sass</h5>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <AiFillCheckCircle className="skill__icon"/>
              <div>
                <h5>JavaScript</h5>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <AiFillCheckCircle className="skill__icon"/>
              <div>
                <h5>React</h5>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <AiFillCheckCircle className="skill__icon"/>
              <div>
                <h5>TypeScript</h5>
                <small>Experienced</small>
              </div>
            </article>            
          </div>
        </div>


        <div className="experience__backend">
          <img src={Backend} alt="frontend" className="skill__figure"/>
            <h2>Backend Development</h2>
          <div className="skill__content">
          <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Ruby</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Ruby on Rails</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>NodeJs</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>MongoDb</h5>
            <small>Basics</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Express</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Postgresql</h5>
            <small>Experienced</small>
          </div>
        </article> 
          </div>
        </div>

        <div className="experience__ui-ux">
          <img src={UX} alt="frontend" className="skill__figure"/>
          <h2>UI/UX</h2>
          <div className="skill__content">
          <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>User flows</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Usability testing</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>User Interface</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Visual design</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Agile</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Collaboration</h5>
            <small>Experienced</small>
          </div>
        </article> 
        </div>
        </div>

        <div className="experience__design">
          <img src={Design} alt="frontend" className="skill__figure"/>
            <h2>Design</h2>
          <div className="skill__content">
          <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Ruby</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Ruby on Rails</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>NodeJs</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>MongoDb</h5>
            <small>Basics</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Express</h5>
            <small>Experienced</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCheckCircle className="skill__icon"/>
          <div>
            <h5>Postgresql</h5>
            <small>Experienced</small>
          </div>
        </article> 
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
