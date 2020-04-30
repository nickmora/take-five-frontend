import React from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Button } from "@material-ui/core";

const ConfirmDialog = (props) => {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
            >
                <DialogTitle>Email Sent!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your email has been sent.  We look forward to getting in touch with you.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={props.handleClose}
                        autoFocus
                        vairant="contained"
                        color="primary"
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ConfirmDialog;