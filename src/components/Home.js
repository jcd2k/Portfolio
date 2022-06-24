import React, { Component } from 'react';
export default class Home extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
        <section class="home" id="home">
        <div class="widthmax">
           <div class="home-content">
                <div>
                    <img id="headshot" src="assets\images\Headshot-1.jpg" alt="Josh-Headshot"></img>
                </div>
            <br></br>
                <div>
                    <text>Joshua Dominguez</text>
                </div>
            </div>
        </div>
    
        <div class="about-content">
            <h3 class="title">About Me</h3>
            <div>
            <h5 class="text">
                {portfolioData.About}
            </h5>
            <br></br>
             </div>
        </div>
    </section>
    );
  }
}