import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const Recipes = () => {
    const [recipes, setRecipes] = useState(null)
    useEffect(() => {
        fetch("/recipes")
            .then(resp => resp.json())
            .then(data => setRecipes(data))
    }, []);
    const arrayFromString = string => string.split("\r\n")
    return (
        <div>
            <Paper className="card">
                <Typography
                    variant="h2"
                >
                    Recipes
                </Typography>
                <Grid container spacing={2}>
                    {recipes ?
                        recipes.map(recipe => (
                            <Paper key={recipe.id} className="card" style={{ display: "flex", flexGrow: 1 }}>
                                {/* fixed weird formatting thing with flexbox, I need to make a class for this so I'm not doing inline styling */}
                                <Grid container item xs={12} justify="space-between" alignContent="center">
                                    <Grid item sm = {12} md={5}>
                                        <Paper className="card">
                                            <img src={recipe.image} alt={recipe.alt} />
                                        </Paper>
                                    </Grid>
                                    <Grid item sm = {12} md={7}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column"
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                        >
                                            {recipe.title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            style={{ flexGrow: 1 }}
                                        >
                                            {recipe.description}
                                        </Typography>
                                        <Typography
                                            variant = "subtitle2"
                                        >
                                            {arrayFromString(recipe.tags).map(tag=>
                                                <Link key = {tag} to = {`/tagged/${tag}`}>#{tag} </Link>
                                            )}
                                        </Typography>
                                        <Link to = {`/recipes/${recipe.id}`}>
                                            <Button
                                                fullWidth
                                                variant = "contained"
                                                color = "primary"
                                            >
                                                View Recipe
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Paper>
                        )) :
                        <Typography>
                            ...Loading
                    </Typography>
                    }
                </Grid>
            </Paper>
        </div>
    );
}

export default Recipes;