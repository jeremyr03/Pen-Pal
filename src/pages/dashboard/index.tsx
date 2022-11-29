// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, {useMemo} from 'react';
import Grid from '@mui/material/Grid'; // Grid version 2
import {MenuBar} from "../../components/MenuBar";
import {EDialog} from "../../lib/EDialog";
import {
    Box,
    Button,
    CssBaseline,
    PaletteColorOptions,
    PaletteMode,
    Stack,
    ThemeProvider,
    Paper
    // useTheme
} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import {TeacherSignup} from "../../components/login/TeacherSignup";
import {TeacherLogin} from "../../components/login/TeacherLogin";
import {StudentSignup} from "../../components/login/StudentSignup";
import {StudentLogin} from "../../components/login/StudentLogin";
import {Footer} from "../../components/Footer";
import {getDesignTokens} from "../../styles/themeDesign";

export default function StudentDashboard() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const [dialog, setDialog] = React.useState<EDialog>(EDialog.empty);

    // Set themes
    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    const changeMode = () => {
        setMode(prevState => prevState === 'light' ? 'dark' : 'light')
    }

    const settingDialog = (d: EDialog) => {
        setDialog(d);
    }

    const divStyle = {
        backgroundColor: theme.palette.background.default,
        paddingBottom: "10%",
    };

    const paperStyle = {
        backgroundColor: theme.palette.background.default,
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <MenuBar changeMode={changeMode}/>
                <div style={divStyle}>
                    <Grid container spacing={30} marginTop="1px">
                        <Grid item xs={3} justifyContent="center">
                            <Paper sx={paperStyle}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        {/*<ButtonBase sx={{ width: 128, height: 128 }}>*/}
                                        {/*    <Img alt="complex" src="/static/images/grid/complex.jpg" />*/}
                                        {/*</ButtonBase>*/}
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1" component="div">
                                                    湯浅けいすけ
                                                </Typography>
                                                {/*<Typography variant="body2" gutterBottom>*/}
                                                {/*    お久しぶり、ジェレミー君！お元気ですか。*/}
                                                {/*</Typography>*/}
                                                <Typography variant="body2" color="text.secondary">
                                                    お久しぶり、ジェレミー君！お元気ですか。
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                                    Remove
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" component="div">
                                                29 November 2022
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={9} justifyContent="center">
                            <p>E</p>
                        </Grid>
                    </Grid>
            </div>
        </ThemeProvider>
    )
}
