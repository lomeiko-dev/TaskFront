import axios from "axios";
import {BASE_URL} from "./consts";

export const apiInstance = axios.create({
    baseURL: BASE_URL,
})