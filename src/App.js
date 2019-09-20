import React from 'react';
import Header from './components/header/header.component'
import LandingPage from './pages/landingPage/landingPage.component'
import './App.css';
import AboutPage from './pages/AboutPage/aboutPage.component'
import Directory from './components/directory/directory.component'



class App extends React.Component {




  render(){
  return (
      <div>
          <Header/>
          <LandingPage/>
          <AboutPage/>
          <Directory/>
         
      </div>
  );
  }
}

export default App;
