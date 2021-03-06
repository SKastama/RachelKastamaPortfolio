import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import Home from './views/Home.js';
import C4Labs from './views/C4Labs.js';
import FluidDynamics from './views/FluidDynamics.js';
import HeatTransfer from './views/HeatTransfer.js';
import IntegratedDesign from './views/IntegratedDesign.js';
import MachineElements from './views/MachineElements.js';
import SeniorProject from './views/SeniorProject.js';
import Resume from './views/Resume.js';
import About from './views/About.js';
import Projects from './views/Projects.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme= createTheme({
  palette: {
    primary: {
      main: '#00544a',
      light: '#00695f',
      dark: '#00695c'
    },
    secondary: {
      main: '#fefefe'
    }
  },
  typography: {
    fontFamily: 'Lato',
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontSize: 18
  }
})


function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/projects/c4_labs' element={<C4Labs/>}/>
          <Route path='/projects/senior_project' element={<SeniorProject/>}/>
          <Route path='/projects/integrated_design' element={<IntegratedDesign/>}/>
          <Route path='/projects/machine_elements' element={<MachineElements/>}/>
          <Route path='/projects/heat_transfer' element={<HeatTransfer/>}/>
          <Route path='/projects/fluid_dynamics' element={<FluidDynamics/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;
