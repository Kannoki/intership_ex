import axiosClient from "./axiosClient"
import {User} from "../models/user"
 
const authApi = {
    login(data: User): Promise<User> {
        const url = 'api/auth/login'
        return axiosClient.post(url, data)
    },
}

export default authApi