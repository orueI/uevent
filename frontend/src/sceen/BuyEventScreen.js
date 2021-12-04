import {Button, TextField} from "@mui/material";
import React from "react";
import {changeScreen} from "../utils/Windows";
import axios from "axios";
import {auth} from "../utils/Request";

export const BuyEventScreen = ({eventId}) => {
    async function use() {
        const response = await axios.post(
            'http://127.0.0.1:8000/api/subscribed/' + eventId,
            {
                notify: 1,
                showUser: 1
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
            <h2>Buy event</h2>
            <div>
                <TextField id={"editCardNum"} placeholder={"Card num"}/>
            </div>
            <div>
                <TextField id={"editCardDate"} placeholder={"Card date"}/>
            </div>
            <div>
                <TextField id={"editCarCVC"} placeholder={"Card cvc"}/>
            </div>
            <div>
                <TextField id={"editPromoCode"} placeholder={"Promo code"}/>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}} onClick={() =>
                    use(
                        [
                            document.getElementById("editCardNum").value,
                            document.getElementById("editCardDate").value,
                            document.getElementById("editCarCVC").value,
                            document.getElementById("editPromoCode").value,
                        ]
                    )
                }>Create</Button>
            </div>
        </div>
    )
}