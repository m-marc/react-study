import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
    // @ts-ignore
    body: {success: true}
})

export const requestsAPI = {
    sendStatus(success: boolean) {
        return instance.post('', {success})
    }
}