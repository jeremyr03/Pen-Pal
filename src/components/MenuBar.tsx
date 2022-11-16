import React, {PropsWithChildren, useState} from "react";
import {CommandBar, ICommandBarItemProps} from "@fluentui/react/lib/CommandBar";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as colours from "../colours.json";
import Popup from "reactjs-popup";
import {Login} from "./Login";
import {Switch, useTheme} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface Props{
    changeMode:Function
}

export const MenuBar: React.FC<Props> = ({changeMode}) => {
    const theme = useTheme();
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    // theme.palette.mode = mode;

    // const changeMode = () =>{
    //     setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    // }
    console.log(changeMode)

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Pen-Pal for Schools
              </Typography>
                <IconButton sx={{ ml: 1 }} onClick={()=>changeMode()} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <Login/>
            </Toolbar>
          </AppBar>
        </Box>
    );
}