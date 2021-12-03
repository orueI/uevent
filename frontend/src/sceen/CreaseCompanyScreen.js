import {Button, TextField} from "@mui/material";
import React from "react";
import axios from "axios";
import {auth} from "../utils/Request";
import {changeScreen} from "../utils/Windows";

export const CreaseCompanyScreen = () => {
    function createCompany(companyName, companyEmail, companyLocation, companyDescription) {
        const response = axios.post(
            'http://127.0.0.1:8000/api/companies/',
            {
                title: companyName,
                email: companyEmail,
                location: companyLocation,
                description: companyDescription
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
                <TextField id={"editCompanyName"} placeholder={"Company name"}/>
            </div>
            <div>
                <TextField id={"editCompanyEmail"} placeholder={"Company email"}/>
            </div>
            <div>
                <TextField id={"editCompanyLocation"} placeholder={"Company location"}/>
            </div>
            <div>
                <TextField id={"editCompanyDescription"} placeholder={"Company description"}/>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}} onClick={e =>
                    createCompany(
                        document.getElementById("editCompanyName").value,
                        document.getElementById("editCompanyEmail").value,
                        document.getElementById("editCompanyLocation").value,
                        document.getElementById("editCompanyDescription").value,
                    )}>Create</Button>
            </div>
        </div>
    )
}