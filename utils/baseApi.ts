import Axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

console.log(BASE_URL);

export const api = Axios.create({
  baseURL: BASE_URL,
});
