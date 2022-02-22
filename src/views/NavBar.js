import React from 'react';
import {
    Link
} from "react-router-dom";
import { AppBar, Box, Toolbar, Typography} from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position='sticky' sx={{ width: 'auto'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingY: '2em', paddingX: '5em'}}>
                <Box sx={{ width: 'auto'}}>
                    <Typography variant='h5'>Rachel Kastama</Typography>
                    <hr />
                </Box>
                <Box>
                    <Link to='/' style={{textDecoration: 'none'}}><Typography variant='h7' color='common.white' sx={{ marginRight: '1em'}}>Home</Typography></Link>
                    <Link to='/projects' style={{textDecoration: 'none'}}><Typography variant='h7' color='common.white' sx={{ marginRight: '1em'}}>Projects</Typography></Link>
                    <Link to='/resume' style={{textDecoration: 'none'}}><Typography variant='h7' color='common.white' sx={{ marginRight: '1em'}}>Resume</Typography></Link>
                    <Link to='/about' style={{textDecoration: 'none'}}><Typography variant='h7' color='common.white'>About</Typography></Link>
                </Box>
            </Box>
        </AppBar>
    )
}
export default NavBar;