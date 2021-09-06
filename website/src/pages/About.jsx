import React from 'react';
import ceo from '../components/images/ceo.jpg'
import artdirector from '../components/images/artdirector.jpg';
import designer from '../components/images/designer.jpg';

const About = () =>{
  return (
    <div>
      <div className="about">
  <div className="about-section">
    <h1 className="pabout">About Us Page</h1>
    <p className="pabout">Some text about who we are and what we do.</p>
    <p className="pabout">Resize the browser window to see that this page is responsive by the way.</p>
  </div>
  <h2 style={{"-webkit-text-align":"center","text-align":"center", "fontFamily":"italic"}}>Our Team</h2>
  <div className="row">
    <div className="column1">
      <div className="card">
        <img src={ceo} alt="Jane" style={{"width":"100%", "height":"100%"}} />
        <div className="container3">
          <h2>John Doe</h2>
          <p className="title1">CEO &amp; Founder</p>
          <p className="pabout">Some text that describes me lorem ipsum ipsum lorem.</p>
          <p className="pabout">john@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <img src={artdirector} alt="Mike" style={{"width":"100%", "height":"100%"}} />
        <div className="container3">
          <h2>Mike Ross</h2>
          <p className="title1">Art Director</p>
          <p className="pabout">Some text that describes me lorem ipsum ipsum lorem.</p>
          <p className="pabout">mike@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <img src={designer} alt="John" style={{"width":"100%", "height":"100%"}} />
        <div className="container3">
          <h2>Jane Madan</h2>
          <p className="title1">Designer</p>
          <p className="pabout">Some text that describes me lorem ipsum ipsum lorem.</p>
          <p className="pabout">jane@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
export default About;