import axiosClient from "./axiosClient"
import {GroupRegisterSchema, ListResponse, RegisterCharSchema} from "../models/chart"
 
const chartApi = {
    getChartApi(): Promise<ListResponse<RegisterCharSchema>> {
        const url = 'api/register/chart'
        return axiosClient.get(url,  {
            params: {
              group: 'day'
            }
        })
    },
}

export default chartApi