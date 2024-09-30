import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import Jen from './Jen.png';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className='logo'>
         <img src={Jen} alt="Logo" />   
        </div>
        
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
