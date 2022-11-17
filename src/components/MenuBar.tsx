import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {useTheme} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface Props {
    changeMode: Function
}

export const MenuBar: React.FC<Props> = ({changeMode}) => {
    const theme = useTheme();

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Pen-Pal for Schools
                    </Typography>
                    <IconButton sx={{ml: 1}} onClick={() => changeMode()} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}