import axios from "axios";
import {processingRequest} from "./BaseRepository";
import {auth} from "../utils/Request";

export async function getCompany(companyId) {
    const response = await axios.get('http://127.0.0.1:8000/api/companies/' + companyId)
    processingRequest(response)
    console.log("getCompany:", response)
    return {
        response: response,
        data: response.data
    }
}

export async function create(companyName, companyEmail, companyLocation, companyDescription) {
    const response = await axios.post(
        'http://127.0.0.1:8000/api/companies/',
        {
            title: companyName,
            email: companyEmail,
            location: companyLocation,
            description: companyDescription
        },
        auth()
    )
    processingRequest(response)
    console.log("getCompany:", response)
    return {
        response: response,
        data: response.data
    }
}