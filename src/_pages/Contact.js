import React from 'react';
import { Typography, Paper, TextField, Button, Grid } from "@material-ui/core";
import ConfirmDialog from "../_components/ConfirmDialog";
// import emailjs from "emailjs-com";
import mainStyle from "../styles/mainStyle";

const Contact = () => {
    const classes = mainStyle();
    const [inputText, setInputText] = React.useState({ first_name: "", last_name: "", phone_number: "", body: "", email: "" });
    const [dialogOpen, setDialogOpen] = React.useState(false);
    // const handleClickOpen = ()=> setDialogOpen(true);
    const handleClose = () => setDialogOpen(false);
    const handleInput = e => {
        console.log(e)
        setInputText({ ...inputText, [e.target.name]: e.target.value })
    }
    // const sendEmail = e => {
    //     e.preventDefault()

    //     // if(!inputText.first_name || !inputText.last_name || !inputText.body || !inputText.email){
    //     //     return alert("Make a modal to show people that they need to fill out other fields")
    //     // }

    //     emailjs.sendForm("gmail", "template_uASDyZfg_clone", e.target, process.env.REACT_APP_EMAILJS_USER_ID)
    //         .then(result => {
    //             console.log(result.text);
    //             setInputText({first_name:"",last_name:"",phone_number:"",body:"",email:""})
    //             handleClickOpen();
    //             }, error => console.log(error.text))

    // }
    return (
        <div className={classes.Contact} id="Contact">
            <Paper className="card">
                <Typography
                    variant="h2"
                >
                    Get in Touch
                </Typography>
                <Typography
                    variant="body1"
                    className="lineBreak"
                >
                    Fill out the form below for inquiries about freelancing, opportunities for collaboration, or just to say hi :-)
                </Typography>
                <form onSubmit={(e) =>{
                    e.preventDefault();
                    console.log(e)
                }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                id="first_name"
                                placeholder="First Name"
                                label="First Name"
                                fullWidth
                                name="first_name"
                                variant="outlined"
                                required
                                value={inputText.first_name}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="last_name"
                                placeholder="Last Name"
                                label="Last Name"
                                fullWidth
                                name="last_name"
                                variant="outlined"
                                required
                                value={inputText.last_name}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                placeholder="Email"
                                label="Email"
                                fullWidth
                                type="email"
                                name="email"
                                variant="outlined"
                                required
                                value={inputText.email}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="phone_number"
                                placeholder="Phone Number"
                                label="Phone Number"
                                fullWidth
                                type="tel"
                                name="phone_number"
                                variant="outlined"
                                value={inputText.phone_number}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="body"
                                placeholder="Message Body"
                                label="Message Body"
                                multiline
                                fullWidth
                                name="body"
                                variant="outlined"
                                required
                                value={inputText.body}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <ConfirmDialog open={dialogOpen} handleClose={handleClose} />
        </div>
    );
}

export default Contact;