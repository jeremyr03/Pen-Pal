// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, {useMemo} from 'react';
import Grid from '@mui/material/Grid'; // Grid version 2
import {MenuBar} from "../components/MenuBar";
import {EDialog} from "../lib/EDialog";
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
import {TeacherSignup} from "../components/login/TeacherSignup";
import {TeacherLogin} from "../components/login/TeacherLogin";
import {StudentSignup} from "../components/login/StudentSignup";
import {StudentLogin} from "../components/login/StudentLogin";
import {Footer} from "../components/Footer";

export default function Home() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const [dialog, setDialog] = React.useState<EDialog>(EDialog.empty);

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

  const settingDialog = (d: EDialog) => {
    setDialog(d);
  }

  const divStyle = {
    backgroundColor: theme.palette.background.default,
    paddingBottom: "10%",
    clipPath: "polygon(0 0,100% 0,100% 85%,0 100%)"
  };
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MenuBar changeMode={changeMode}/>
        <div style={{backgroundColor: "#81b29a"}}>
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
                            onClick={() => {
                              settingDialog(EDialog.TeacherS)
                            }}>
                      Sign up
                    </Button>
                    <Button variant="outlined"
                            color="primary"
                            onClick={() => {
                              settingDialog(EDialog.TeacherL)
                            }}>
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
                            onClick={() => {
                              settingDialog(EDialog.StudentS)
                            }}>
                      Sign up
                    </Button>
                    <Button variant="outlined"
                            color="primary"
                            onClick={() => {
                              settingDialog(EDialog.StudentL)
                            }}>
                      Log in
                    </Button>
                    <StudentSignup openState={dialog} settingState={settingDialog}/>
                    <StudentLogin openState={dialog} settingState={settingDialog}/>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={10} justifyContent="center">
              <Grid item xs={12}>
                <Typography variant="h2"
                            component="div"
                            marginTop="10%"
                            sx={{flexGrow: 1}}
                            textAlign={"center"}
                            color={"black"}>
                  A Penpal Application for schools
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1"
                            component="div"
                            sx={{flexGrow: 1}}
                            textAlign="center"
                            paddingLeft="10%"
                            paddingRight="10%"
                            paddingBottom="5%"
                            color={"black"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </ThemeProvider>
  )
}
