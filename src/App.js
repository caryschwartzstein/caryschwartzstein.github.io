import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent'
import Experience from './components/Experience'
import SkillsComponent from './components/SkillsComponent'
import AffiliatedComponent from './components/AffiliatedComponent'
import ContactComponent from './components/ContactComponent';
import StickyCirclesComponent from './components/StickyCirclesComponent';
import SignOffComponent from './components/SignOffComponent';



function App() {
  return (
    <div className="App">
      <StickyCirclesComponent/>
      <HeaderComponent/>
      <div id="ScrollTo">
        <AboutComponent />
      </div>
      <Experience/>
      <SkillsComponent/>
      <AffiliatedComponent/>
      <ContactComponent/>
      <SignOffComponent/>
    </div>
  );
}

export default App;
