import {getToken} from "../repository/AuthRepository";

export function auth() {
    return {
        headers: {
            'Authorization': `Bearer ` + getToken()
        }
    }
}