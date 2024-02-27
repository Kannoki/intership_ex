import { Device, DeviceType } from "models/device";
import moment from "moment";

export const data: Device[] = [
    {
        key: '1',
        model: 'ASDFGH',
        status: 'Connected',
        expireDate: '1 năm'

    },
    {
        key: '2',
        model: 'ASDFGH',
        status: 'Connected',
        expireDate: '1 ngày'

    },
    {
        key: '3',
        model: 'ASDFGH',
        status: 'Disconnected',
        expireDate: '1 năm'

    },
    {
        key: '4',
        model: 'ASDFGH',
        status: 'Connected',
        expireDate: '1 năm'

    },
    {
        key: '5',
        model: 'ASDFGH',
        status: 'Disconnected',
        expireDate: '1 năm'

    },
    {
        key: '6',
        model: 'ASDFGH',
        status: 'Connected',
        expireDate: '1 năm'

    },
    {
        key: '7',
        model: 'ASDFGH',
        status: 'Connected',
        expireDate: '1 năm'

    },
    {
        key: '8',
        model: 'ASDFGH',
        status: 'Connected',
        expireDate: '1 năm'

    },
    {
        key: '9',
        model: 'ASDFGH',
        status: 'Disconnected',
        expireDate: '1 năm'

    },
    {
        key: '10',
        model: 'ASDFGH',
        status: 'Connected',
        expireDate: '1 năm'

    },
    {
        key: '11',
        model: 'ASDFGH',
        status: 'Disconnected',
        expireDate: '1 năm'

    },
    {
        key: '12',
        model: 'ASDFGH',
        status: 'Disconnected',
        expireDate: '1 năm'

    },
];

export const deviceTypeData: DeviceType[] = [
    {
        key: '1',
        name: 'Energy Device',
        gateWay: true,
        createdAt: moment('10-10-2020', "MM-DD-YYYY").format('L'),
        deviceNumber: 255,
        description: 'Thiết bị đo năng lượng',
        image: 'https://i.pinimg.com/474x/7d/17/88/7d1788bdb070b9813fc5ab531a634618.jpg'
    },
    {
        key: '2',
        name: 'Energy Device',
        gateWay: true,
        createdAt: moment('10-10-2020', "MM-DD-YYYY").format('L'),
        deviceNumber: 600,
        description: 'Thiết bị đo năng lượng',
        image: 'https://i.pinimg.com/474x/7d/17/88/7d1788bdb070b9813fc5ab531a634618.jpg'
    },
    {
        key: '3',
        name: 'Energy Device',
        gateWay: true,
        createdAt: moment('10-10-2020', "MM-DD-YYYY").format('L'),
        deviceNumber: 300,
        description: 'Thiết bị đo năng lượng',
        image: 'https://i.pinimg.com/474x/7d/17/88/7d1788bdb070b9813fc5ab531a634618.jpg'
    },
    {
        key: '4',
        name: 'Energy Device',
        gateWay: true,
        createdAt: moment('10-10-2020', "MM-DD-YYYY").format('L'),
        deviceNumber: 500,
        description: 'Thiết bị đo năng lượng',
        image: 'https://i.pinimg.com/474x/7d/17/88/7d1788bdb070b9813fc5ab531a634618.jpg'
    },
    {
        key: '5',
        name: 'Energy Device',
        gateWay: true,
        createdAt: moment('10-10-2020', "MM-DD-YYYY").format('L'),
        deviceNumber: 400,
        description: 'Thiết bị đo năng lượng',
        image: 'https://i.pinimg.com/474x/7d/17/88/7d1788bdb070b9813fc5ab531a634618.jpg'
    },
    {
        key: '6',
        name: 'Energy Device',
        gateWay: true,
        createdAt: moment('10-10-2020', "MM-DD-YYYY").format('L'),
        deviceNumber: 500,
        description: 'Thiết bị đo năng lượng',
        image: 'https://i.pinimg.com/474x/7d/17/88/7d1788bdb070b9813fc5ab531a634618.jpg'
    }
]