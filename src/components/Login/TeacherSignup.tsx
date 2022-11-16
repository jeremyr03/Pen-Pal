import React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    TextField, DialogContent
} from "@mui/material";
import {Dialog as D} from "./Dialog";

interface Props {
    openState:D,
    settingState:Function
}

export const TeacherSignup: React.FC<Props> = ({openState,settingState}) => {

    const openClose = () => {
        settingState(D.empty);
    };

    return (
        <>
            <Dialog open={openState==D.TeacherS} onClick={openClose}>
                <DialogTitle>Login</DialogTitle>
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
                    <Button onClick={openClose}>Close</Button>
                </DialogContent>
            </Dialog>
        </>
    );
}
