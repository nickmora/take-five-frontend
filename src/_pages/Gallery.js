import React from 'react';
import { Paper, Typography, Grid } from "@material-ui/core";
import mainStyle from "../styles/mainStyle";
import burger from "../imgs/gallery/burger.jpeg";

const Gallery = () => {
    const classes = mainStyle();
    return (
        <div className={classes.root} id="Contact">
            <Paper className="card">
                <Typography
                    variant="h2"
                >
                    Gallery
                </Typography>
                <Grid container spacing = {3}>
                    <Grid item xs={6}>
                            <img src={burger} />
                    </Grid>
                    <Grid item xs={6}>
                            <img src={burger} />
                    </Grid>
                    <Grid item xs={6}>
                            <img src={burger} />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="card" >
                            <img src={burger} />
                        </Paper>
                    </Grid>

                </Grid>

            </Paper>
        </div>
    );
}

export default Gallery;