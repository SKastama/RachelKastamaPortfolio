import React  from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';

const SeniorProject = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <img style={{ height: '20em'}} src={require('../images/seniorProject/SU Logo 2.png')} alt='suLogo'/>
                <img style={{ height: '20em'}} src={require('../images/seniorProject/Picture8.png')} alt='SoundLogo'/>
                <h1>Senior Design Project</h1>
                <p>ME 21.7 Sound Transit</p>
                <p>Sound Transit Tension Weight Replacement Program</p>
                <img style={{ width: '100%'}} src={require('../images/seniorProject/lightrail.jpg')} alt='Lightrail'/>
                <div>
                    <h1>Project Goal</h1>
                    <p>
                        Member of Seattle University senior project design team 
                        for Sound Transit Light Rail’s catenary system. Replaced 
                        the Light Rail’s current counterweight system with a 
                        spring tensioning device. Developed monitoring program to 
                        ensure spring tensioning device meets operational 
                        requirements. Created mathematical models of the catenary 
                        system.
                    </p>
                    <span>pdf</span>
                    <span>pdf</span>
                </div>
                <div>
                    <img style={{ height: '20em'}} src={require('../images/seniorProject/Spring Tensioning Device photo.png')} alt='springTension'/>
                    <h1>Mathematical Models</h1>
                    <p>
                        Created mathematical models of Sound Transit Light 
                        Rail catenary system that constructed a monitoring 
                        program to ensure the spring tensioning device met 
                        operational requirements.
                    </p>
                </div>
                <img style={{ height: '20em'}} src={require('../images/seniorProject/Catenary system diagram.png')} alt='catenarySystem1'/>
                <h1>Catenary System with Two Tensorex</h1>
                <div>
                    <img style={{ height: '20em'}} src={require('../images/seniorProject/Overhead wires modeling before and after.png')} alt='catenarySystem2'/>
                    <h1>Mathematical Modeling of Overhead Wires</h1>
                    <p>
                        Simplified free body diagram of the catenary system, 
                        divided into the Tensorex (left), and the wire as a 
                        mass spring damper system (right).
                    </p>
                </div>
                <div>
                    <img style={{ height: '20em'}} src={require('../images/seniorProject/Screenshot 2022-01-03 193844.png')} alt='catenarySystem3'/>
                    <h1>Equations of Motion</h1>
                    <p>
                        The equations of motion for this system are the 
                        Tensorex equation (left), and the wire as a mass 
                        spring damper system equation (right). With these two 
                        equations of motion, we used the arc length formula 
                        of the length (x) equals radius (r) multiplied by the 
                        angle of the Tensorex to combine both models into two 
                        transfer functions. Used transfer functions to model 
                        the behavior of the system using differential 
                        equations with a direct input and output.
                    </p>
                </div>
                <div>
                    <img style={{ height: '20em'}} src={require('../images/seniorProject/Graph Equations.png')} alt='catenarySystem4'/>
                    <h1>Transfer Functions</h1>
                    <p>
                        Combining the equations of motion from the Tensorex 
                        equation, and the wire as a mass spring damper system 
                        equation, we created two transfer functions that were 
                        used to model the behavior. The first transfer function 
                        is the Angle of Rotation vs Temperature, where the input 
                        is the temperature of the wire and the output is the 
                        angle of rotation of the Tensorex. The second transfer 
                        function is Force vs Temperature, where the input is the 
                        temperature of the wire and the output is the force of 
                        the Tensorex. After this we made graphs of these 
                        equations.
                    </p>
                </div>
                <div>
                    <img style={{ height: '20em'}} src={require('../images/seniorProject/displacement graph.png')} alt='catenarySystem5'/>
                    <h1>Variable Radius of Rotation Graph</h1>
                    <p>
                        This is a graph showing rotation of our system with 
                        various changes in temperature. - The blue line 
                        represents a temperature change as if it changed one 
                        degree suddenly. With its whip-like motion we see 
                        that the system is underdamped, and even with the 
                        large fluctuations we are still within 1%. - The red 
                        line at the top represents a temperature gradient, 
                        this was calculated from weather data here in 
                        Seattle. It shows the change in temperature from a 
                        cool night to a warm day. This slight temperature 
                        change affects the rotation in the system very 
                        minimally, this is why the red line is hardly moving 
                        in the graph.
                    </p>
                </div>
                <div>
                    <img style={{ height: '20em'}} src={require('../images/seniorProject/force graph.png')} alt='catenarySystem6'/>
                    <h1>Variable Radius for Force</h1>
                    <p>
                        This is a graph showing the force of our system with 
                        various changes in temperature. - The blue line 
                        represents the sudden change of one degree again, and 
                        we see a similar oscillation as we had in the 
                        previous graph. - The red line represents the 
                        temperature gradient, while previously we had a small 
                        slope of a line, now we see the force remains nearly 
                        constant around 3300 lb. How this affects us in the 
                        real world, if the temperature changes quickly the 
                        force is not constant, as a counterbalance would be, 
                        but as long as the temperature changes realistically 
                        throughout the day the force remains nearly constant.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SeniorProject;