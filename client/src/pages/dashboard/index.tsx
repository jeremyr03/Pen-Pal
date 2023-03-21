import React, {useMemo, useState} from 'react';
import Grid from '@mui/material/Grid'; // Grid version 2
import {MenuBar} from "../../components/MenuBar";
import {PreviewMessage} from "../../components/student/preview_message";
import {EDialog} from "../../utils/EDialog";
import {
    Button,
    CssBaseline,
    ThemeProvider,
    Divider, Box, PaletteMode, PaletteColorOptions
    // useTheme
} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import {getDesignTokens} from "../../styles/themeDesign";
import {IMessage} from "../../utils/interfaces/IMessage";
import {ShowMessage} from "../../components/student/show_message";
import {useAuth0} from "@auth0/auth0-react";

const _ = require('lodash');
import useSWR from 'swr';
import {useUser} from "@auth0/nextjs-auth0";
import {useRouter} from "next/navigation";
import axios from "axios";
import {User} from "../../database/entities/User";
import {AppDataSource} from "../../database/data-source";
import {Message} from "../../database/entities/Message";
import {userServices} from "../../utils/userService";

export default function StudentDashboard() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const [dialog, setDialog] = React.useState<EDialog>(EDialog.empty);
    const [displayMessage, setDisplayMessage] = useState<IMessage | undefined>(undefined);
    const [messages, setMessages] = useState<Message[]>([]);
    const {user, error, isLoading, checkSession} = useUser();
    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    const router = useRouter();

    const changeMode = () => {
        setMode(prevState => prevState === 'light' ? 'dark' : 'light')
    }

    const settingDialog = (d: EDialog) => {
        setDialog(d);
    }

    const changeDisplayMessage = (m: IMessage | undefined) => {
        setDisplayMessage(prevState => {
            console.log(prevState, m);
            if (_.isEqual(prevState, m)) {
                return undefined;
            } else return m;
        });
    }

    const divStyle = {
        backgroundColor: theme.palette.background.default,
        paddingTop: "4rem",
    };

    // login
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    const userLogin = async (id:string) =>{

    }
    // console.log(user?.sub)

    const getUserRoles = async (id: string) => {
        userServices.addUserIfNotExist(id)
        // try {
        //     // change to await fetch
        //     const response = await axios.get(`/api/user/${id}`);
        //     console.log(response.data);
        //     return response.data as User
        // } catch (error) {
        //     // @ts-ignore
        //     console.log(error.message);
        //     return null
        // }
    };

    if(user?.sub){getUserRoles(user.sub).then(r => console.log(r))}

    // const sampleMessages: Message[] = [
    //     {
    //         name: "湯浅けいすけ",
    //         message: "お久しぶり、ジェレミー君！お元気ですか。",
    //         date: "29 November 2022",
    //         language: "JP"
    //     },
    //     {
    //         name: "Julie d'Avrincourt",
    //         message: "Salut Jérémie,\n\n" +
    //             " ça va?\n Je veux te dire que j'irais à Londres la semaine prochaine. Veux-tu qu'on se rencontre?" +
    //             "\n\nde Julie",
    //         date: "10 January 2022",
    //         language: "MU"
    //     },
    //     {
    //         name: "Stromae",
    //         message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Nunc lobortis mattis aliquam faucibus purus in. Volutpat sed cras ornare arcu dui vivamus. Pretium viverra suspendisse potenti nullam ac tortor vitae. Vitae et leo duis ut diam. Ut faucibus pulvinar elementum integer enim neque volutpat. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Quam pellentesque nec nam aliquam sem et tortor consequat id. Odio facilisis mauris sit amet. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Tellus molestie nunc non blandit massa enim nec dui nunc. Dui sapien eget mi proin sed libero enim sed faucibus. Nisi quis eleifend quam adipiscing vitae. Iaculis eu non diam phasellus vestibulum lorem sed risus. Congue eu consequat ac felis donec et odio. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Nulla facilisi nullam vehicula ipsum a arcu. Nullam ac tortor vitae purus.\n" +
    //             "\n" +
    //             "Et tortor at risus viverra adipiscing at in tellus. Velit laoreet id donec ultrices tincidunt. Massa sapien faucibus et molestie ac feugiat. Nullam vehicula ipsum a arcu cursus vitae congue. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Ipsum dolor sit amet consectetur adipiscing elit. Ac turpis egestas integer eget aliquet nibh praesent tristique. Lectus nulla at volutpat diam ut venenatis tellus in metus. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Sem integer vitae justo eget magna fermentum. Morbi blandit cursus risus at ultrices. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Dolor purus non enim praesent elementum facilisis leo. Quis vel eros donec ac odio tempor orci dapibus ultrices. Gravida quis blandit turpis cursus.\n" +
    //             "\n" +
    //             "Pellentesque habitant morbi tristique senectus et. Quisque id diam vel quam. Neque vitae tempus quam pellentesque nec nam aliquam. Eros in cursus turpis massa. Nibh sit amet commodo nulla facilisi nullam vehicula. At urna condimentum mattis pellentesque id. Vulputate dignissim suspendisse in est ante. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Enim neque volutpat ac tincidunt vitae semper quis lectus. Orci ac auctor augue mauris augue neque gravida in fermentum. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Viverra adipiscing at in tellus integer feugiat scelerisque. Risus ultricies tristique nulla aliquet enim tortor at. Dui faucibus in ornare quam viverra orci sagittis eu. Nunc non blandit massa enim nec. Bibendum est ultricies integer quis auctor elit sed vulputate mi.",
    //         date: "3 December 2021",
    //         language: ""
    //     },
    // ];

    // {/*const postMessages = async () => {*/}
    // {/*    // sampleMessages.map(value => {*/}
    // {/*    //     console.log(JSON.stringify(JSON.stringify(value)))*/}
    // {/*    // })*/}
    // {/*    for (let i = 0; i < sampleMessages.length; i++) {*/}
    // {/*        await fetch('/api/message/', {*/}
    // //             method: 'POST',
    // //             headers: {
    // //                 'Content-Type': 'application/json',
    // {/*            },*/}
    // {/*            body: JSON.stringify(sampleMessages[i]),*/}
    // {/*        })*/}
    //         // try {
    //         //     const response = await axios.post(`/api/message/send`, JSON.stringify(JSON.stringify(sampleMessages[i])));
    //         //     console.log(response.data);
    //         //     // return response.data as User;
    //         // } catch (error) {
    //         //     // @ts-ignore
    //         //     console.log(error.message);
    //         //     // return null;
    //         // }
    //     }
    // };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <MenuBar changeMode={changeMode}/>
            <div style={divStyle}>
                <Grid container spacing={3} marginTop="1px" alignItems="flex-start">
                    <Grid item xs={3} justifyContent="center" container>
                        <Grid item xs={12} justifyContent="center" container paddingBottom={"5%"}>
                            <Grid item>
                                <Button>
                                    Inbox
                                </Button>
                            </Grid>
                            <Divider orientation="vertical" flexItem/>
                            <Grid item>
                                <Button>
                                    Sent
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>
                        <Grid item xs={12} paddingTop={"10%"}>
                            <PreviewMessage msg={[]} whenClick={changeDisplayMessage}/>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Divider orientation="vertical"/>
                    </Grid>
                    <Grid item xs={8}>
                        {
                            displayMessage ? <ShowMessage msg={displayMessage}/> :
                                <Box display="flex" justifyContent="center"><h3 style={{paddingTop: "10%"}}>Click on a
                                    message to view it.</h3></Box>
                        }
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    )
}
