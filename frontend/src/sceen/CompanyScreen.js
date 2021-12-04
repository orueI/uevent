import {useEffect, useState} from "react";
import {getAllEvents} from "../repository/EventRepository";
import {getCompany} from "../repository/CompanyRepository";
import {Events} from "../view/Events";
import {changeScreen} from "../utils/Windows";
import Button from "@mui/material/Button";

export const CompanyScreen = ({companyId}) => {
    const [events, setEvents] = useState(null)
    const [company, setCompany] = useState(null)
    useEffect(async () => {
        let {data} = await getCompany(companyId)
        setCompany(data)
        const event = await getAllEvents()
        setEvents(event.data)
    }, [])
    return (
        <div>
            <h1>Company name {company?.title}</h1>
            <p>Company from {company?.location}</p>
            <p>{company?.description}</p>
            <Button onClick={() => changeScreen("/create/event/" + companyId)}>Create event</Button>
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