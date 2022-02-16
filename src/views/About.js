import React from 'react';
import NavBar from './NavBar.js';
import { Typography} from '@mui/material';

const About = () => {
    return (
        <div>
            <NavBar/>
            <div sx={{ border: 1 }} style={{display: 'flex', flexDirection: 'row', margin: '3em'}}>
                <div>
                    <img style={{ height: '20em'}} src={require('../images/Rachel Kastama Profile picture.jpg')} alt='aboutPhoto'/>
                </div>
                <div style={{padding: '2em'}}>
                    <Typography variant='h3'>Rachel Kastama</Typography>
                    <Typography variant='h5'>Mechanical Engineer</Typography>
                    <br/>
                    <Typography variant='h7'>
                        I grew up in Puyallup Washington. I am a recent college 
                        graduate from Seattle University. At Seattle University, 
                        I obtained a Mechanical Engineering degree and a minor in 
                        Mathematics. Throughout my education, I was a collegiate 
                        athlete and competed in cross country and track for 
                        Seattle University. Because of this, I had to develop 
                        great time management skills to be able to balance my time 
                        effectively.
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant='h7'>
                        I've always wanted to be an engineer since I was young, and I 
                        am interested in the design and manufacturing aspects of 
                        engineering.
                    </Typography>
                </div>
                
            </div>
        </div>
    )
}
export default About;