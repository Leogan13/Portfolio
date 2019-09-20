import React from 'react';
import './aboutPage.styles.scss';

const AboutPage = (props, context) => {
 

  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About</h1>
        <div className="about-wrapper">
          <div className="about-content">
            
            <p>
            I Like building things and love trying to figure out how something works, those are the main reasons of why I love being a developer.
            
            </p>
            <p>
              I built this site <span className="highlight">from scratch</span>.
              By scratch, I mean <i>absolutely from scratch</i>{' '}
              <span className="highlight">
                without any UI library/framework
              </span>{' '}
              (except React though) and had so much fun along the way.
            </p>
            <p>
              React-Redux, Node.js, Ruby on Rails, Java, Spring Boot, Docker and
              AWS are the main tricks up my sleeve. I am also obsessed with making the web look pretty with SASS/CSS.
            </p>
            
          </div>
        </div>
      </div>

    </div>
  );
};



export default AboutPage;
