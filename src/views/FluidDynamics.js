import React, { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';

const FluidDynamics = () => {
    return (
        <div>
            <NavBar/>
            <h1>Fluid Dynamics</h1>
            <p>Water Fountain Group Project</p>
            <div>
                <h1>Project Goal</h1>
                <p>
                    For this project, we were tasked with designing 
                    and analyzing a water fountain, followed by finding 
                    the pump size, total head, system head, pump bhp, and 
                    NPSH.
                </p>
                <span>pdf</span>
                <span>pdf</span>
            </div>
            <div>
                <h1>Water Fountain Project</h1>
                <p>
                    Water fountain was created to have a trident-like 
                    design for the 3 water pipes. After making the design 
                    and dimensions of the pipe, we came up with the 
                    values for the flow rate, temperature, type of steel, 
                    and the diameter of the piping system. With these 
                    values, we solved for the pump size, total head, 
                    system head, pump bhp, and NPSH.
                </p>
            </div>
            <h1>Diagram of Water Fountain</h1>
            <h1>Calculations 1</h1>
            <h1>Calculations 2</h1>
        </div>
    )
}
export default FluidDynamics;