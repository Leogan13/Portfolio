import React from 'react';
import SocialIcons from '../../components/SocialIcons/SocialIcons.jsx';
import './landingPage.styles.scss'



const LandingPage = () =>{

    return (
   
        <div  className="landing-page">
          <main >
            <div className="intro-wrapper">
              <div className="intro-name ">Hello, I'm Leonel</div>
              <div className="tagline ">
                Web Developer  
              </div>
              <SocialIcons/>
            </div>
          </main>
        </div>
     
      );


}


export default LandingPage;