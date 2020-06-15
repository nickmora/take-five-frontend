import React, { useEffect, useState } from 'react';
import { Typography, Paper, Grid, Button, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/styles";

const Blog = () => {
    const [posts, setPosts] = useState(null)
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    useEffect(() => {
        fetch("/blog")
            .then(resp => resp.json())
            .then(data => setPosts(data))
    }, [])
    // const history = useHistory();
    // const viewPost = id => history.push(id)
    return (
        <div>
            <Paper className="card">
                <Typography
                    variant="h2"
                >
                    Blog
                </Typography>
                {posts ?
                    posts.map(post => (
                        <div key={post.id}>
                            <Paper className="card">
                                    {
                                        isSmall ?
                                        <Grid container spacing={3}>
                                                <Grid item sm={12}>
                                                    <Typography
                                                        variant="h4"
                                                    >
                                                        {post.title}
                                                    </Typography>
                                                    <Paper className="card">
                                                        <img style={{ maxWidth: "100%", maxHeight: 500 }} src={post.image ? post.image : "https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"} alt={post.alt} />
                                                    </Paper>
                                                </Grid>
                                                <Grid item sm={12}
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                    }}
                                                >
                                                    <div style={{
                                                        flexGrow: 1,
                                                    }} />
                                                    <Link to={`/blog/${post.id}`}>
                                                        <Button 
                                                            fullWidth
                                                            variant = "contained"
                                                            color = "primary"
                                                        >
                                                            View Post
                                            </Button>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                            :
                                            <Grid container spacing={3}>
                                                <Grid item md={6}>
                                                    <Paper className="card">
                                                        <img style={{ maxWidth: "100%", maxHeight: 500 }} src={post.image ? post.image : "https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"} alt={post.alt} />
                                                    </Paper>
                                                </Grid>
                                                <Grid item md={6}
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                    }}
                                                >
                                                    <Typography
                                                        variant="h4"
                                                    >
                                                        {post.title}
                                                    </Typography>
                                                    <div style={{
                                                        flexGrow: 1,
                                                    }} />
                                                    <Link to={`/blog/${post.id}`}>
                                                        <Button 
                                                            fullWidth
                                                            variant = "contained"
                                                            color = "primary"
                                                        >
                                                            View Post
                                            </Button>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                    }
                            </Paper>
                        </div>
                    ))
                    :
                    <Typography>
                        Loading...
                    </Typography>
                }
            </Paper>
        </div>
    );
}

export default Blog;