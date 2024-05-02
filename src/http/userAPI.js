import {$authHost, $host} from "./index";
import { jwtDecode, InvalidTokenError } from 'jwt-decode';

export const registration = async (email) => {
    const {data} = await $host.post('api/user/registration', {email, role: 'USER'})
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const logout = async () => {
    localStorage.removeItem('token');
    return { success: true, message: "Logged out successfully" };
}

export const check = async () => {
    try {
        const {data} = await $authHost.get('api/user/auth')
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    }catch (error){
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
        }
    }
}
export const fetchUsers = async () => {
    const {data} = await $authHost.get('api/user/getUsers')
    return data
}
