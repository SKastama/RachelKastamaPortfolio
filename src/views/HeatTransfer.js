import React, { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';

const HeatTransfer = () => {
    return (
        <div>
            <NavBar/>
            <h1>Heat Transfer</h1>
            <p>Fin Array Analysis</p>
            <div>
                <h1>Project Goal</h1>
                <p>
                    Objective was to evaluate the effectiveness of a fin 
                    array design on a silicon chip. The details about the 
                    chip, motherboard and original fin array design were 
                    all given to us. The chip was assumed to be 
                    relatively thin and did not impact the overall 
                    thickness of the board. The next task was to propose 
                    a new fin array design that outperforms the original 
                    design. The length (L) of the fins and number of fins 
                    needed to be the same to compare to the original 
                    design, but we were able to choose a different fin 
                    shape and/or size.
                </p>
                <span>pdf</span>
            </div>
            <div>
                <h1>Fin Array Analysis</h1>
                <p>
                    The original design had the cylinder shaped copper 
                    pin fins with a diameter of 1mm and the length of 
                    10mm. My improved design had rectangular copper pin 
                    fins that had a width of 1mm and the fin length of 
                    20mm. All other aspects of the design stayed the 
                    same, only the fins changed. After solving 
                    calculations for both versions, my improved design 
                    was better as it had more surface area than the 
                    original, vastly increasing the heat transfer of the 
                    device.
                </p>
            </div>
            <h1>Project Overview</h1>
            <h1>Table 1: Evaluated Values for Original Design</h1>
            <div>
                <h1>Table 2: Comparing the Original vs the Improved Design</h1>
                <p>
                    Comparing the original fin design to the improved fin design.
                </p>
            </div>
        </div>
    )
}
export default HeatTransfer;