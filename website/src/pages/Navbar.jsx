import React from 'react';
import {  Link } from "react-router-dom";
import  Logo  from '../styles/utils/logo.png';

const Navbar= () =>{
  return (
		<header class="header">
		

  <section class="navigation" >
  <div class="nav-container">
    <div class="brand">
    <img src={Logo} alt="Logo" />
    </div>
    <nav>
    <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
       
        <li>
        <Link to="/shop">Shop</Link>
        </li>

        <li id="sho">
        <Link to="/sho" />
        </li>
      </ul>
    </nav>
  </div>

  <div>
  {/*Google Font - Work Sans*/}
  <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,700" rel="stylesheet" type="text/css" />
  <div className="container2">
    <div className="profile">
      <button className="profile__avatar" id="toggleProfile">
        <img src="https://www.iconninja.com/files/296/475/799/person-user-profile-male-man-avatar-account-icon.png" alt="Avatar" id="pic" /> 
      </button>
      <div className="profile__form">
        <div className="profile__fields">
          <div className="field">
            <input type="text" id="fieldUser" className="input" required pattern=".*\S.*" />
            <label htmlFor="fieldUser" className="label">Username</label>
          </div>
          <div className="field">
            <input type="password" id="fieldPassword" className="input" required pattern=".*\S.*" />
            <label htmlFor="fieldPassword" className="label">Password</label>
          </div>
          <div className="profile__footer">
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>




    </header>


    
  );
  

  
}
export default Navbar;