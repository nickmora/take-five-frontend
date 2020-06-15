import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import {Paper, Typography, Grid, Button} from "@material-ui/core";

const TagList = () => {
    const arrayFromString = string => string.split("\r\n");
    const [entries, setEntries] = useState(null);
    const {tag} = useParams()
    useEffect(() => {
        fetch(`/details/tagged/${tag}`)
            .then(resp => resp.json())
            .then(data => setEntries(data))
    }, [])
    return (
        console.log(entries, tag),
        <div>
            <Paper className="card">
                <Typography
                    variant="h2"
                >
                    Tagged Results
                </Typography>
                {entries ?
                    entries.map(menu => (
                        <div key={menu.id}>
                            <Paper className= "card">
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <img src={menu.image} alt={menu.alt} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            variant="h4"
                                        >
                                            {menu.title}
                                        </Typography>
                                        <Typography>
                                            {arrayFromString(menu.tags).map(tag => <Link to = {`/tagged/${tag}`}>#{tag} </Link> )}
                                        </Typography>
                                        <Button
                                            fullWidth
                                        >
                                            Download Menu!
                                    </Button>
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
 
export default TagList;