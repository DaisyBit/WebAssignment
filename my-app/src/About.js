//Assignment 1 - Jen MacDonald - 301000349 - Sep 28,2024
import React from "react";
import './Style.css';
import meImage from './meImage.jpg';

function About()
{
    return(
        <div className="About-container">
            <h1>About Me</h1>
            <img src={meImage} alt="Pic of me" />

            <div className="Info-container">
                <p>
                    Hi. My name is Jenna (Jen) MacDonald. I am 23 years old and live in Brampton Ontario. I have a passion for programming especially game programming. I dream of being a 
                    professional game programmer and want to create games that'll inspire others as I have been inspired before.

                <br></br>
                <br></br>
                    <a href={require('./resume.pdf')} target="_blank" rel="noopener noreferrer">
                        Download My Resume
                    </a>
                </p>
            </div>
        </div>

    )
}

export default About;