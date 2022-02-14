import React, { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';

const C4Labs = () => {
    return (
        <div>
            <NavBar/>
            <h1>C4Labs</h1>
            <p>Engineering Internship</p>
            <div>
                <h1>Iris Dice Box (Card)</h1>
                <p>
                    Designed the Iris Dice Box for roleplaying games. 
                    Created a unique solution to attaching the iris 
                    mechanism to the container. Device is intuitive and 
                    easy to use with a smooth rotary motion.
                </p>
            </div>
            <div>
                <h1>Iris Dice Box</h1>
                <p>
                    Current design of Iris Dice Box. After shorter 
                    flathead screws are ordered and delivered, this will 
                    be the final design.
                </p>
            </div>
            <div>
                <h1>Iris Dice Box (open)</h1>
                <p>
                    Iris Dice Box when open. A magnet holds the product 
                    open until rotated with a small amount of torque.
                </p>
            </div>
            <div>
                <h1>Iris Dice Box (closed)</h1>
                <p>
                    With a clockwise motion, the Iris Dice Box turns and 
                    closes shut. The Iris Dice Box has magnets that help 
                    it remain in the open or closed position.
                </p>
            </div>
            <div>
                <h1>Open View with Dice</h1>
                <p>
                    Holds a set of seven dice.
                </p>
            </div>
            <div>
                <h1>Iris Dice Box Dice Dividers</h1>
                <p>
                    Created dice dividers to secure the dice, keep them 
                    organized, and to stop them from shuffling around.
                    The dice dividers have a ramp-like design to help aid 
                    in separating the dice.
                </p>
            </div>
            <div>
                <h1>Iris Dice Box in Motion</h1>
                <p>
                    Clear Iris Dice Box prototype in motion.
                </p>
            </div>
            <hr/>
            <div>
                <h1>Assembly Jig</h1>
                <p>
                    Simplified and stream-lined production by developing an 
                    assembly jig. This reduced manufacturing errors by 
                    standardizing tolerances, creating fixed positions, and 
                    locking parts into place during the gluing process.
                </p>
            </div>
            <div>
                <h1>Assembly Jig</h1>
                <p>
                    Simplified and stream-lined production by developing an 
                    assembly jig. This reduced manufacturing errors by 
                    standardizing tolerances, creating fixed positions, and 
                    locking parts into place during the gluing process.
                </p>
            </div>
            <h1>Final Version</h1>
            <h1>Final Version (with iris blades)</h1>
            <div>
                <h1>Top View (with iris blades)</h1>
                <p>
                    The circle outlines on the assembly jig showcase where 
                    the part will be glued onto the iris blade (red). The 
                    location glued changes depending on which side of the 
                    iris blade (red) the part is being attached, with the 
                    white side being where the top of the iris blade is 
                    glued, and the green side being where the bottom is 
                    glued. The two sides of the assembly jig are different 
                    colors to help aid those involved in manufacturing from 
                    being confused.
                </p>
            </div>
            <div>
                <h1>Top View</h1>
                <p>
                    The circle outlines seen in the photo (above the 
                    pistons) aids in positioning the pistons accurately, 
                    as the smaller circle outline is the same size as the 
                    part being glued.
                </p>
            </div>
            <div>
                <h1>Assembly Jig Process</h1>
                <p>
                    From top to bottom:
                    1. Part is placed in lowered piston. Drop of glue is 
                    placed on the part.
                    2. Piston is raised to glue part to iris blade (red). 
                    Pressure from the piston holds the part and iris 
                    blade (red) in place. 3. Piston is lowered after 30 
                    seconds when the glue is dry.
                </p>
            </div>
            <div>
                <h1>Assembly Jig Initial Concept</h1>
                <p>
                    First prototype of the part that holds and aligns the 
                    iris blade in the correct location while being glued.
                </p>
            </div>
        </div>
    )
}
export default C4Labs;