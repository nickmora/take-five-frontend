import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid } from "@material-ui/core";

const Services = () => {
    const arrayFromString = string => string.split("\r\n")
    const [services, setServices] = useState(null);
    useEffect(() => {
        fetch("/details/services")
            .then(resp => resp.json())
            .then(data => setServices(data))
    }, [])
    return (
        console.log(services),
        <div>
            <Paper className="card">
                <Typography
                    variant="h2"
                >
                    Services
                </Typography>
                {services ?
                    services.map(service => (

                        <div>
                            <Paper className="card">
                                <Grid container spacing={3}>
                                    <Grid item md={6}>
                                        <Paper className="card">
                                            <img style={{ height: "auto", maxWidth: "100%" }} src={service.image} alt={service.alt} />
                                        </Paper>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography
                                            variant="h4"
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                        >
                                            Cost: ${service.price}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            gutterBottom
                                        >
                                            {service.subtitle}
                                        </Typography>
                                        {arrayFromString(service.description).map(paragraph => (
                                            <Typography
                                                variant="body1"
                                                align="left"
                                                paragraph
                                            >
                                                {paragraph}
                                            </Typography>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                    ))
                    :
                    <Typography>
                        ...Loading
                    </Typography>
                }
            </Paper>
        </div>
    );
}

export default Services;