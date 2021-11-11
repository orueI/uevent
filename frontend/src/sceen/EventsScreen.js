import {useEffect, useState} from "react";
import {Events} from "../view/Events";
import {getAllEvents} from "../repository/EventRepository";

export const EventsScreen = () => {
    const [events, setEvents] = useState([])
    useEffect(async () => {
        const {data} = await getAllEvents()
        setEvents(data)
    }, [])
    return (
        <div>
            <Events events={events}/>
        </div>
    )
}