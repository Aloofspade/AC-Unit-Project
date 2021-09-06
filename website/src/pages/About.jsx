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
    <div className="column1">
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
    <div className="column1">
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

<main role="main">
  <section className="sec-intro" role="section">
    <img src="https://www.techweekeurope.co.uk/wp-content/uploads/2012/07/wifimountaindownload.jpg" alt />
    <h1 className="infotitle">Be Innovative!</h1>
  </section>
  <section className="sec-boxes" role="section">
    <adrticle className="box">
      <h1 className="infotitle">Open-minded</h1>
      <p className="pinfo">Every option should be explored and tried no matter how unpredictable, impossible, insane or ridiculous does it looks or sound.</p>
      <button className="button" type="button" role="button" value="MORE">More</button>
    </adrticle>
    <adrticle className="box">
      <h1 className="infotitle">Creative</h1>
      <p className="pinfo">Brainstorming, idea generation, playing sessions, note taking. You think you used everything? We will challenge your mind and its abilities to the limits.</p>
      <button className="button" type="button" role="button" value="MORE">More</button>
    </adrticle>
    <adrticle className="box">
      <h1 className="infotitle">Bold</h1>
      <p className="pinfo">Our methods and ideas are are not written or following any books, curriculums or rules. We consider ourselves rebels and we are proud of it.</p>
      <button className="button" type="button" role="button" value="MORE">More</button>
    </adrticle>
    <adrticle className="box">
      <h1 className="infotitle">Smart</h1>
      <p className="pinfo">Every project with innovation as a goal requires smart approach. Identify real problem first and look for the smartest and simplest solution later.</p>
      <button className="button" type="button" role="button" value="MORE">More</button>
    </adrticle>
  </section>
  <section className="sec-events" role="section">
    <hr />
    <h1 className="infotitle">Upcomming events</h1>
    <article>
      <h1 className="infotitle">Tire Technology Expo</h1>
      <p className="pinfo">Tire Technology Expo has grown in strength and stature every year since it was started in Europe 15 years ago. Visitors and exhibitors to the conference and exhibition staged in February 2014 universally praised it as the 'world's leading tire design and tire manufacturing event', noting in particular the outstanding quality of the conference papers and speakers, and the comprehensive extent of machinery manufacturers and suppliers who exhibited at the event.</p>
      <a className="link" href="#">more...</a>
    </article>
    <article>
      <h1 className="infotitle">Meteorology World Expo</h1>
      <p className="pinfo">Meteorological Technology World Expo is a truly international exhibition of the very latest climate, weather and hydro - meteorological forecasting, measurement and analysis technologies and service providers for a global community of key decision makers within the aviation industry, shipping companies, marine / port installations, airports, military operations, off-shore exploration companies, wind farm operators, met offices, agriculture operations and research institutes.</p>
      <a className="link" href="#">more...</a>
    </article>
    <article>
      <h1 className="infotitle">Wearable Tech Expo</h1>
      <p className="pinfo">See live demos, listen to case studies, speak with Wearable Tech Experts The first Wearable Tech Expo in Tokyo 2014. Key players from Japan, America and Europe announced their new products and attracted attention from all over the world. The next Wearable Tech Expo in Tokyo will be doubling in size and include Robotics and IoT. The main players in the wearable industry, human factor engineers, brain scientists, media providers and creators will discuss the future of wearable technology! </p>
      <a className="link" href="#">more...</a>
    </article>
    <article>
      <h1 className="infotitle">Space Tech Expo</h1>
      <p className="pinfo">Space Tech Expo is the West Coast's premier B2B space event for spacecraft, satellite, launch vehicle and space-related technologies. Taking place in Long Beach, the Space Tech Expo exhibition and conference brings together global decision-makers involved in the design, build and testing of spacecraft, satellite, launch vehicle and space-related technologies. Leading the West Coast space and satellite industry, Space Tech Expo is where end-users connect with solution providers.</p>
      <a className="link" href="#">more...</a>
    </article>
  </section>
  <section className="sec-projects" role="section">
    <hr />
    <h1 className="infotitle">Previous Projects</h1>
    <article>
      <h1 className="infotitle">Neural network for Google</h1>
      <p className="pinfo">People from Google approached us this January with offer to create new neural network for whole Google's ecosystem. This idea was very interesting and looked almost impossible at first glance. However, our engineers proved their expertise and built amazing autonomous platform. <a className="link" href="#">more...</a></p>
    </article>
    <article>
      <h1 className="infotitle">Faster operating system for Apple</h1>
      <p className="pinfo">For a years, since founding days of a company, Apple always worked with its own operating system. In October, this was about to change. Our company got chance to rewrite the history by creating brand new OS for Apple. It was very difficult and all our employees worked hard every day. <a className="link" href="#">more...</a></p>
    </article>
    <article>
      <h1 className="infotitle">Manufacturing technology for Intel</h1>
      <p className="pinfo">Intel has been manufacturing company for many years. They always used the latest technologies to achieve the best results with lowest costs. However, this was not enough. Intel decided to offer us something that could disrupt whole technology sector. <a className="link" href="#">more...</a></p>
    </article>
  </section>
  <section className="sec-standards" role="section">
    <hr />
    <h1 className="infotitle">Our Standards</h1>
    <article>
      <h1 className="infotitle">Excellence</h1>
      <p className="pinfo">Our goal is to give our customers the best solutions in highest aquality. Our employees strive for excellence and work hard to achieve it. Everything must work and be reliable. Great design must be both, aesthetic and functional. Product or service that pass these conditions will be everlasting.</p>
    </article>
    <article>
      <h1 className="infotitle">Uniqueness</h1>
      <p className="pinfo">Our mantra is to create new paths. We are not interested in copying others because we know, that if you want to succeed, you have to be different, unique. Our customers know that we create unique products and experience for them. This is the best way to differentiate us and our brand from the noise on market. Unique, different and proud.</p>
    </article>
  </section>
</main>
    </div>
  );
}
export default About;