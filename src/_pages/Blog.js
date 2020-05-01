import React from 'react';
import mainStyle from "../styles/mainStyle";
import {Typography, Paper} from "@material-ui/core";

const Blog = () => {
    const classes = mainStyle()
    return ( 
        <div className={classes.Contact} id="Contact">
            <Paper className="card">
                <Typography
                    variant="h2"
                >
                    Blog
                </Typography>
            </Paper>
        </div>
     );
}
 
export default Blog;