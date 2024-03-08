import { ListResponse, RegisterCharSchema } from '../lib/chart';
import axiosClient from './axios';

const chartApi = {
  getChartApi(): Promise<ListResponse<RegisterCharSchema>> {
    const url = 'api/register/chart';
    return axiosClient.get(url, {
      params: {
        group: 'day',
      },
    });
  },
};

export default chartApi;
