import {Button, TextField} from "@mui/material";
import React from "react";

export const BuyEventScreen = ({eventId}) => {
    async function use() {
        // todo not implemented
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
                <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}} onClick={e =>
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