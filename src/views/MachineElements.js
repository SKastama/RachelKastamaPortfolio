import React, { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';

const MachineElements = () => {
    return (
        <div>
            <NavBar/>
            <h1>Machine Elements</h1>
            <p>Scissor Lift Group Project</p>
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
                <h1>Scissor Lift</h1>
                <p>
                    Wrote Python code to calculate beam stress when the 
                    scissor lift is at 45° and 15°. Developed sketches 
                    to solve equations to input into Python.
                </p>
            </div>
            <div>
                <h1>Scissor Lift Diagrams with Actuator</h1>
                <p>
                    Diagrams of scissor lift at 45 degrees and 15 
                    degrees. Both diagrams include the scissor lift 
                    actuator.
                </p>
            </div>
            <h1>Python Code Results for Part 1</h1>
            <h1>Part 1 Python Code 1</h1>
            <h1>Part 1 Python Code 2</h1>
            <h1>Part 1 Calculations 1</h1>
            <h1>Part 1 Calculations 2</h1>
            <h1>Part 1 Calculations 3</h1>
            <h1>Part 1 Calculations 4</h1>
            <h1>Part 1 Calculations 5</h1>
            <h1>Part 2 Calculations 1</h1>
            <h1>Part 2 Calculations 2</h1>
            <h1>Part 2 Calculations 3</h1>
            <h1>Part 2 Calculations 4</h1>
            <h1>Part 3 Calculations 1</h1>
            <h1>Part 3 Calculations 2</h1>
        </div>
    )
}
export default MachineElements;