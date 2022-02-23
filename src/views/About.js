import React from 'react';
import NavBar from './NavBar.js';
import { Box, Grid, Typography} from '@mui/material';

const About = () => {
    return (
        <Box bgcolor='primary.light' sx={{minWidth: 925, paddingBottom: '3em'}}>
            <NavBar/>
            <Box sx={{ margin: '3em', paddingTop: '1em'}}>
                <Grid container sx={{padding: '1em'}}>
                    <Grid item xs={6}>
                        <Box
                            component='img'
                            sx={{
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            minWidth: '35em'
                            }}
                            src={require('../images/Rachel Kastama Profile picture.jpg')}
                            alt='aboutPhoto'
                        />
                    </Grid>
                    <Grid item xs={6} bgcolor='#fefefe' sx={{padding: '3em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Box sx={{width: '20em', lineHeight: 2, maxHeight: '43em'}}>
                            <Typography variant='h5'>Rachel Kastama</Typography>
                            <Typography variant='body1' color='primary.main'>Mechanical Engineer</Typography>
                            <br/>
                            <Typography fontSize={16}>
                                I grew up in Puyallup Washington. I am a recent college 
                                graduate from Seattle University. At Seattle University, 
                                I obtained a Mechanical Engineering degree and a minor in 
                                Mathematics. Throughout my education, I was a collegiate 
                                athlete and competed in cross country and track for 
                                Seattle University. Because of this, I had to develop 
                                great time management skills to be able to balance my time 
                                effectively. <br /> <br />
                                I've always wanted to be an engineer since I was young, and I 
                                am interested in the design and manufacturing aspects of 
                                engineering.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default About;