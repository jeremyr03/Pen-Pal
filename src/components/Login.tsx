import React, {useEffect, useRef, useState} from "react";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    useTheme,
    Typography,
    Dialog,
    DialogTitle,
    TextField, DialogContent
} from "@mui/material";

export const Login: React.FunctionComponent = () => {
    const [open, setOpen] = useState(false);

    const openClose = () => {
        setOpen(prevState => !prevState)
    };

    return (
        <>
            <Button color="inherit" onClick={openClose}>Login</Button>
            <Dialog open={open} onClick={openClose}>
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
        // <Popup trigger={<Button color="inherit">Login</Button>} arrow={false}>{(close: () => void) => (
        //     <div style={popupStyles}>
        //         <Card sx={loginStyles} style={{backgroundColor: theme.palette.background.default}}>
        //             <CardContent>
        //                 <Typography>
        //                     Login
        //                 </Typography>
        //             </CardContent>
        //             <CardActions>
        //                 <Button size="small" onClick={() => {
        //                     console.log("closed")
        //                     close()
        //                 }}>Click</Button>
        //             </CardActions>
        //         </Card>
        //     </div>
        // )}</Popup>
    );
}
