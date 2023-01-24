import Axios from "axios";

export const BASE_URL = "/api";

export const api = Axios.create({
  baseURL: BASE_URL,
});

export const fetcher = async (url: string) => {
  const { data } = await api.get(url);
  return data;
};
