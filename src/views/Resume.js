import React, {useState} from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ReactPlayer from 'react-player';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    {
        label: 'Iris Mechanism Prototype 1',
        imgPath: require('../images/c4Labs/Iris Dice Bo First Prototype.png'),
        description: 'First prototype of the iris mechanism for the Iris Dice Box.'
    },
    {
        label: 'Prototype 1 and 2',
        imgPath: require('../images/c4Labs/prototypes 1 and 2.jpg'),
        description: 'After making prototype 1 (left), the size of prototype 2 (right) was scaled down to be able to fit in the palm of a person`s hand. From prototype 2 onward, every version of the Iris Dice Box is this size.'
    }
];

const Resume = () => {
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
        <div>
            <NavBar/>
            <h1>Rachel Kastama's Resume</h1>
            <h1>Download</h1>
            <Box style={{ margin: '3em', width: '100%'}}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                    }}
                >
                    <Typography>{images[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                            <div >
                                <Box
                                    component='img'
                                    sx={{
                                    maxHeight: 400,
                                    display: 'block',
                                    maxWidth: 500,
                                    overflow: 'hidden',
                                    width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                                <p>{step.description}</p>
                            </div>
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
        </div>
    )
}
export default Resume;