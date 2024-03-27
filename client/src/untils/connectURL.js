import axios from "axios";

export const URL_GET_API = axios.create({
    baseURL: 'http://localhost:3002/home/'
})

export const URL_LOGIN_ADMIN = axios.create({
    baseURL: 'http://localhost:3003/login'
})