import React, { useState, useEffect } from 'react';
import { AppBar, Tab, Tabs } from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
// import Home from '../_pages/Home';
// import AboutMe from '../_pages/AboutMe';
// import Contact from '../_pages/Contact';
// import Blog from '../_pages/Blog';
// import Services from '../_pages/Services';
// import Recipes from '../_pages/Recipes';
// import Gallery from '../_pages/Gallery';
// import Menus from '../_pages/Menus';

// const TabPanel = props => {
//     return (
//         <div
//             role="tabpanel"
//             hidden={props.value !== props.index}
//             id={`tabpanel-${props.index}`}
//             aria-labelledby={`tabpanel-${props.index}`}
//             {...props}
//         >
//             {props.value === props.index && (
//                 <Box p={3}>
//                     <Typography>
//                         {props.children}
//                     </Typography>
//                 </Box>
//             )}
//         </div>
//     )
// }

const a11yProps = index => ({ id: `tab-${index}`, "aria-controls": `tab-panel-${index}` });

const LinkTab = props => {
    return (
        <Tab
            component= {Link}
            // onClick={e => e.preventDefault()}
            {...props}
        />
    )
}

const NavBar = () => {
    const referenceIndex = {
        "/home":0,
        "/about-me":1,
        "/contact":2,
        "/blog":3,
        "/services":4,
        "/recipes":5,
        "/gallery":6,
        "/menus":7
    }
    const history = useHistory()
    const [value, setValue] = useState(referenceIndex[history.location.pathname]);
    const handleChange = (event, newValue) => setValue(newValue)
    useEffect(()=>{
        if(value===null){ 
            setValue(referenceIndex[history.location.pathname])
        }
    },[value])
    return (
        <div>
            <nav>
                <AppBar position="static">
                    {/* <Toolbar>
                    <Typography>
                        Take Five Foods
                    </Typography>
                </Toolbar> */}
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="tabs"
                        variant = "scrollable"
                        scrollButtons = "auto"
                    >
                        <LinkTab label="Home" to="/home" {...a11yProps(0)} />
                        <LinkTab label="About" to="/about-me" {...a11yProps(1)} />
                        <LinkTab label="Contact" to="/contact" {...a11yProps(2)} />
                        <LinkTab label="Blog" to="/blog" {...a11yProps(3)} />
                        <LinkTab label="Services" to="/services" {...a11yProps(4)} />
                        <LinkTab label="Recipes" to="/recipes" {...a11yProps(5)} />
                        <LinkTab label="Gallery" to="/gallery" {...a11yProps(6)} />
                        <LinkTab label="Menus" to="/menus" {...a11yProps(7)} />
                    </Tabs>
                </AppBar>
            </nav>
            {/* <div>
                <TabPanel value = {value} index = {0}> <Home /> </TabPanel>
                <TabPanel value = {value} index = {1}> <AboutMe /> </TabPanel>
                <TabPanel value = {value} index = {2}> <Contact /> </TabPanel>
                <TabPanel value = {value} index = {3}> <Blog /> </TabPanel>
                <TabPanel value = {value} index = {4}> <Services /> </TabPanel>
                <TabPanel value = {value} index = {5}> <Recipes /> </TabPanel>
                <TabPanel value = {value} index = {6}> <Gallery /> </TabPanel>
                <TabPanel value = {value} index = {7}> <Menus /> </TabPanel>
            
            </div> */}
        </div>
    );
}

export default NavBar;