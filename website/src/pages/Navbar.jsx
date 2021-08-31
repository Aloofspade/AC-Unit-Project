import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
		<header class="header">
		
  <div class="mid">
		<ul class="navbar">
			 <li>
      <Link to="/">Dogs</Link>
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
   
  </div>


    </header>
  );
}
export default Navbar;