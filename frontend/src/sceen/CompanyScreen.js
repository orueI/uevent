import {useEffect, useState} from "react";
import {getCompany} from "../repository/CompanyRepository";
import {Events} from "../view/Events";
import {changeScreen} from "../utils/Windows";
import Button from "@mui/material/Button";
import axios from "axios";
import {getAuthUserId, isLogin} from "../repository/AuthRepository";

export const CompanyScreen = ({companyId}) => {
    const [events, setEvents] = useState(null)
    const [company, setCompany] = useState(null)
    useEffect(async () => {
        let {data} = await getCompany(companyId)
        setCompany(data)
        const event = await axios.get('http://127.0.0.1:8000/api/events/company/' + companyId)
        setEvents(event.data)
    }, [])
    return (
        <div>
            <h1>Company name {company?.title}</h1>
            <p>Company from {company?.location}</p>
            <p>{company?.description}</p>
            {isLogin() && company.user_id === getAuthUserId() &&
            (
                <Button onClick={() => changeScreen("/create/event/" + companyId)}>Create event</Button>
            )
            }
            {events != null &&
            (
                <div>
                    <h2>Company's events</h2>
                    <Events events={events}/>
                </div>
            )
            }
        </div>
    )
}