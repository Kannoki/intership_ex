export interface RegisterCharSchema {
    EMS: {value: number, ts: string},
    STORAGE: {value: number, ts: string},
    total: {value: number, ts: string}
}

export interface GroupRegisterSchema {
    group: 'year' | 'month' | 'week' | 'day' | 'hour'
}

export interface ListResponse<T> {
    data: T[];
}