export interface ChartData {
    EMS: { value: number; ts: number }[];
    STORAGE: { value: number; ts: number }[];
    total: { value: number; ts: number }[];
}