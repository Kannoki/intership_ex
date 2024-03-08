export interface DeviceType {
  key?: string;
  model: string;
  status: 'Connected' | 'Disconnected';
  expireDate: string;
}
