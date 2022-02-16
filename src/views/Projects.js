import React from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';
import { Typography} from '@mui/material';

const Projects = () => {
    return (
        <div>
            <NavBar/>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Link to='/projects/c4_labs'>C4Labs</Link>
                <Link to='/projects/senior_project'>SU Senior Project</Link>
                <Link to='/projects/integrated_design'>Integrated Design 3</Link>
                <Link to='/projects/machine_elements'>Machine Elements</Link>
                <Link to='/projects/heat_transfer'>Heat Transfer</Link>
                <Link to='/projects/fluid_dynamics'>Fluid Dynamics</Link>
            </div>
        </div>
    )
}
export default Projects;