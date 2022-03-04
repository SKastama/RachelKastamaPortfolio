import React, { useState } from 'react';
import NavBar from './NavBar.js';
import { Box, Button, Grid, Typography} from '@mui/material';
import ReactPlayer from 'react-player';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = SwipeableViews;

const images = [
    {
        label: 'Catenary System with Two Tensorex',
        imgPath: require('../images/seniorProject/Catenary system diagram.png'),
        description: ''
    },
    {
        label: 'Mathematical Modeling of Overhead Wires',
        imgPath: require('../images/seniorProject/Overhead wires modeling before and after.png'),
        description: 'Simplified free body diagram of the catenary system, divided into the Tensorex (left), and the wire as a mass spring damper system (right).'
    },
    {
        label: 'Equations of Motion',
        imgPath: require('../images/seniorProject/Screenshot 2022-01-03 193844.png'),
        description: 'The equations of motion for this system are the Tensorex equation (left), and the wire as a mass spring damper system equation (right). With these two equations of motion, we used the arc length formula of the length (x) equals radius (r) multiplied by the angle of the Tensorex to combine both models into two transfer functions. Used transfer functions to model the behavior of the system using differential equations with a direct input and output.'
    },
    {
        label: 'Transfer Functions',
        imgPath: require('../images/seniorProject/Graph Equations.png'),
        description: 'Combining the equations of motion from the Tensorex equation, and the wire as a mass spring damper system equation, we created two transfer functions that were used to model the behavior. The first transfer function is the Angle of Rotation vs Temperature, where the input is the temperature of the wire and the output is the angle of rotation of the Tensorex. The second transfer function is Force vs Temperature, where the input is the temperature of the wire and the output is the force of the Tensorex. After this we made graphs of these equations.'
    },
    {
        label: 'Variable Radius of Rotation Graph',
        imgPath: require('../images/seniorProject/displacement graph.png'),
        description: 'This is a graph showing rotation of our system with various changes in temperature. - The blue line represents a temperature change as if it changed one degree suddenly. With its whip-like motion we see that the system is underdamped, and even with the large fluctuations we are still within 1%. - The red line at the top represents a temperature gradient, this was calculated from weather data here in Seattle. It shows the change in temperature from a cool night to a warm day. This slight temperature change affects the rotation in the system very minimally, this is why the red line is hardly moving in the graph.'
    },
    {
        label: 'Variable Radius for Force',
        imgPath: require('../images/seniorProject/force graph.png'),
        description: 'This is a graph showing the force of our system with various changes in temperature. - The blue line represents the sudden change of one degree again, and we see a similar oscillation as we had in the previous graph. - The red line represents the temperature gradient, while previously we had a small slope of a line, now we see the force remains nearly constant around 3300 lb. How this affects us in the real world, if the temperature changes quickly the force is not constant, as a counterbalance would be, but as long as the temperature changes realistically throughout the day the force remains nearly constant.'
    }
];

const SeniorProject = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [showText, setShowText] = useState(false);
    const maxSteps= images.length;
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const handleMouseEnter = e => {
        setShowText(true)
    }
    const handleMouseLeave = e => {
        setShowText(false)
    }


    return (
        <Box bgcolor='primary.light' sx={{minWidth: 925}}>
            <NavBar/>
            <Box sx={{ paddingBottom: '5em'}}>
                <Grid contianer sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', margin: '2em' }}>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component='img'
                            sx={{
                            height: '15em',
                            overflow: 'hidden',
                            borderRadius: '100%'
                            }}
                            src={require('../images/seniorProject/SU Logo 2.png')}
                            alt='suLogo'
                        />
                        <Box
                            component='img'
                            sx={{
                            height: '15em',
                            overflow: 'hidden',
                            borderRadius: '100%'
                            }}
                            src={require('../images/seniorProject/Picture8.png')}
                            alt='SoundLogo'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h2' color='common.white'>Senior Design Project</Typography>
                        <Typography variant='h4' color='common.white'>ME 21.7 Sound Transit</Typography>
                        <Typography variant='h4' color='common.white'>Sound Transit Tension Weight Replacement Program</Typography>
                    </Grid>
                </Grid>
                <img style={{ width: '100%'}} src={require('../images/seniorProject/lightrail.jpg')} alt='Lightrail'/>
                
                <Box sx={{ marginX: '2em', marginY: '1em'}}>
                    <Grid container sx={{padding: '2em'}}>
                        <Grid item xs={6} sx={{padding: '1em'}}>
                            <Typography variant='h3' color='common.white' align='center'>Project Goal</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{padding: '1em'}}>
                            <Box sx={{maxHeight: '43em', marginBottom: '2.5em'}}>
                                <Typography variant='body1' color='common.white' fontWeight='fontWeightMedium' fontSize={15} lineHeight={1.8}>
                                    Member of Seattle University senior project design team 
                                    for Sound Transit Light Rail’s catenary system. Replaced 
                                    the Light Rail’s current counterweight system with a 
                                    spring tensioning device. Developed monitoring program to 
                                    ensure spring tensioning device meets operational 
                                    requirements. Created mathematical models of the catenary 
                                    system.
                                </Typography>
                            </Box>
                            <Button variant='outlined' sx={{ border: 1, color: 'secondary.main', fontSize: 14, textTransform: 'none', width: '25em', marginBottom: '1em'}}>
                                ME 21.7 Sound Transit Project Day Presentation pdf
                            </Button>
                            <Button variant='outlined' sx={{ border: 1, color: 'secondary.main', fontSize: 14, textTransform: 'none', width: '25em'}}>
                                ME 21.7 Sound Transit Project Abstract pdf
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ margin: '3em'}}>
                    <Grid container sx={{padding: '2em'}}>
                        <Grid item xs={6}>
                            <Box
                                component='img'
                                sx={{
                                width: '100%',
                                height: '100%',
                                overflow: 'hidden',
                                minWidth: '30em'
                                }}
                                src={require('../images/seniorProject/Spring Tensioning Device photo.png')}
                                alt='springTension'
                            />
                        </Grid>
                        <Grid item xs={6} bgcolor='#fefefe' sx={{paddingY: '4em', paddingX: '2em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box sx={{width: '20em', lineHeight: 2, maxHeight: '43em'}}>
                                <Typography variant='h4' color='primary.light'>Mathematical Models</Typography>
                                <br/>
                                <Typography variant='h7' color='primary.light'>
                                    Created mathematical models of Sound Transit Light 
                                    Rail catenary system that constructed a monitoring 
                                    program to ensure the spring tensioning device met 
                                    operational requirements.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                
                <Box sx={{ margin: '5em'}} bgcolor='primary.main'>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <Box key={step.label} sx={{height: '100%'}} >
                                {Math.abs(activeStep - index) <= 2 ? (
                                <Box sx={{ marginX: '6em', display: 'flex', justifyContent: 'center'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                                        <Box
                                            component='img'
                                            sx={{
                                            height: '27em',
                                            overflow: 'hidden',
                                            backgroundColor: showText ? 'primary.light': false, 
                                            opacity: showText ? [0.5, 0.4, 0.4] : false
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    </Box>
                                    {showText && <Box sx={{position: 'absolute', top: 65 }}>
                                        <Box sx={{width: '40em', lineHeight: 2, maxHeight: '43em'}}>
                                            <Typography variant='h5' color='common.white' align='center' fontWeight='fontWeightMedium' sx={{marginBottom: '0.5em'}}>{step.label}</Typography>
                                            <Typography variant='body1' color='common.white' align='center' fontWeight='fontWeightMedium'>{step.description}</Typography>
                                        </Box>
                                    </Box>}
                                </Box>
                                ) : null}
                            </Box>
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
            </Box>
        </Box>
    )
}
export default SeniorProject;