import React, {useEffect, useMemo, useState} from 'react';
import Grid from '@mui/material/Grid'; // Grid version 2
import {MenuBar} from "./components/MenuBar";
import {Login} from "./components/Login"
import {
    Box, Button,
    Container,
    CssBaseline,
    PaletteColor,
    PaletteColorOptions,
    PaletteMode,
    ThemeProvider,
    useTheme
} from "@mui/material";
import {ThemeOptions, createTheme} from '@mui/material/styles';
import {deepOrange, grey, teal, yellow} from "@mui/material/colors";
import Typography from "@mui/material/Typography";

// export const theme: ThemeOptions = createTheme({
//     palette: {
//         mode:"light",
//         primary: {
//             main: teal[600],
//         },
//         secondary: {
//             main: yellow[500],
//         },
//         background: {
//             default: grey[50],
//             paper: deepOrange[50],
//         },
//     },
// });

export const App: React.FunctionComponent = () => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');

    const primary = ((mode === 'light') ? '#0b4f40' : '#81b29a');
    const secondary = ((mode === 'light') ? '#e3b23c' : '#F03A47');
    const background = ((mode === 'light') ? '#fafafa' : '#1c1c1c');
    const background2 = ((mode === 'light') ? '#f4f1de' : '#424242');

    const t = useTheme();

    const getDesignTokens = (mode: PaletteMode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                    ? {
                        // palette values for light mode
                        primary: {
                            main: '#0b4f40'
                        },
                        secondary: {
                            main: '#e3b23c'
                        },
                        background: {
                            default: '#fafafa',
                            paper: '#f4f1de',
                        },
                    } as PaletteColorOptions
                    : {
                        // palette values for dark mode
                        primary: {
                            main: '#81b29a'
                        },
                        secondary: {
                            main: '#F03A47'
                        },
                        // background:{
                        // default:'#1c1c1c',
                        // paper:'#424242',
                        // },

                    } as PaletteColorOptions
            ),
        },
    });

    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    // const theme: ThemeOptions = createTheme({
    //     palette: {
    //         // mode: mode,
    //         primary: {
    //             main: primary,
    //         },
    //         secondary: {
    //             main: secondary,
    //         },
    //         background: {
    //             default: background,
    //             paper: background2,
    //         },
    //     },
    // });

    console.log(theme.palette)
    // t.palette.mode = mode;
    // theme.palette?.mode = mode;
    // if (theme.palette) {
    //     console.log(theme.palette)
    //     theme.palette.mode = mode;
    //     console.log(theme.palette)
    // }

    const changeMode = () => {
        setMode(prevState => prevState === 'light' ? 'dark' : 'light')
    }

    const buttonStyle = {
        height:"10%",
        width:"20%"
    }

    const pageStyle = {

    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <MenuBar changeMode={changeMode}/>
            {/*<Box textAlign="center" width="100%">*/}
            {/*    <Button variant="contained"> Teachers</Button>*/}
            {/*    <Button variant="contained"> Students</Button>*/}
            {/*</Box>*/}

            {/*</Container> justify="center"*/}
            <Grid container spacing="100" justifyContent="center">
                <Grid item>
                    <Button variant="contained" color="primary">
                        Main call to action
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary">
                        Secondary action
                    </Button>
                </Grid>
            </Grid>
            {/*<div style={pageStyle}>*/}
            {/*    <Button variant="contained" size="large" sx={buttonStyle}> Teachers Sign Up</Button>*/}
            {/*    <Button variant="contained" size="large" sx={buttonStyle}> Teachers Log In</Button>*/}
            {/*</div>*/}
            {/*<Box width="100%" paddingTop="30%" alignContent="center">*/}
            {/*    <Button variant="contained" size="large" sx={buttonStyle}> Teachers Sign Up</Button>*/}
            {/*    <Button variant="contained" size="large" sx={buttonStyle}> Teachers Log In</Button>*/}
            {/*</Box>*/}
            {/*<Grid container spacing="2" paddingTop="50%">*/}
            {/*    <Grid item xs={6} sx={{flexGrow: 1, textAlign: "center"}}>*/}
            {/*        <Button variant="contained" size="large" sx={buttonStyle}> Teachers Sign Up</Button>*/}
            {/*        <Button variant="contained" size="large" sx={buttonStyle}> Teachers Login In</Button>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={6} sx={{flexGrow: 1, textAlign: "center"}}>*/}
            {/*        <Button variant="contained" size="large" sx={buttonStyle}> Students Sign Up</Button>*/}
            {/*        <Button variant="contained" size="large" sx={buttonStyle}> Students Log In</Button>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={6} sx={{flexGrow: 1, textAlign: "center"}}>*/}
            {/*        <Button variant="contained" size="large" sx={buttonStyle}> Teachers Sign Up</Button>*/}
            {/*        <Button variant="contained" size="large" sx={buttonStyle}> Teachers Login In</Button>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={6} sx={{flexGrow: 1, textAlign: "center"}}>*/}
            {/*        <Button variant="contained" size="large" sx={buttonStyle}> Teachers Sign Up</Button>*/}
            {/*        <Button variant="contained" size="large" sx={buttonStyle}> Teachers Login In</Button>*/}
            {/*    </Grid>*/}
                {/*<Button variant="contained"> Teachers</Button>*/}
                {/*<Button variant="contained"> Students</Button>*/}
                {/*<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="primary">*/}
                {/*    Primary*/}
                {/*</Typography>*/}
                {/*<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="secondary">*/}
                {/*    Secondary*/}
                {/*</Typography>*/}
            {/*</Grid>*/}
        </ThemeProvider>
    );
};
