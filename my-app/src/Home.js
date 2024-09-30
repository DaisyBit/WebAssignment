//Assignment 1 - Jen MacDonald - 301000349 - Sep 28,2024
import React from "react";
import { Link } from 'react-router-dom';
import './Style.css';

function Home()
{
    return(
        <div className="Home-container">
            <h1> Welcome to my portfolio!</h1>

            <div className="Mission-container">
                <p>
                    As a young girl I was very intrested in video games and used to stand beside my dad watching him play games with his friends. Once I was old enough I started playing games myself and was heavily
                    drawn to the mechanics of the games like the secret areas in the Harry Potter games which would often be an unsuspecting painting or wall that you could actually walk through. From there I wanted
                    to create my own games. Going into highschool I took programming to learn how to code and ended up loving it and knew I found my path in life. My goal is to become a game programmer and inspire
                    other people, especially girls and women about the wonders and joy of programming and hopefully get more to join this field I've grown to have a strong love for.
                    <br></br>
                    <br>
                    </br>
                    Click here to learn more <Link to="/about">about me!</Link>
                </p>
            </div>
            
        </div>
    );
}

export default Home;