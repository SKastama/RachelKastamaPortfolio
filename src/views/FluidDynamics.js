import React from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';

const FluidDynamics = () => {
    return (
        <div>
            <NavBar/>
            <img style={{ height: '20em'}} src={require('../images/seniorProject/SU Logo 2.png')} alt='suLogo'/>
            <h1>Fluid Dynamics</h1>
            <p>Water Fountain Group Project</p>
            <img style={{ height: '20em'}} src={require('../images/fluids/pic 5.png')} alt='fD1'/>
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
                <img style={{ height: '20em'}} src={require('../images/fluids/Screenshot 2021-12-30 170917.png')} alt='fD2'/>
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
            <img style={{ height: '20em'}} src={require('../images/fluids/Screenshot 2021-12-30 170917.png')} alt='fD2'/>
            <h1>Calculations 1</h1>
            <img style={{ height: '20em'}} src={require('../images/fluids/Work 1.png')} alt='fD3'/>
            <h1>Calculations 2</h1>
            <img style={{ height: '20em'}} src={require('../images/fluids/Work 2, 3, and 4.png')} alt='fD4'/>
        </div>
    )
}
export default FluidDynamics;