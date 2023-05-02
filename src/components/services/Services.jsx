import React from 'react';
import './Services.css';
import Design from '../../img/design.png';
import Development from '../../img/web-dev.png';
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
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article>
              <AiFillCheckCircle />
              <h3>HTML-5</h3>
              <small className="--color-primary">Experienced</small>
            </article>
            <article>
              <AiFillCheckCircle />
              <h3>CSS3</h3>
              <small className="--color-primary">Intermediate</small>
            </article>
            <article>
              <AiFillCheckCircle />
              <h3>Bootstrap</h3>
              <small className="--color-primary">Experienced</small>
            </article>
            <article>
              <AiFillCheckCircle />
              <h3>Sass</h3>
              <small className="--color-primary">Experienced</small>
            </article>
            <article>
              <AiFillCheckCircle />
              <h3>JavaScript</h3>
              <small className="--color-primary">Experienced</small>
            </article>
            <article>
              <AiFillCheckCircle />
              <h3>React</h3>
              <small className="--color-primary">Experienced</small>
            </article>
            <article>
              <AiFillCheckCircle />
              <h3>Redux</h3>
              <small className="--color-primary">Experienced</small>
            </article>
            <article>
              <AiFillCheckCircle />
              <h3>TypeScript</h3>
              <small className="--color-primary">Experienced</small>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        </div>

        <div className="experience__ui-ux">
        </div>

        <div className="experience__design">
        </div>
      </div>

      {/* right-side */}
      <div >
          
      </div>
    </section>
  )
}

export default Experience;
