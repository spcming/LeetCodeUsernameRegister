import apis from './api'
import axios from 'axios'
const ajax = axios.create({
    baseURL:apis.baseURL
})
export const getUserData = ajax.get(apis.getUserData)