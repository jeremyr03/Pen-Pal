import React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    TextField, DialogContent, Grid, IconButton
} from "@mui/material";
import {Dialog as D} from "./Dialog";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
    openState:D,
    settingState:Function
}

export const StudentLogin: React.FC<Props> = ({openState,settingState}) => {

    const openClose = () => {
        settingState(D.empty);
    };

    return (
        <>
            <Dialog open={openState==D.StudentL} onClick={openClose}>
                <DialogTitle>
                    <Grid container>
                        <Grid item xs={11}>
                            <h2>Student Login</h2>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton onClick={openClose}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                    <Button onClick={openClose}>Login</Button>
                </DialogContent>
            </Dialog>
        </>
    );
}
