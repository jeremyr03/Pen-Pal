import React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    TextField,
    DialogContent,
    IconButton,
    Grid,
    useTheme,
} from "@mui/material";
import {EDialog as D} from "../../utils/EDialog";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    openState:D,
    settingState:Function
}

export const TeacherSignup = ({openState,settingState}:Props):JSX.Element => {
    const theme = useTheme();

    const openClose = () => {
        settingState(D.empty);
    };
    return (
            <Dialog open={openState===D.TeacherS}
                    onClose={openClose}
                    PaperProps={{style:{backgroundColor:theme.palette.background.default}}}>
                <DialogTitle>
                    <Grid container>
                        <Grid item xs={11}>
                            <h2>Teacher Sign Up</h2>
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
    );
}
