import axios from "axios";
import {auth} from "../utils/Request";
import {processingRequest} from "./BaseRepository";

export async function getAllEvents() {
    const response = await axios.get('http://127.0.0.1:8000/api/events')
    processingRequest(response)
    console.log("getAllEvents:", response)
    return response
}

export async function getCompanyEvents() {
    const response = await axios.get('http://127.0.0.1:8000/api/events')
    processingRequest(response)
    console.log("getAllEvents:", response)
    return response
}

export async function subscribe(eventId) {
    const response = await axios.post(
        'http://127.0.0.1:8000/api/subscribed/' + eventId,
        {
            notify: 1,
            showUser: 1
        },
        auth()
    )
    processingRequest(response)
    console.log("subscribe:", response)
    return response
}

export async function create(eventId) {
    const response = await axios.post(
        'http://127.0.0.1:8000/api/subscribed/' + eventId,
        {
            notify: 1,
            showUser: 1
        },
        auth()
    )
    processingRequest(response)
    console.log("subscribe:", response)
    return response
}