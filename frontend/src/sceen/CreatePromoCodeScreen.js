import {Button, TextField} from "@mui/material";
import React from "react";
import axios from "axios";
import {auth} from "../utils/Request";
import {changeScreen} from "../utils/Windows";

export const CreatePromoCodeScreen = ({eventId}) => {
    async function createCompany(arr) {
        const response = await axios.post(
            'http://127.0.0.1:8000/api/subscribed/' + eventId + "/buy",
            {
                event_id: eventId,
                code: arr[0],
                percent: arr[1],
            },
            auth()
        ).then((response) => {
            console.log(response)
            changeScreen("/")
        }).catch((e) => {
            console.log(e)
            alert(e)
        })
    }

    return (
        <div>
            <h2>Creator company</h2>
            <div>
                <TextField id={"editCompanyName"} placeholder={"Promo code - code"}/>
            </div>
            <div>
                <TextField id={"editCompanyEmail"} placeholder={"Promo code - percent"}/>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}} onClick={e =>
                    createCompany(
                        [
                            document.getElementById("editCompanyName").value,
                            document.getElementById("editCompanyEmail ").value,
                        ]
                    )
                }>Create</Button>
            </div>
        </div>
    )
}