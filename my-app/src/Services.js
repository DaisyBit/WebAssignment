//Assignment 1 - Jen MacDonald - 301000349 - Sep 28,2024
import React from "react";
import './Style.css';
import service1Image from './service1Image.png';
import service2Image from './service2Image.png';
import service3Image from './service3Image.png';

function Services() {
  return (
    <div className="Services-container">
      <h1>Services</h1>

      <div className="ServInfo-container">
        <ul>
          <div className="Service">
        <img src={service1Image} alt="Service 1" />
          <li>Web Development</li>
          </div>

          <div className="Service">
          <img src={service2Image} alt="Service 2" />
          <li>Game Development</li>
          </div>

          <div className="Service">
          <img src={service3Image} alt="Service 3" />
          <li>General Programming</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Services;
