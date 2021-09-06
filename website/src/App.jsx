
import './App.css';
import React from "react"; 

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      
      
        <Router> 
        <Navbar />
      
        <Switch>
          
          <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        
        <Route path='/shop' component={Shop} />
        
         </Switch>

         
       </Router>
       

    
    <Footer />
   


    </div>

    
  );
}

export default App;
