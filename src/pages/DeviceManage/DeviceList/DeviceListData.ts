import { Device, DeviceType } from '../../../models/device';
import moment from 'moment';

export const data: Device[] = [
    {
        key: '1',
        model: 'ASDFGH',
        status: 'Connected',
        expireDate: '1 năm',
    },
    {
        key: '2',
        model: 'DSJDSASDFGH',
        status: 'Eror',
        expireDate: '2 năm',
    },
    {
        key: '3',
        model: 'AHUSDFGH',
        status: 'Disconnected',
        expireDate: '1 năm',
    },
];

export const deviceTypeData: DeviceType[] = [
    {
        key: '1',
        name: 'Energy Device',
        gateWay: true,
        createdAt: moment('10-10-2020', 'MM-DD-YYYY').format('L'),
        deviceNumber: 255,
        description: 'Thiết bị đo năng lượng',
        image: 'https://focussolar.vn/wp-content/uploads/2021/09/Thiet-bi-do-dem-thong-minh-FOCUS-SOLAR.png',
    },
];
