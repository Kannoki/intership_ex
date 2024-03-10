export interface DeviceType {
  key?: string;
  model: string;
  status: 'Connected' | 'Disconnected';
  expireDate: string;
}

export interface DeviceTypeList {
  key: string;
  name: string;
  gateWay: boolean;
  model?: string;
  createdAt: any;
  deviceNumber: number;
  description: string;
  image: string;
}
