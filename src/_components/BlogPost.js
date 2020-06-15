import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Typography, Paper } from "@material-ui/core";

const BlogPost = () => {
    const { id } = useParams();
    // console.log(id);
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch(`/blog/${id}`)
            .then(resp => resp.json())
            .then(data => setPost(data))
    }, [id])


    return (
        console.log(post),
        <div>
            <Paper>
                {post ?
                    <div>
                        <Typography
                            variant="h2"
                        >
                            {post.title}
                        </Typography>
                        {post.image ? <img src={post.image} alt = {post.alt} /> : null}
                        {post.sections.map(section => (
                            <div key={section.id}>
                                <p>
                                    {section.body}
                                </p>
                                {section.image ? (<img src={section.image} alt = {section.alt} />) : null}
                                <p>
                                    {section.caption}
                                </p>
                            </div>
                        ))}
                    </div>
                    :
                    <div>
                        Loading....
                    </div>
                }
            </Paper>
        </div>
    );
}

export default BlogPost;