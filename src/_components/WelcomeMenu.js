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
            <Link to="/home">
                <MenuItem className="menu-item">
                    Home
                </MenuItem>
            </Link>
            <Link to="/about-me">
                <MenuItem className="menu-item">
                    About Me
                </MenuItem>
            </Link>
            <Link to="/contact">
                <MenuItem className="menu-item">
                    Contact
                </MenuItem>
            </Link>
            <Link to="/services">
                <MenuItem className="menu-item">
                    Services
                </MenuItem>
            </Link>
            <Link to="/blog">
                <MenuItem className="menu-item">
                    Blog
                </MenuItem>
            </Link>
            <Link to="/recipes">
                <MenuItem className="menu-item">
                    Recipes
                </MenuItem>
            </Link>
            <Link to="/gallery">
                <MenuItem className="menu-item">
                    Gallery
                </MenuItem>
            </Link>
            <Link to="/menus">
                <MenuItem className="menu-item">
                    Menus
                </MenuItem>
            </Link>
        </Menu>
    );
}

export default WelcomeMenu;