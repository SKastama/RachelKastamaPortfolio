import React, {useState} from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';
import { Box, Button, Container, Grid, Paper, Typography} from '@mui/material';
import ReactPlayer from 'react-player';
import { minHeight } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = SwipeableViews;

const images = [
    {
        label: 'Iris Dice Box',
        imgPath: require('../images/c4Labs/iris.jpg'),
        description: 'Current design of Iris Dice Box. After shorter flathead screws are ordered and delivered, this will be the final design.'
    },
    {
        label: 'Iris Dice Box (open)',
        imgPath: require('../images/c4Labs/diceOpen.jpg'),
        description: 'Iris Dice Box when open. A magnet holds the product open until rotated with a small amount of torque.'
    },
    {
        label: 'Iris Dice Box (closed)',
        imgPath: require('../images/c4Labs/diceClosed.jpg'),
        description: 'With a clockwise motion, the Iris Dice Box turns and closes shut. The Iris Dice Box has magnets that help it remain in the open or closed position.'
    },
    {
        label: 'Open View with Dice',
        imgPath: require('../images/c4Labs/orange dice.jpg'),
        description: 'Holds a set of seven dice.'
    },
    {
        label: 'Iris Dice Box Dice Dividers',
        imgPath: require('../images/c4Labs/dice angled.jpg'),
        description: 'Created dice dividers to secure the dice, keep them organized, and to stop them from shuffling around. The dice dividers have a ramp-like design to help aid in separating the dice.'
    },
    // {
    //     label: 'Iris Mechanism Prototype 1',
    //     imgPath: require('../images/c4Labs/Iris Dice Bo First Prototype.png'),
    //     description: 'First prototype of the iris mechanism for the Iris Dice Box.'
    // },
    {
        label: 'Prototype 1 and 2',
        imgPath: require('../images/c4Labs/prototypes 1 and 2.jpg'),
        description: 'After making prototype 1 (left), the size of prototype 2 (right) was scaled down to be able to fit in the palm of a person`s hand. From prototype 2 onward, every version of the Iris Dice Box is this size.'
    }
];


const C4Labs = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <Box bgcolor='primary.light'>
            <NavBar/>
            <Box>
                <Grid contianer sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', margin: '2em' }}>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component='img'
                            sx={{
                            height: '15em',
                            overflow: 'hidden',
                            borderRadius: '100%'
                            }}
                            src={require('../images/c4Labs/C4Labs Logo 6_edited.jpg')}
                            alt='c4Logo'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h2' color='common.white'>C4Labs</Typography>
                        <Typography variant='h4' color='common.white'>Engineering Internship</Typography>
                    </Grid>
                </Grid>
                <img style={{ width: '100%'}} src={require('../images/c4Labs/dice cropped.jpg')} alt='c41'/>

                <Box sx={{ margin: '3em', minWidth: 950}}>
                    <Grid container sx={{padding: '2em'}}>
                        <Grid item xs={6}>
                            <Box
                                component='img'
                                sx={{
                                width: '100%',
                                height: '100%',
                                overflow: 'hidden',
                                minWidth: 400
                                }}
                                src={require('../images/c4Labs/iris copy.jpg')}
                                alt='c42'
                            />
                        </Grid>
                        <Grid item xs={6} bgcolor='#fefefe' sx={{paddingY: '6em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box sx={{width: '20em', lineHeight: 2, maxHeight: '43em'}}>
                                <Typography variant='h2' color='primary.light'>Iris Dice Box</Typography>
                                <br/>
                                <Typography variant='h7' color='primary.light'>
                                    Designed the Iris Dice Box for roleplaying games. 
                                    Created a unique solution to attaching the iris 
                                    mechanism to the container. Device is intuitive and 
                                    easy to use with a smooth rotary motion.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                
                <Box sx={{ width: 'auto', margin: '3em', border: 1}}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                <Grid container sx={{ display: 'flex', padding: '2em'}}>
                                    <Grid item xs={7}>
                                        <Box
                                            component='img'
                                            sx={{
                                            width: '100%',
                                            overflow: 'hidden',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                            onMouseEnter={handleMouseEnter}
                                        />
                                    </Grid>
                                    {/* <Grid item xs={5} padding={2}>
                                        <Typography variant='h3'>{step.label}</Typography>
                                        <br/>
                                        <Typography variant='h6'>{step.description}</Typography>
                                    </Grid> */}
                                </Grid>
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}>
                                Next
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                Back
                            </Button>
                        }
                    />
                </Box>
                
                <div>
                    <h1>Iris Dice Box in Motion</h1>
                    <p>
                        Clear Iris Dice Box prototype in motion.
                    </p>
                    <ReactPlayer 
                        url='../videos/20211110_134455.mp4'
                        width='50%'
                        controls = {true}
                    />
                </div>

                <img style={{ width: '100%'}} src={require('../images/c4Labs/20220106_135356_edited1.jpg')} alt='c49'/>

                <Box sx={{ margin: '3em', minWidth: 950}}>
                    <Grid container sx={{padding: '2em'}}>
                        <Grid item xs={6}>
                            <Box
                                component='img'
                                sx={{
                                width: '100%',
                                height: '100%',
                                overflow: 'hidden',
                                minWidth: 400
                                }}
                                src={require('../images/c4Labs/20220106_135356.jpg')}
                                alt='c42'
                            />
                        </Grid>
                        <Grid item xs={6} bgcolor='#fefefe' sx={{paddingY: '6em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box sx={{width: '20em', lineHeight: 2, maxHeight: '43em'}}>
                                <Typography variant='h2' color='primary.light'>Assembly Jig</Typography>
                                <br/>
                                <Typography variant='h7' color='primary.light'>
                                    Simplified and stream-lined production by developing an 
                                    assembly jig. This reduced manufacturing errors by 
                                    standardizing tolerances, creating fixed positions, and 
                                    locking parts into place during the gluing process.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                
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
            </Box>
        </Box>
    )
}
export default C4Labs;