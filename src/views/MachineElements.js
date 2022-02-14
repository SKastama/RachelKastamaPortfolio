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
                <h1>Sketches</h1>
                <p>
                    Materials:
                    1. Housing: Cast Acrylic Sheet, 12" x 48" x 1/8"
                    2. Window: Clear High-Strength UV-Resistant Acrylic, 6" x 6" x 1/8"
                    3. Stylus: Recycled PTFE, 7/8" Diameter
                    4. Screws: 18-8 Stainless Steel Pan Head Slotted Screws, Standard Head, M2 x 0.4 mm Thread, 5 mm Long
                    Manufacturer: McMaster-Carr
                </p>
            </div>
        </div>
    )
}
export default MachineElements;