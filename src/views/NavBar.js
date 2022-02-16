import React from 'react';
import {
    Link
} from "react-router-dom";
import { AppBar, Toolbar, Typography} from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position='sticky' sx={{ width: 'auto'}}>
            <Toolbar>
                <Typography variant='h4'>Rachel Kastama</Typography>
                <div>
                    <Link to='/' style={{margin: '1em'}}>Home</Link>
                    <Link to='/projects' style={{margin: '1em'}}>Projects</Link>
                    <Link to='/resume' style={{margin: '1em'}}>Resume</Link>
                    <Link to='/about' style={{margin: '1em'}}>About</Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;