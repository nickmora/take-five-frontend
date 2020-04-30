import React from 'react';
import { Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const WelcomeMenu = (props) => {
    return (
        <Menu
            open={props.open}
            anchorEl={props.anchorEl}
            onClose={props.handleClose}
            keepMounted
        >
            <MenuItem className = "menu-item">
                <Link to="/home">
                    Home
                </Link>
            </MenuItem>
            <MenuItem className = "menu-item">
                <Link to="/about-me">
                    About Me
                </Link>
            </MenuItem>
            <MenuItem className = "menu-item">
                <Link to="/contact">
                    Contact
                </Link>
            </MenuItem>
            <MenuItem className = "menu-item">
                <Link to="/services">
                    Services
                </Link>
            </MenuItem>
            <MenuItem className = "menu-item">
                <Link to="/blog">
                    Blog
                </Link>
            </MenuItem>
            <MenuItem className = "menu-item">
                <Link to="/recipes">
                    Recipes
                </Link>
            </MenuItem>
            <MenuItem className = "menu-item">
                <Link to="/gallery">
                    Gallery
                </Link>
            </MenuItem>
            <MenuItem className = "menu-item">
                <Link to="/menus">
                    Menus
                </Link>
            </MenuItem>
        </Menu>
    );
}

export default WelcomeMenu;