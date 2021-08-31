
import './App.css';
import React from "react"; 
import  Logo  from './styles/utils/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./pages/Navbar"
import Dogs from "./pages/Home"
import Cats from "./pages/About"
import Sheeps from "./pages/Contact"
import Goats from "./pages/Shop"
function App() {
  return (
    <div className="App">
      
      <img src={Logo} alt="Logo" />
      <Router> 
      <Navbar />
      <Switch>
        <Route path='/' exact component={Dogs} />
        <Route path='/cats' component={Cats} />
        <Route path='/sheeps' component={Sheeps} />
        <Route path='/goats' component={Goats} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
