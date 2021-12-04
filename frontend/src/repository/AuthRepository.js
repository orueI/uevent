import axios from "axios";
import baseUrl from "../const";
import Cookies from 'js-cookie'
import {processingRequest} from "./BaseRepository";
import jwt_decode from "jwt-decode";

const tokenJWT = "TOKEN_JWT"
const USER_ID = "USER_ID"

export async function register(login, password, full, email) {
    const response = await axios.post('http://127.0.0.1:8000/api/auth/register', {
        login: login,
        password: password,
        full: full,
        email: email
    })
    processingRequest(response)
    console.log(response)
    return {
        response: response,
        data: response.data
    }
}

export async function login(login, password) {
    const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
        login: login,
        password: password
    })

    console.log(response)
    processingRequest(response)

    const {data} = response
    saveToken(data)
    return data
}

export function logout() {
    rmToken()
    axios.post(baseUrl + 'auth/logout', {}, {
        headers: {
            'Authorization': `Bearer ` + getToken()
        }
    })
}

export const saveToken = (response) => {
    Cookies.set(tokenJWT, response.token)//, {expires: response.expires_in}); todo Need add to response expires_in
    const user = jwt_decode(response.token)
    console.log(user)
    Cookies.set(USER_ID, user.sub)//, {expires: response.expires_in});
}

export function getToken() {
    return Cookies.get(tokenJWT)
}

export function getAuthUserId() {
    return Cookies.get(USER_ID)
}

export const rmToken = () => {
    Cookies.remove(tokenJWT)
    Cookies.remove(USER_ID)
}

export const isLogin = () => {
    return Cookies.get(tokenJWT) != null && Cookies.get(USER_ID) != null
}