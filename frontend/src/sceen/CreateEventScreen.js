import {Button, TextField} from "@mui/material";
import React from "react";
import axios from "axios";
import {auth} from "../utils/Request";
import {changeScreen} from "../utils/Windows";

export const CreateEventScreen = ({companyId}) => {
    function createEvent(array) {
        axios.post(
            'http://127.0.0.1:8000/api/companies/',
            {
                title: array[0],
                description: array[1],
                tickets: array[2],
                price: array[3],
                category_id: array[4],
                startTime: array[5],
                showEventVisitors: array[6],
                company_id: companyId,
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
            <h2>Creator event</h2>
            <div>
                <TextField
                    id={"editComp                                                                                                                                                                                                                                                                                                                                                                                                                                                    anyName"}
                    placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompany_title"} placeholder={"Company title"}/>
            </div>
            <div>
                <TextField id={"editCompany_description"} placeholder={"Company description"}/>
            </div>
            <div>
                <TextField id={"editCompany_tickets"} placeholder={"Company tickets"}/>
            </div>
            <div>
                <TextField id={"editCompany_price"} placeholder={"Company price"}/>
            </div>
            <div>
                <TextField id={"editCompany_category_id"} placeholder={"Company category id"}/>
            </div>
            <div>
                <TextField id={"editCompany_startTime"} placeholder={"Company startTime"}/>
            </div>
            <div>
                <TextField id={"editCompany_showEventVisitors"} placeholder={"Company showEventVisitors"}/>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}} onClick={e =>
                    createEvent(
                        [
                            document.getElementById("editCompany_title").value,
                            document.getElementById("editCompany_description").value,
                            document.getElementById("editCompany_tickets").value,
                            document.getElementById("editCompany_price").value,
                            document.getElementById("editCompany_category_id").value,
                            document.getElementById("editCompany_startTime").value,
                            document.getElementById("editCompany_showEventVisitors").value,
                            document.getElementById("editCompany_company_id").value,
                        ]
                    )}>Create</Button>
            </div>
        </div>
    )
}