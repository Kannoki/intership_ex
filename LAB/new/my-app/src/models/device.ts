export interface Device {
    key?: string;
    model: string;
    status: 'Connected' | 'Disconnected' | 'Eror';
    expireDate: string;
}

export interface DeviceType {
    key: string;
    name: string;
    gateWay: boolean;
    createdAt: any;
    deviceNumber: number;
    description: string;
    image: string;
}