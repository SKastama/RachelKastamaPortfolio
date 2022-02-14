import React, { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';

const About = () => {
    return (
        <div>
            <NavBar/>
            <h1>About</h1>
            <h3>Rachel Kastama</h3>
            <span>Mechanical Engineer</span>
            <p>
                I grew up in Puyallup Washington. I am a recent college 
                graduate from Seattle University. At Seattle University, 
                I obtained a Mechanical Engineering degree and a minor in 
                Mathematics. Throughout my education, I was a collegiate 
                athlete and competed in cross country and track for 
                Seattle University. Because of this, I had to develop 
                great time management skills to be able to balance my time 
                effectively.
            </p>
            <p>
                I've always wanted to be an engineer since I was young, and I 
                am interested in the design and manufacturing aspects of 
                engineering.
            </p>
        </div>
    )
}
export default About;