import React, { Component } from 'react';
import NavBar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import portfolioData from './portfolioData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar portfolioData={portfolioData}/>
        <About portfolioData={portfolioData}/>
        <Skills-Projects portfolioData={portfolioData}/>
        <Contact portfolioData={portfolioData}/>
      </div>
    );
  }
}

export default App;