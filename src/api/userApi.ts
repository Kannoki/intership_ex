import axios, { AxiosResponse } from 'axios';
import { User } from '../types/userType';

interface UserDataFromAPI {
    users: User[];
}

interface LoginCredentials {
    username: string;
    password: string;
}

const login = async (credentials: LoginCredentials): Promise<User | null> => {
    try {
        const response: AxiosResponse<UserDataFromAPI> = await axios.get('https://dummyjson.com/users');
        const users = response.data.users;
        const user = users.find(user => user.username === credentials.username && user.password === credentials.password);
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Login failed:', error);
        return null;
    }
};

export default login;
