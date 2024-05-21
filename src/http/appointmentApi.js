import {$authHost} from "./index";
import { jwtDecode, InvalidTokenError } from 'jwt-decode';
export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}
export const fetchTypes = async () =>{
    const {data} = await $authHost.get('api/type')
    return data
}
export const createActivity = async (activity) => {
    const {data} = await $authHost.post('api/activity', activity)
    return data
}
export const fetchActivity = async () => {
    const {data} = await $authHost.get('api/activity')
    return data
}
export const createAppointment = async (appointment) => {
    const {data} = await $authHost.post('api/appointment')
    return data
}
export const fetchAppointment = async () => {
    const {data} = await $authHost.get('api/appointment')
    return data
}
export const fetchOneAppointment = async (id) => {
    const {data} = await $authHost.get('api/appointment'+ id)
    return data
}