import React from 'react'
import './header.styles.scss'
import {toElement as scrollToElement} from '../utils/scroll/scroll.utils';

class Header extends React.Component {

    
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 80,
      headerEl = document.getElementById("header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }



  render(){
    return(
        <nav id="header">
            <div className="menu">
              <div className="menu__item active" onClick={(e) => this.scrollToPage('.landing-page')}>
                Home
              </div>
              <div className="menu__item" onClick={(e) => this.scrollToPage('.about-page')}>
                About
              </div>
              <div className="menu__item" onClick={(e) => this.scrollToPage('.menu-items')}>
                Projects
              </div>
              <div className="menu__item">
                Resume
              </div>
            </div>
          </nav>
    )
  }

}

export default Header;