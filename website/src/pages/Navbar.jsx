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
          <Link to="/cats">Cats</Link>
        </li>
        <li>
        <Link to="/sheeps">Sheep</Link>
        </li>
      
        <li>
        <Link to="/goats">Goats</Link>
        </li>
      </ul>
    </nav>
  </div>
</section>




    </header>


    
  );
  

  
}
export default Navbar;