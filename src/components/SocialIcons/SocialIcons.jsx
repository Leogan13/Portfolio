import React from 'react';
import './style.scss';
import { ReactComponent as Linkedin } from '../../components/utils/svg/linkedin.svg';
import { ReactComponent as Github } from '../../components/utils/svg/github-logo.svg';
const SocialIcons = (props, context) => {
  
  return (
    <div className="social-icons animate-icons text3">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Leogan13" ><i className="fab fa-github"><Github/></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dineshpandiyan" ><i className="fab fa-linkedin"><Linkedin/></i></a>
    </div>
  );
};


export default SocialIcons;