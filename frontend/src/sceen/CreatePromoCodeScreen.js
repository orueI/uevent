import {Button, TextField} from "@mui/material";
import React from "react";

export const CreatePromoCodeScreen = ({eventId}) => {
    function createCompany(arr) {
        // todo not implemented
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