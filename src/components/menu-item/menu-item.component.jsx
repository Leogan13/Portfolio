import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
 
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
      <div className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
        
        <div className='content1'>
            <h1 className='title'>View Code</h1>
        </div>
        <div className='content'>
            <h1 className='title'>View Demo</h1>
        </div>
       
   
  </div>
);

export default MenuItem;
