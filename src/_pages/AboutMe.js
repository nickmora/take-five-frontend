import React, { useState, useEffect } from 'react';
import { Paper, Typography } from "@material-ui/core";

const AboutMe = () => {
    const arrayFromString = string => string.split("\r\n")
    const [bio, setBio] = useState(null)
    useEffect(() => {
        fetch("/details/about")
            .then(resp => resp.json())
            .then(data => setBio(data[0]))
    }, [])
    return (
        console.log(bio),
        <div>
            <Paper className="card">
                <Typography
                    variant="h2"
                >
                    About Aaron Turner
                </Typography>
                {bio ?
                    <div>
                        <Paper className="card">
                            <img src={bio.headshot} alt={bio.alt} />
                        </Paper>
                        {arrayFromString(bio.about_me_text).map(paragraph => (
                            <Typography
                                variant="body1"
                                align="left"
                                paragraph
                            >
                                {paragraph}
                            </Typography>
                        ))}
                        <Typography
                            variant = "h5"
                        >
                            Come drop by and say hi!
                        </Typography>
                        <Typography>
                            Venmo: {bio.venmo}
                        </Typography>
                        <Typography>
                            {bio.address}
                        </Typography>
                        <Typography>
                            {bio.city}, {bio.state} {bio.zip_code}
                        </Typography>
                    </div>
                    :
                    <Typography>
                        ...Loading
                </Typography>
                }
            </Paper>
        </div>
    );
}

export default AboutMe;