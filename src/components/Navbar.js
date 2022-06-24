import React, { Component } from 'react';
export default class Navbar extends Component {
  render() {
    return (
    <React.Fragment>
    <nav class="navbar"> 
        <div class="widthmax">
          <div class="symbol"><a href="#">Portfo<span>lio</span></a></div>
            <ul class="menu">
                <Link to="/">Home</Link>
                <Link to="/Skills-Projects">Skills/Projects</Link>
                <Link to="/Contact">Contact</Link>
             </ul>
        </div>
    </nav>
    </React.Fragment>
    );
  }
}
