import axios from "axios";
import baseUrl from "../const";
import Cookies from 'js-cookie'
import {request} from "./BaseRepository";

const tokenJWT = "TOKEN_JWT"
const USER_ID = "USER_ID"

export async function register(login, password, full, email) {
    const response = await request(async () => {
        await axios.post('http://127.0.0.1:8000/api/auth/register', {
            login: login,
            password: password,
            full: full,
            email: email
        })
    })
    return {
        response: response,
        data: response.data
    }
}

export async function login(login, password) {
    const response = await request(async () => {
        await axios.post(baseUrl + 'http://127.0.0.1:8000/api/auth/login/', {
            login: login,
            password: password
        })
    })
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
    Cookies.set(tokenJWT, response.access_token, {expires: response.expires_in});
    Cookies.set(USER_ID, response.user.id, {expires: response.expires_in});
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
    return Cookies.get(tokenJWT) != null
}