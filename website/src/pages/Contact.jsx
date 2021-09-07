import React from 'react';
import email from '../components/images/email.png';
import location from '../components/images/location.png';
import phone from '../components/images/phone.png';
import shape from '../components/images/shape.png';
const Contact = () =>{
  return (
  <div>
 
	
    <div className="container4">
  <span className="big-circle" />
  <img src={shape} className="square" alt />
  <div className="form">
    <div className="contact-info">
      <h3 className="title">Let's get in touch</h3>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        dolorum adipisci recusandae praesentium dicta!
      </p>
      <div className="info">
        <div className="information">
          <img src={location} className="icon" alt />
          <p>24710 W Dove Trail, Buckeye, AZ 85326</p>
        </div>
        <div className="information">
          <img src={email} className="icon" alt />
          <p>lorem@ipsum.com</p>
        </div>
        <div className="information">
          <img src={phone} className="icon" alt />
          <p>+16234745069</p>
        </div>
      </div>
      <div className="social-media">
        <p>Connect with us :</p>
        <div className="social-icons1">
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.linkedin.com">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
    <div className="contact-form">
      <span className="circle one" />
      <span className="circle two" />
      <form action="index.html" autoComplete="off">
        <h3 className="title">Contact us</h3>
        <div className="input-container">
          <input type="text" name="name" className="input" />
          <label htmlFor>Username</label>
          <span>Username</span>
        </div>
        <div className="input-container">
          <input type="email" name="email" className="input" />
          <label htmlFor>Email</label>
          <span>Email</span>
        </div>
        <div className="input-container">
          <input type="tel" name="phone" className="input" />
          <label htmlFor>Phone</label>
          <span>Phone</span>
        </div>
        <div className="input-container textarea">
          <textarea name="message" className="input" defaultValue={""} />
          <label htmlFor>Message</label>
          <span>Message</span>
        </div>
        <input type="submit" defaultValue="Send" className="btn" />
      </form>
    </div>
  </div>
</div>
	
</div>

  );
}
export default Contact;