import {useEffect, useState} from "react";
import {Events} from "../view/Events";
import axios from "axios";

export const CategoryEventsScreen = ({categoryId}) => {
    const [events, setEvents] = useState(null)
    const [category, setCategory] = useState(null)
    useEffect(async () => {
        setCategory((await axios.get('http://127.0.0.1:8000/api/categories/' + categoryId)).data)
        const event = await axios.get('http://127.0.0.1:8000/api/events/category/' + categoryId)
        setEvents(event.data)
    }, [])
    return (
        <div>
            <h1>Category name {category?.title}</h1>
            {events != null &&
            (
                <div>
                    <h2>Category's events</h2>
                    <Events events={events}/>
                </div>
            )
            }
        </div>
    )
}