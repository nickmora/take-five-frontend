import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Typography, Paper } from "@material-ui/core";

const RecipePost = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null);
    useEffect(() => {
        fetch(`/recipes/${id}`)
            .then(resp => resp.json())
            .then(data => setRecipe(data))
    }, [])
    const arrayFromString = string => string.split("\r\n")
    return (
        console.log(recipe),
        <div>
            <Paper className="card">
                {recipe ?
                    <div>
                        <Typography variant="h3">
                            {recipe.title}
                        </Typography>
                        <img src={recipe.image} alt={recipe.alt} />
                        <Typography
                            variant = "h4"
                        >
                            Ingredients:
                        </Typography>
                        <Typography
                            variant = "body1"
                            align = "left"
                        >
                            {arrayFromString(recipe.ingredients).map(ingredient=>(
                                <li>
                                    {ingredient}
                                </li>
                            ))}
                        </Typography>
                        {recipe.photo_steps ?
                            recipe.photo_steps.map(photo_step => (
                                <div>
                                    <Paper className = "card">
                                        <img src={photo_step.image} alt={photo_step.al} />
                                        <Typography
                                            variant="subtitle1"
                                        >
                                            {photo_step.caption}
                                        </Typography>
                                    </Paper>
                                    <Typography
                                        variant="body1"
                                        align="left"
                                    >
                                        {photo_step.body}
                                    </Typography>
                                </div>
                            )) :
                            null}
                    </div>
                    :
                    <Typography>
                        Loading...
                </Typography>
                }
            </Paper>
        </div>
    );
}

export default RecipePost;

