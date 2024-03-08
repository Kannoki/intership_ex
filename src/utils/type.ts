export interface DataSourceType {
  key: React.Key;
  name: string;
  email: string;
  phone: string;
  location: string;
  startDate: string;
}

export interface DataTypeTable {
  key?: React.Key;
  name: string;
  numberPhone: string;
  email: string;
  address?: string;
  startDate?: any;
}

export interface UsersTest extends DataTypeTable {
  organization: string;
  service: 'Storage' | 'EMS';
}
