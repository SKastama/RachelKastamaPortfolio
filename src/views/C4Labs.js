import React from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';
import { Typography} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const C4Labs = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '2em'}}>
                    <img style={{ height: '20em'}} src={require('../images/c4Labs/C4Labs Logo.png')} alt='c4Logo'/>
                    <Typography variant='h2'>C4Labs</Typography>
                    <Typography variant='h4'>Engineering Internship</Typography>
                </div>
                <img style={{ height: '30em', width: 'inherit'}} src={require('../images/c4Labs/dice cropped.jpg')} alt='c41'/>
                <div sx={{ border: 1 }} style={{display: 'flex', flexDirection: 'row', margin: '3em'}}>
                    <div>
                        <img style={{ height: '30em'}} src={require('../images/c4Labs/iris.jpg')} alt='c42'/>
                    </div>
                    <div style={{padding: '2em'}}>
                        <Typography variant='h3'>Iris Dice Box</Typography>
                        <br/>
                        <Typography variant='h7'>
                            Designed the Iris Dice Box for roleplaying games. 
                            Created a unique solution to attaching the iris 
                            mechanism to the container. Device is intuitive and 
                            easy to use with a smooth rotary motion.
                        </Typography>
                    </div>
                </div>
                <div>
                    <h1>Iris Dice Box</h1>
                    <p>
                        Current design of Iris Dice Box. After shorter 
                        flathead screws are ordered and delivered, this will 
                        be the final design.
                    </p>
                    <img style={{ height: '10em'}} src={require('../images/c4Labs/iris.jpg')} alt='c42'/>
                </div>
                <div>
                    <h1>Iris Dice Box (open)</h1>
                    <p>
                        Iris Dice Box when open. A magnet holds the product 
                        open until rotated with a small amount of torque.
                    </p>
                    <img style={{ height: '10em'}} src={require('../images/c4Labs/diceOpen.jpg')} alt='c43'/>
                </div>
                <div>
                    <h1>Iris Dice Box (closed)</h1>
                    <p>
                        With a clockwise motion, the Iris Dice Box turns and 
                        closes shut. The Iris Dice Box has magnets that help 
                        it remain in the open or closed position.
                    </p>
                    <img style={{ height: '10em'}} src={require('../images/c4Labs/diceClosed.jpg')} alt='c44'/>
                </div>
                <div>
                    <h1>Open View with Dice</h1>
                    <p>
                        Holds a set of seven dice.
                    </p>
                    <img style={{ height: '10em'}} src={require('../images/c4Labs/orange dice.jpg')} alt='c45'/>
                </div>
                <div>
                    <h1>Iris Dice Box Dice Dividers</h1>
                    <p>
                        Created dice dividers to secure the dice, keep them 
                        organized, and to stop them from shuffling around.
                        The dice dividers have a ramp-like design to help aid 
                        in separating the dice.
                    </p>
                    <img style={{ height: '10em'}} src={require('../images/c4Labs/dice angled.jpg')} alt='c46'/>
                </div>
                <div>
                    <h1>Iris Dice Box in Motion</h1>
                    <p>
                        Clear Iris Dice Box prototype in motion.
                    </p>
                </div>
                <div>
                    <h1>Iris Mechanism Prototype 1</h1>
                    <p>
                        First prototype of the iris mechanism for the 
                        Iris Dice Box.
                    </p>
                    <img style={{ height: '10em'}} src={require('../images/c4Labs/Iris Dice Bo First Prototype.png')} alt='c47'/>
                </div>
                <div>
                    <h1>Prototype 1 and 2</h1>
                    <p>
                        After making prototype 1 (left), the size of 
                        prototype 2 (right) was scaled down to be able 
                        to fit in the palm of a person's hand. From 
                        prototype 2 onward, every version of the Iris 
                        Dice Box is this size.
                    </p>
                    <img style={{ height: '10em'}} src={require('../images/c4Labs/prototypes 1 and 2.jpg')} alt='c48'/>
                </div>
                <hr/>
                <img style={{ height: '30em'}} src={require('../images/c4Labs/20220106_135356_edited.jpg')} alt='c49'/>
                <div style={{display: 'flex', flexDirection: 'row', margin: '3em'}}>
                    <div>
                        <img style={{ height: '30em'}} src={require('../images/c4Labs/20220106_135356.jpg')} alt='c410'/>
                    </div>
                    <div style={{padding: '2em'}}>
                        <Typography variant='h3'>Assembly Jig</Typography>
                        <Typography variant='h7'>
                            Simplified and stream-lined production by developing an 
                            assembly jig. This reduced manufacturing errors by 
                            standardizing tolerances, creating fixed positions, and 
                            locking parts into place during the gluing process.
                        </Typography>
                    </div>
                </div>
                <h1>Final Version</h1>
                <img style={{ height: '30em'}} src={require('../images/c4Labs/final.jpg')} alt='c411'/>
                <h1>Final Version (with iris blades)</h1>
                <img style={{ height: '30em'}} src={require('../images/c4Labs/finalWBlades.jpg')} alt='c412'/>
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
                    <img style={{ height: '30em'}} src={require('../images/c4Labs/assemblyTopWBlades.jpg')} alt='c413'/>
                </div>
                <div>
                    <h1>Top View</h1>
                    <p>
                        The circle outlines seen in the photo (above the 
                        pistons) aids in positioning the pistons accurately, 
                        as the smaller circle outline is the same size as the 
                        part being glued.
                    </p>
                    <img style={{ height: '30em'}} src={require('../images/c4Labs/assemblyTop.jpg')} alt='c414'/>
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
                    <img style={{ height: '30em'}} src={require('../images/c4Labs/Assembly Jig process.png')} alt='c415'/>
                </div>
                <div>
                    <h1>Assembly Jig Initial Concept</h1>
                    <p>
                        First prototype of the part that holds and aligns the 
                        iris blade in the correct location while being glued.
                    </p>
                    <img style={{ height: '30em'}} src={require('../images/c4Labs/Iris Dice Box Assembly Jig First Prototype.png')} alt='c416'/>
                </div>
            </div>
        </div>
    )
}
export default C4Labs;