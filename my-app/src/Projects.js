//Assignment 1 - Jen MacDonald - 301000349 - Sep 28,2024
import React from "react";
import './Style.css';
import project1Image from './project1Image.png';
import project2Image from './project2Image.png';
import project3Image from './project3Image.png';

function Projects() {
  return (
    <div className="Projects-container">
      <h1>My Projects</h1>

      <div className="project">
      <img src={project1Image} alt="Project 1" />
        <div>
          <h3>Project 1: Portfolio Website</h3>
          <p>Role: Web Developer</p>
          <p>Description: Built a personal portfolio website using React that I am creating (the one you are currently viewing).</p>
        </div>
      </div>

      <div className="project">
      <img src={project2Image} alt="Project 2" />
        <div>
          <h3>Project 2: Caverns of Chaos</h3>
          <p>Role: Developer and programmer</p>
          <p>Description: Developed and programmed and platformer game with 5 complete levels.</p>
        </div>
      </div>

      <div className="project">
        <img src={project3Image} alt="Project 3" />
        <div>
          <h3>Project 3: Relator Website Project</h3>
          <p>Role: Developer and designer</p>
          <p>Description: Created a website for a made up realator including links to house listings and a contact page.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
