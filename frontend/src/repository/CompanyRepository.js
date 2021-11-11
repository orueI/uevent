import axios from "axios";

export async function getCompany(companyId) {
    const response = await axios.get('http://127.0.0.1:8000/api/companies/' + companyId)
    console.log("getCompany:", response)
    return {
        response: response,
        data: response.data
    }
}