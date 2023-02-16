import React from "react";
import {AppBar} from "@mui/material";
import Typography from "@mui/material/Typography";

export const Footer: React.FunctionComponent = () => {

    const footerPosition = {
        top:"auto",
        bottom:0,
        position:"sticky"
    };

    return(
    <AppBar sx={footerPosition}>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Created by Jeremy Roe
            </Typography>
    </AppBar>
    )
}