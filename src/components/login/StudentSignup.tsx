import React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    TextField, DialogContent, Grid, IconButton, useTheme
} from "@mui/material";
import {EDialog as D} from "../../lib/EDialog";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
    openState:D,
    settingState:Function
}

export const StudentSignup= ({openState,settingState}:Props):JSX.Element => {
    const theme = useTheme();

    const openClose = () => {
        settingState(D.empty);
    };

    return (
        <>
            <Dialog open={openState===D.StudentS}
                    onClose={openClose}
                    PaperProps={{style:{backgroundColor:theme.palette.background.default}}}>
                <DialogTitle>
                    <Grid container>
                        <Grid item xs={11}>
                            <h2>Student Sign Up</h2>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton onClick={openClose}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="code"
                                label="Code"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
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
