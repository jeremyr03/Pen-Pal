import React, {useMemo} from 'react';
import Grid from '@mui/material/Grid'; // Grid version 2
import {MenuBar} from "../components/MenuBar";
import {EDialog} from "../utils/EDialog";
import {
    Box,
    Button, CircularProgress,
    CssBaseline,
    PaletteColorOptions,
    PaletteMode,
    Stack,
    ThemeProvider,
} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import {TeacherSignup} from "../components/login/TeacherSignup";
import {TeacherLogin} from "../components/login/TeacherLogin";
import {StudentSignup} from "../components/login/StudentSignup";
import {StudentLogin} from "../components/login/StudentLogin";
import {getDesignTokens} from "../styles/themeDesign";
import {Footer} from "../components/Footer";
import {useUser} from "@auth0/nextjs-auth0";
import {useRouter} from "next/navigation";

export default function Home() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const [dialog, setDialog] = React.useState<EDialog>(EDialog.empty);

    const {user, error, isLoading} = useUser();
    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    const router = useRouter();

    const changeMode = () => {
        setMode(prevState => prevState === 'light' ? 'dark' : 'light')
    }

    // login
    if (isLoading) return <CircularProgress />;
    if (error) return <div>{error.message}</div>;

    const settingDialog = (d: EDialog) => {
        setDialog(d);
    }

    const divStyle = {
        backgroundColor: theme.palette.background.default,
        paddingBottom: "10%",
        clipPath: "polygon(0 0,100% 0,100% 85%,0 100%)"
    };

    return (!user) ? (
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
                                            href="/api/auth/login"
                                            onClick={() => {
                                                // settingDialog(EDialog.StudentL)
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
    ) : (router.push("/dashboard"));
}
