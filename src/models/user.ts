export interface User {
    username: string;
    password: string;
}

export interface DataType {
    key?: React.Key;
    name: string;
    numberPhone: string;
    email: string;
    address?: string;
    startDate: any;
}

export interface TestUser extends DataType {
   organization: string;
   service: 'Storage' | 'EMS';
}