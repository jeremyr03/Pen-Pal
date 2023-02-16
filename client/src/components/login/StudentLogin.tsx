import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    TextField, DialogContent, Grid, IconButton, useTheme
} from "@mui/material";
import {EDialog as D} from "../../lib/EDialog";
import CloseIcon from "@mui/icons-material/Close";
import * as EmailValidator from 'email-validator';


interface Props {
    openState: D,
    settingState: Function
}

interface Details {
    email?: string,
    password?: string,
}

export const StudentLogin = ({openState, settingState}: Props): JSX.Element => {
    const [details, setDetails] = useState({} as Details);
    const theme = useTheme();

    const openClose = () => {
        settingState(D.empty);
    };

    const validateLogin = () => {
        if(details['email'] && details['password']){
            if(EmailValidator.validate(details['email'])){
                return true;
            }
        }
        return false;
    }

    const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDetails(prevState => {
            prevState['email'] = event.target.value;
            console.log(prevState);
            return prevState;
        });
    }
    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDetails(prevState => {
            prevState['password'] = event.target.value;
            console.log(validateLogin());
            return prevState;
        });
    }
    /*
    * Text - on edit/on change/ -> asTyping
    *
    * astyping sets a state variable/ that shows/hides
    *
    * Button (on click -> formSubmit)
    *
    * formSubmit () :
    *   set a state variable is loading
    *   send request / perform data shit
    *   response
    *       suceeds - unset loading, set loaded/set error to 0
    *       fails - unset loading, set error to true
    *
    *
    * context - gets
    *
    * */
    return (
        <>
            <Dialog open={openState === D.StudentL}
                    onClose={openClose}
                    PaperProps={{style: {backgroundColor: theme.palette.background.default}}}>
                <form name="loginStudent" onSubmit={validateLogin}>
                    <DialogTitle>
                        <Grid container>
                            <Grid item xs={11}>
                                <h2>Student Login</h2>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton onClick={openClose}>
                                    <CloseIcon/>
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
                            required
                            onChange={updateEmail}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            required
                            onChange={updatePassword}
                        />
                        <Button onClick={validateLogin}>Login</Button>
                    </DialogContent>
                </form>
            </Dialog>
        </>
    );
}
