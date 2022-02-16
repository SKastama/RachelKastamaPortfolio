import React from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Link to='/projects'>View Projects</Link>
        </div>
    )
}
export default Home;