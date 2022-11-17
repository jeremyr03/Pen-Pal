import React, {useMemo} from 'react';
import Grid from '@mui/material/Grid'; // Grid version 2
import {MenuBar} from "./components/MenuBar";
import {Dialog} from "./components/Login/Dialog";
import {
    Box,
    Button,
    CssBaseline,
    PaletteColorOptions,
    PaletteMode,
    Stack,
    ThemeProvider,
    // useTheme
} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import {TeacherSignup} from "./components/Login/TeacherSignup";
import {TeacherLogin} from "./components/Login/TeacherLogin";
import {StudentSignup} from "./components/Login/StudentSignup";
import {StudentLogin} from "./components/Login/StudentLogin";

export const App: React.FunctionComponent = () => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const [dialog, setDialog] = React.useState<Dialog>(Dialog.empty);

    // const primary = ((mode === 'light') ? '#0b4f40' : '#81b29a');
    // const secondary = ((mode === 'light') ? '#e3b23c' : '#F03A47');
    // const background = ((mode === 'light') ? '#fafafa' : '#1c1c1c');
    // const background2 = ((mode === 'light') ? '#f4f1de' : '#424242');

    // Set themes
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
    const changeMode = () => {
        setMode(prevState => prevState === 'light' ? 'dark' : 'light')
    }

    const settingDialog = (d:Dialog) => {
      setDialog(d);
    }

    // clip-path: polygon(0 0,100% 0,100% 85%,0 100%); backgroundColor:"#81b29a",

    const divStyle = {
        backgroundColor: theme.palette.background.default,
        paddingBottom:"10%",
        clipPath:"polygon(0 0,100% 0,100% 85%,0 100%)"
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <MenuBar changeMode={changeMode}/>
                <div style={divStyle}>
                    <Grid container spacing={30} justifyContent="center" marginTop="1px">
                        <Grid item>
                            <Box>
                                <Stack spacing={1}>
                                    <Typography variant="h1" component="div" sx={{flexGrow: 1}} color="textPrimary">
                                        Teachers
                                    </Typography>
                                    <Button variant="contained"
                                            color="primary"
                                            onClick={()=>{settingDialog(Dialog.TeacherS)}}>
                                        Sign up
                                    </Button>
                                    <Button variant="outlined"
                                            color="primary"
                                            onClick={()=>{settingDialog(Dialog.TeacherL)}}>
                                        Log in
                                    </Button>
                                    <TeacherSignup openState={dialog} settingState={settingDialog}/>
                                    <TeacherLogin openState={dialog} settingState={settingDialog}/>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box>
                                <Stack spacing={1}>
                                    <Typography variant="h1" component="div" sx={{flexGrow: 1}} color="textPrimary">
                                        Students
                                    </Typography>
                                    <Button variant="contained"
                                            color="primary"
                                            onClick={()=>{settingDialog(Dialog.StudentS)}}>
                                        Sign up
                                    </Button>
                                    <Button variant="outlined"
                                            color="primary"
                                            onClick={()=>{settingDialog(Dialog.StudentL)}}>
                                        Log in
                                    </Button>
                                    <StudentSignup openState={dialog} settingState={settingDialog}/>
                                    <StudentLogin openState={dialog} settingState={settingDialog}/>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
            </div>

        </ThemeProvider>
    );
};
