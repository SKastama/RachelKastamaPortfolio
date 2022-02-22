import React from 'react';
import {
    Link
} from "react-router-dom";
import { AppBar, Box, Toolbar, Typography} from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position='sticky' sx={{ width: 'auto'}}>
            <Toolbar>
                <Typography variant='h6'>Rachel Kastama</Typography>
                
                    <Link to='/' style={{textDecoration: 'none'}}><Typography variant='h6' color='common.white' sx={{ marginX: '1em'}}>Home</Typography></Link>
                    <Link to='/projects' style={{textDecoration: 'none'}}><Typography variant='h6' color='common.white' sx={{ marginRight: '1em'}}>Projects</Typography></Link>
                    <Link to='/resume' style={{textDecoration: 'none'}}><Typography variant='h6' color='common.white' sx={{ marginRight: '1em'}}>Resume</Typography></Link>
                    <Link to='/about' style={{textDecoration: 'none'}}><Typography variant='h6' color='common.white'>About</Typography></Link>
                
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;