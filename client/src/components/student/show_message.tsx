import {Button, Card, CardActions, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import {IMessage} from "../../utils/interfaces/IMessage";
import * as country from "../../utils/country_information.json";

export function ShowMessage(props: { msg: IMessage }) {
    let flag = "";
    if(typeof props.msg.language === "string"){
        // @ts-ignore
        flag = country[props.msg.language]["emoji"];
    }
    return (
        <Grid>
            <Button variant="outlined" style={{margin:"1%"}}>Reply</Button>
            <Button variant="outlined" style={{margin:"1%"}}>Delete</Button>
        <Card>
            <CardContent>
                <Grid container>
                    <Grid item xs={10}>
                        <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>
                            Message on {props.msg.date} from:
                        </Typography>
                        <Typography variant="h3" component="div">
                            <p>{props.msg.name}</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h1" component="div">
                            {flag}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body1" style={{whiteSpace: 'pre-line'}}>
                    <p>{props.msg.message}</p>
                </Typography>
            </CardContent>
        </Card>
        </Grid>
    );
}