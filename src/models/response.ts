export type AuthReponse = {
  access_token: string;
  refresh_token: string;
};
export type ObjectType = { value: string; ts: string };
export type RegisterChartResponse = {
  EMS: ObjectType[];
  STORAGE: ObjectType[];
  total: ObjectType[];
};

export type TableApiResponse<T> = {
  total_pages: number;
  total_elements: number;
  data: T[]
};
