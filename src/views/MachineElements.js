import React from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';

const MachineElements = () => {
    return (
        <div>
            <NavBar/>
            <img style={{ height: '20em'}} src={require('../images/seniorProject/SU Logo 2.png')} alt='suLogo'/>
            <h1>Machine Elements</h1>
            <p>Scissor Lift Group Project</p>
            <img style={{ height: '20em'}} src={require('../images/machineElements/pic 6.png')} alt='mE1'/>
            <div>
                <h1>Project Goal</h1>
                <p>
                    Task was to design a single stage scissor lift table 
                    which can raise a maximum load of 1000lb by at least 2 
                    ft. The dimensions of the scissor lift platform were 2 ft 
                    x 4 ft. A hydraulic actuator is attached to one of the 
                    scissor lift’s beams and can raise the platform.
                    Part 1: Design a sketch, conduct a rough static analysis, 
                    and solve force calculations when scissor lift is at 
                    different angles.
                    Part 2: Failure analysis.
                    Part 3: Final report (including fatigue design and design 
                    against buckling).
                </p>
                <span>pdf</span>
            </div>
            <div>
                <img style={{ height: '20em'}} src={require('../images/machineElements/pic 8.png')} alt='mE2'/>
                <h1>Scissor Lift</h1>
                <p>
                    Wrote Python code to calculate beam stress when the 
                    scissor lift is at 45° and 15°. Developed sketches 
                    to solve equations to input into Python.
                </p>
            </div>
            <div>
                <img style={{ height: '20em'}} src={require('../images/machineElements/Scissor lift sketch.png')} alt='mE3'/>
                <h1>Scissor Lift Diagrams with Actuator</h1>
                <p>
                    Diagrams of scissor lift at 45 degrees and 15 
                    degrees. Both diagrams include the scissor lift 
                    actuator.
                </p>
            </div>
            <h1>Python Code Results for Part 1</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/Elements results 15 new.JPG')} alt='mE4'/>
            <h1>Part 1 Python Code 1</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/C 1.JPG')} alt='mE5'/>
            <h1>Part 1 Python Code 2</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/C 2.JPG')} alt='mE6'/>
            <h1>Part 1 Calculations 1</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/work 1.jpg')} alt='mE7'/>
            <h1>Part 1 Calculations 2</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/work 2.png')} alt='mE8'/>
            <h1>Part 1 Calculations 3</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/work 3.png')} alt='mE9'/>
            <h1>Part 1 Calculations 4</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/work 4.png')} alt='mE10'/>
            <h1>Part 1 Calculations 5</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/work 5.jpg')} alt='mE11'/>
            <h1>Part 2 Calculations 1</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/Work 6.jpg')} alt='mE12'/>
            <h1>Part 2 Calculations 2</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/Work 7.png')} alt='mE13'/>
            <h1>Part 2 Calculations 3</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/work 8.png')} alt='mE14'/>
            <h1>Part 2 Calculations 4</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/work 9.png')} alt='mE15'/>
            <h1>Part 3 Calculations 1</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/work 10.png')} alt='mE16'/>
            <h1>Part 3 Calculations 2</h1>
            <img style={{ height: '20em'}} src={require('../images/machineElements/work 11.png')} alt='mE17'/>
        </div>
    )
}
export default MachineElements;