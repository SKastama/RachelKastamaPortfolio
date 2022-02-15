import React from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from './NavBar.js';

const IntegratedDesign = () => {
    return (
        <div>
            <NavBar/>
            <img style={{ height: '20em'}} src={require('../images/seniorProject/SU Logo 2.png')} alt='suLogo'/>
            <h1>Integrated Design 3</h1>
            <p>UVC Disinfection Device Group Project</p>
            <div>
                <h1>Project Goal</h1>
                <p>
                    Tasked in a team of freshman, sophomores, and juniors 
                    to create a mechanical solution to help aid against 
                    the Covid-19 pandemic at the start of quarantine. 
                    Team focused on designing a UVC Disinfection Device 
                    product for self checkout machines at grocery stores. 
                    Additionally, the project asked us to identify and 
                    analyze two subproblems of our product. Dividing the 
                    team into two groups, the subproblems were: 1. 
                    Product's electrical components. 2. Housing, 
                    materials, and manufacturing of product. I led 
                    subproblem 2, and have attached a pdf of my group's 
                    Sub-Problem 2 Tech Sheet, as well as my General 
                    Audience Paper addressing the overview of the project.
                </p>
                <span>pdf</span>
                <span>pdf</span>
            </div>
            <div>
                <h1>UVC Disinfection Device</h1>
                <p>
                    Created UVC light disinfection device for grocery 
                    store self-checkout machines to address Covid-19 
                    transmission. The product houses a retractable stylus 
                    to be used to interact with the self checkout touch 
                    screens. Developed 3D CAD models and a build of 
                    materials.
                </p>
            </div>
            <div>
                <h1>Product Overview</h1>
                <p>
                    Basic Operation of device: 1. A Self-Checkout user 
                    approaches the station and places their hand in front 
                    of the exterior motion sensor. 2. This motion sensor 
                    sends a signal to the microcontroller which then 
                    triggers the motor to rotate the gear shown in the 
                    back view. 3. This gear then rotates the assembly 
                    that houses the cable shown in the front view. This 
                    rotation causes the stylus to drop down 3 inches so 
                    that it now protrudes through the bottom of the 
                    product’s housing. 4. The user then grabs the stylus, 
                    operates the touchscreen with the stylus, and simply 
                    releases once they are done. 5. The stylus is then 
                    retracted back into the position hanging below the 
                    housing. 6. A second motion sensor then senses the 
                    presence of the stylus and sends a signal to the 
                    microcontroller to rotate the motor and gear to lift 
                    the stylus fully back into the product.
                </p>
            </div>
            <h1>Design Details</h1>
            <div>
                <h1>Front Cover</h1>
                <p>
                    Small window on the front cover is made of acrylic, 
                    a UV resistant material.
                </p>
            </div>
            <div>
                <h1>Front View (no cover)</h1>
                <p>
                    Houses three UVC bulbs, a cable retraction device, 
                    and a stylus.
                </p>
            </div>
            <div>
                <h1>Back View (no cover)</h1>
                <p>
                    Houses a microcontroller, a DC motor, a worm gear, 
                    and a gear pinned to the string housing.
                </p>
            </div>
            <div>
                <h1>Cable Retraction Device</h1>
                <p>
                    The cable retraction device is a mechanism that 
                    controls the motion of the stylus. This device 
                    operates in a similar fashion to a standard tape 
                    measure. When the stylus is extended outside the 
                    product's housing, the clock spring housed in this 
                    mechanism provides a tension on the cable pulling it 
                    back into the device.
                </p>
            </div>
            <div>
                <h1>Build of Materials for Housing</h1>
                <p>
                    Sketches of the housing for the UVC Disinfection 
                    Device.
                </p>
            </div>
            <div>
                <h1>Sketches</h1>
                <p>
                    Materials:
                    1. Housing: Cast Acrylic Sheet, 12" x 48" x 1/8"
                    2. Window: Clear High-Strength UV-Resistant Acrylic, 6" x 6" x 1/8"
                    3. Stylus: Recycled PTFE, 7/8" Diameter
                    4. Screws: 18-8 Stainless Steel Pan Head Slotted Screws, Standard Head, M2 x 0.4 mm Thread, 5 mm Long
                    Manufacturer: McMaster-Carr
                </p>
            </div>
        </div>
    )
}
export default IntegratedDesign;