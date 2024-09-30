import axios from "axios";

const API_BASE_URL = "http://192.168.0.223/worktruck/hs/dashboard/";

export const baseTransport = axios.create({
    baseURL: API_BASE_URL,
    timeout: 3000,
});

export const get = baseTransport.get;
export const post = baseTransport.post;
