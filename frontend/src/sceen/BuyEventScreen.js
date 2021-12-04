import {Button, TextField} from "@mui/material";
import React from "react";
import {changeScreen} from "../utils/Windows";
import {subscribe} from "../repository/EventRepository";

export const BuyEventScreen = ({eventId}) => {
    async function use(arr) {
        // const arg = {
        //     number: arr[0],
        //     expiration_date: arr[1],
        //     cvv: arr[2],
        //     notify: 1,
        //     showUser: 1,
        // }
        // console.log(arg)/////
        // const response = await axios.post(
        //     'http://127.0.0.1:8000/api/subscribed/' + eventId + "/buy",
        //     arg,
        //     auth()
        await subscribe(eventId)
        changeScreen("/")
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