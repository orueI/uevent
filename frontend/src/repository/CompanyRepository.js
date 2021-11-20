import axios from "axios";
import {request} from "./BaseRepository";

export async function getCompany(companyId) {
    const response = await request(async () => {
        await axios.get('http://127.0.0.1:8000/api/companies/' + companyId)
    })
    console.log("getCompany:", response)
    return {
        response: response,
        data: response.data
    }
}