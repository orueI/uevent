import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import {isLogin} from "../repository/AuthRepository";
import {getCompany} from "../repository/CompanyRepository";

export const Event = ({event}) => {
    const [company, setCompany] = useState(null)

    function subscribe() {
        // TODO: 30.10.21 not yet implemented
    }

    useEffect(async () => {
            setCompany((await getCompany(event.company_id)).data)
        },
        []
    )
    // console.log(eventState)
    return (
        <div>
            <h2>{event?.title}</h2>
            <p>{event?.description}</p>
            {company != null &&
            <p> Company: {company?.title}</p>
            }
            <p>Price:{event?.price}$</p>
            {isLogin() &&
            <Button onClick={() => {
                subscribe()
            }}>
                Subscribe
            </Button>
            }
        </div>
    )
}