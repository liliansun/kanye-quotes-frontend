import axios from 'axios'

const api = axios.create({
    baseURL: process.env.VUE_APP_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.VUE_APP_ACESS_TOKEN
    },
})

export { api as default }
