import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const Menus = () => {
    const arrayFromString = string => string.split("\r\n");
    const [menus, setMenus] = useState(null);
    useEffect(() => {
        fetch("/menus")
            .then(resp => resp.json())
            .then(data => setMenus(data))
    }, [])
    return (
        <div>
            <Paper className="card">
                <Typography
                    variant="h2"
                >
                    Menus
                </Typography>
                {menus ?
                    menus.map(menu => (
                        <div key={menu.id}>
                            <Paper className="card">
                                <Grid container spacing={3}>
                                    <Grid item sm={12} md={6}>
                                        <img src={menu.image} alt={menu.alt} />
                                    </Grid>
                                    <Grid item sm={12} md={6}>
                                        <Typography
                                            variant="h4"
                                        >
                                            {menu.title}
                                        </Typography>
                                        <Typography>
                                            {arrayFromString(menu.tags).map(tag => <Link key={tag} to={`/tagged/${tag}`}>#{tag} </Link>)}
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

export default Menus;