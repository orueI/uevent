import {Button, TextField} from "@mui/material";
import React from "react";

export const CreateEventScreen = ({companyId}) => {
    function createEvent(eventName) {

    }

    return (
        <div>
            <h2>Creator event</h2>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}} onClick={e =>
                    createEvent(
                        document.getElementById("editCompanyName").value,
                    )}>Create</Button>
            </div>
        </div>
    )
}