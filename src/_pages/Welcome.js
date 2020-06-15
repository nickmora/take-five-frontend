import React, {useState} from 'react';
import logo from "../logo.svg";
import WelcomeMenu from "../_components/WelcomeMenu";
import {ButtonBase, Typography} from "@material-ui/core";

const Welcome = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = e => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);
    return (
        <header className="App-header">
            <Typography
                variant = "h2"
            >
                Welcome to Take Five Foods
            </Typography>
            <ButtonBase
                disableRipple
                onClick={handleClick}
                aria-controls="welcome-menu"
                aria-haspopup="true"
            >
                <img src={logo}
                    className="App-logo"
                    alt="logo"
                />
            </ButtonBase>
            <WelcomeMenu
                id="welcome-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                handleClose={handleClose}
            />
        </header>
    );
}

export default Welcome;

