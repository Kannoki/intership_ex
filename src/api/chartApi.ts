import axiosClient from "./axiosClient";

const fetchDataChart = async (accessToken: string) => {
    try {
        const respone = await axiosClient.get('/api/register/chart');
        return respone
    } catch (error) {
        throw new Error(`Fetch data failed: ${error}`);
    }
}

export default fetchDataChart;
