//Assignment 1 - Jen MacDonald - 301000349 - Sep 28,2024
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './Style.css';

function App() 
{
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/projects">Projects</Link> | 
            <Link to="/services">Services</Link> | 
            <Link to="/contact">Contact</Link>
          </nav>
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
}


export default App;