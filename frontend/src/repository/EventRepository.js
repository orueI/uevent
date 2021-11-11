import axios from "axios";

export async function getAllEvents() {
    const response = await axios.get('http://127.0.0.1:8000/api/events')
    console.log("getAllEvents:", response)
    return {
        response: response,
        data: response.data
    }
}