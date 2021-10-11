import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})
type ResponseType = {
    data: {
        errorText: string
        info: string
        yourBody: BodyType
        yourQuery: object
    }
}
export type BodyType = {
    success: boolean
}

export const requestAPI = {
    authTest(body: BodyType) {
        return instance.post<BodyType, ResponseType>('auth/test', body).then(res => res.data)
    }
}