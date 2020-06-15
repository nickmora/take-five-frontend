import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid, Card } from "@material-ui/core";
import mainStyle from "../styles/mainStyle";

const Gallery = () => {
    const [photos, setPhotos] = useState(null)
    useEffect(() => {
        fetch("/gallery")
            .then(resp => resp.json())
            .then(data => setPhotos(data))
    }, [])
    const classes = mainStyle();
    return (
        <div className = {classes.root}>
            <Paper className="card">
                <Typography
                    variant="h2"
                >
                    Gallery
                </Typography>
                <Grid container spacing={3}>
                    {photos ?
                        photos.map(photo => (
                            <Grid key = {photo.id} item xs={6} className = "gallery-photo">
                                <Card className="card">
                                    <img src={photo.image} className="project-image" alt = {photo.alt}
                                    />
                                    <Typography>
                                        {/* {photo.text} */}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))
                        :
                        <Typography>
                            Loading...
                        </Typography>
                    }
                    {/* <Grid item xs={6}>
                        <Card className = "card">


                            <img src={burger} />
                        </Card>
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
                    </Grid> */}

                </Grid>

            </Paper>
        </div>
    );
}

export default Gallery;