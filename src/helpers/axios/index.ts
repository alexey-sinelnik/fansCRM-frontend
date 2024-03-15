import axios, { AxiosInstance } from "axios";

const token: string = sessionStorage.getItem('token') as string

export const instanceAuth: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        Authorization: `Bearer ${token}`,
    },
})

export const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000,
    headers: {},
})