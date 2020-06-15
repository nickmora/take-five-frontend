import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import mainStyle from "../styles/mainStyle";

const Home = () => {
    const classes = mainStyle();
    return ( 
        <div className={classes.Contact} id="Contact">
            <Paper className="card">
                <Typography
                    variant="h2"
                >
                    Home
                </Typography>
            </Paper>
        </div>
     );
}
 
export default Home;