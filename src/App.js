import React, { Component } from 'react';
import NavBar from './components/Header';
import About from './components/About';
import Contact from './components/ContactUs';
import Footer from './components/Footer';
import portfolioData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar portfolioData={portfolioData}/>
        <About portfolioData={portfolioData}/>
        <Skills portfolioData={portfolioData}/>
        <Projects portfolioData={portfolioData}/>
        <Contact portfolioData={resumeData}/>
        <Footer portfolioData={resumeData}/>
      </div>
    );
  }
}

export default App;