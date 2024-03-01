import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";

interface Tenant {
    id: string;
    name: string;
    email: string;
    phone: string;
    address?: string;
    city?: string;
    country?: string;
    created_time: string;
}

const fetchDataTenant = async (accessToken: string): Promise<Tenant[]> => {
    try {
        const response: AxiosResponse<Tenant[]> = await axiosClient.get('/api/tenant');
        return response.data;
    } catch (error) {
        throw new Error(`Fetch data failed: ${error}`);
    }
};

export default fetchDataTenant