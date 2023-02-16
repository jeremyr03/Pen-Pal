import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import {Paper} from "@mui/material";
import {IMessage} from "../../lib/interfaces/IMessage";

const paperStyle = {
    // backgroundColor: "#f8f8f8",
    // elevation:"24",
}

export function PreviewMessage(props: any) {

    const make_preview = (message: IMessage) => {
        return (
            <Grid xs={12} item onClick={() => {
                props.whenClick(message)
            }}
            >
                <Paper sx={paperStyle} style={{overflow: "hidden", textOverflow: "ellipsis"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container marginLeft={"5%"}>
                            <Grid item container direction="column" spacing={2}>
                                <Grid item>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {message.name}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth>
                                    <Typography maxHeight={"4em"} style={{
                                        textOverflow: "ellipsis",
                                        overflow: "hidden"
                                    }} variant="body2" color="text.secondary">
                                        {message.message}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item paddingTop={"5%"}>
                                <Typography variant="subtitle1" component="div">
                                    {message.date}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )
    }

    return (
        <Grid container spacing={5} paddingLeft={"5%"}>
            {props.msg.map((message: any) => {
                return make_preview(message);
            })}
        </Grid>
    );
}