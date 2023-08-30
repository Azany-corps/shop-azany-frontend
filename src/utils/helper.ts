import { STORAGE_TOKEN } from "./constants";

export const getAuthToken = (config: any) => {
  const token = sessionStorage.getItem(STORAGE_TOKEN);
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
};